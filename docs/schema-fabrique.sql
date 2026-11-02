-- La Fabrique du Code : tables séparées des données miametrie.
-- À appliquer dans le projet Supabase suivi-calories.

create table if not exists public.fabrique_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.fabrique_leads (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  company text check (char_length(company) <= 160),
  email text not null check (char_length(email) <= 254),
  phone text check (char_length(phone) <= 40),
  activity text check (char_length(activity) <= 160),
  service text not null check (service in ('site-web', 'automatisation', 'agent-ia', 'diagnostic-ia', 'autre')),
  source text not null check (char_length(source) between 1 and 120),
  message text not null check (char_length(message) between 10 and 4000),
  answers jsonb not null default '{}'::jsonb check (jsonb_typeof(answers) = 'object'),
  status text not null default 'nouveau' check (status in ('nouveau', 'a-contacter', 'en-echange', 'devis-envoye', 'gagne', 'perdu', 'archive')),
  consent_at timestamptz not null
);

create index if not exists fabrique_leads_created_idx on public.fabrique_leads (created_at desc);
create index if not exists fabrique_leads_filter_idx on public.fabrique_leads (service, status, created_at desc);

create table if not exists public.fabrique_lead_events (
  id bigint generated always as identity primary key,
  lead_id uuid not null references public.fabrique_leads(id) on delete cascade,
  created_at timestamptz not null default now(),
  actor_id uuid references auth.users(id) on delete set null,
  kind text not null check (kind in ('status', 'note')),
  status_before text,
  status_after text,
  content text check (char_length(content) <= 4000),
  constraint fabrique_event_content check (
    (kind = 'status' and status_after is not null and content is null)
    or (kind = 'note' and content is not null and char_length(content) between 2 and 4000 and status_after is null)
  )
);

create index if not exists fabrique_events_lead_idx on public.fabrique_lead_events (lead_id, created_at desc);
create index if not exists fabrique_events_actor_idx on public.fabrique_lead_events (actor_id);

create schema if not exists fabrique_internal;
revoke all on schema fabrique_internal from public;
grant usage on schema fabrique_internal to service_role;

create table if not exists fabrique_internal.rate_limits (
  fingerprint text primary key,
  window_started_at timestamptz not null,
  hits integer not null check (hits > 0)
);
alter table fabrique_internal.rate_limits enable row level security;
grant select, insert, update on fabrique_internal.rate_limits to service_role;

alter table public.fabrique_admins enable row level security;
alter table public.fabrique_leads enable row level security;
alter table public.fabrique_lead_events enable row level security;

revoke all on public.fabrique_admins, public.fabrique_leads, public.fabrique_lead_events from anon, authenticated;
grant select on public.fabrique_admins to authenticated;
revoke update on public.fabrique_leads from authenticated;
grant select, delete on public.fabrique_leads to authenticated;
grant update (status, updated_at) on public.fabrique_leads to authenticated;
grant select, insert on public.fabrique_lead_events to authenticated;
grant all on public.fabrique_admins, public.fabrique_leads, public.fabrique_lead_events to service_role;
grant usage, select on sequence public.fabrique_lead_events_id_seq to authenticated, service_role;

create policy fabrique_admin_read_self on public.fabrique_admins
  for select to authenticated using (user_id = (select auth.uid()));

create policy fabrique_leads_admin_select on public.fabrique_leads
  for select to authenticated using (
    exists (select 1 from public.fabrique_admins a where a.user_id = (select auth.uid()))
  );
create policy fabrique_leads_admin_update on public.fabrique_leads
  for update to authenticated using (
    exists (select 1 from public.fabrique_admins a where a.user_id = (select auth.uid()))
  ) with check (
    exists (select 1 from public.fabrique_admins a where a.user_id = (select auth.uid()))
  );
create policy fabrique_leads_admin_delete on public.fabrique_leads
  for delete to authenticated using (
    exists (select 1 from public.fabrique_admins a where a.user_id = (select auth.uid()))
  );

create policy fabrique_events_admin_select on public.fabrique_lead_events
  for select to authenticated using (
    exists (select 1 from public.fabrique_admins a where a.user_id = (select auth.uid()))
  );
create policy fabrique_events_admin_insert on public.fabrique_lead_events
  for insert to authenticated with check (
    actor_id = (select auth.uid())
    and kind = 'note'
    and exists (select 1 from public.fabrique_admins a where a.user_id = (select auth.uid()))
  );

create or replace function fabrique_internal.log_status()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if tg_op = 'INSERT' then
    insert into public.fabrique_lead_events (lead_id, actor_id, kind, status_before, status_after)
    values (new.id, (select auth.uid()), 'status', null, new.status);
  elsif old.status is distinct from new.status then
    insert into public.fabrique_lead_events (lead_id, actor_id, kind, status_before, status_after)
    values (new.id, (select auth.uid()), 'status', old.status, new.status);
  end if;
  return new;
end;
$$;
revoke all on function fabrique_internal.log_status() from public;

create trigger fabrique_lead_status_history
after insert or update of status on public.fabrique_leads
for each row execute function fabrique_internal.log_status();

create or replace function public.fabrique_submit_lead(
  p_submission_id uuid,
  p_name text,
  p_company text,
  p_email text,
  p_phone text,
  p_activity text,
  p_service text,
  p_source text,
  p_message text,
  p_answers jsonb,
  p_fingerprint text
) returns uuid language plpgsql security invoker set search_path = '' as $$
declare
  v_id uuid;
  v_hits integer;
  v_now timestamptz := now();
begin
  if p_submission_id is null or p_fingerprint !~ '^[a-f0-9]{64}$'
    or char_length(trim(coalesce(p_name, ''))) not between 2 and 120
    or char_length(coalesce(p_company, '')) > 160
    or char_length(coalesce(p_email, '')) > 254
    or p_email !~* '^[^[:space:]@]+@[^[:space:]@]+[.][^[:space:]@]+$'
    or char_length(coalesce(p_phone, '')) > 40
    or char_length(coalesce(p_activity, '')) > 160
    or p_service not in ('site-web', 'automatisation', 'agent-ia', 'diagnostic-ia', 'autre')
    or char_length(coalesce(p_source, '')) not between 1 and 120
    or char_length(trim(coalesce(p_message, ''))) not between 10 and 4000
    or p_answers is null
    or jsonb_typeof(p_answers) <> 'object'
    or char_length(p_answers::text) > 8000 then
    raise exception 'invalid_lead';
  end if;

  select id into v_id from public.fabrique_leads where submission_id = p_submission_id;
  if found then return v_id; end if;

  insert into fabrique_internal.rate_limits as r (fingerprint, window_started_at, hits)
    values (p_fingerprint, v_now, 1)
  on conflict (fingerprint) do update set
    hits = case when r.window_started_at < v_now - interval '1 hour' then 1 else r.hits + 1 end,
    window_started_at = case when r.window_started_at < v_now - interval '1 hour' then v_now else r.window_started_at end
  returning hits into v_hits;

  if v_hits > 6 then raise exception 'rate_limited'; end if;

  insert into public.fabrique_leads
    (submission_id, name, company, email, phone, activity, service, source, message, answers, consent_at)
  values
    (p_submission_id, trim(p_name), nullif(trim(p_company), ''), lower(trim(p_email)),
     nullif(trim(p_phone), ''), nullif(trim(p_activity), ''), p_service, p_source,
     trim(p_message), p_answers, v_now)
  on conflict (submission_id) do nothing returning id into v_id;

  if v_id is null then
    select id into v_id from public.fabrique_leads where submission_id = p_submission_id;
  end if;
  return v_id;
end;
$$;
revoke all on function public.fabrique_submit_lead(uuid,text,text,text,text,text,text,text,text,jsonb,text) from public, anon, authenticated;
grant execute on function public.fabrique_submit_lead(uuid,text,text,text,text,text,text,text,text,jsonb,text) to service_role;
