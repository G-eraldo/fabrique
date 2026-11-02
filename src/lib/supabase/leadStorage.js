import { createSupabaseServiceClient } from "@/lib/supabase/service";
import { SUPABASE_CA } from "@/lib/supabase/supabaseCa";
import pg from "pg";
import "server-only";

const INSERT_LEAD = `
  select public.fabrique_submit_lead(
    $1::uuid, $2::text, $3::text, $4::text, $5::text, $6::text,
    $7::text, $8::text, $9::text, $10::jsonb, $11::text
  )
`;

function databaseConnectionString() {
  const value = process.env.SUPABASE_DATABASE_URL;
  if (!value) return null;
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error("Invalid database configuration");
  }
  const sslmode = parsed.searchParams.get("sslmode");
  if (
    !["postgres:", "postgresql:"].includes(parsed.protocol) ||
    (sslmode && !["require", "verify-ca", "verify-full"].includes(sslmode))
  )
    throw new Error("Invalid database configuration");
  // pg's connection-string SSL options override the explicit CA configuration.
  parsed.searchParams.delete("sslmode");
  return parsed.toString();
}

export async function storeLead(lead) {
  const connectionString = databaseConnectionString();
  if (connectionString) {
    const client = new pg.Client({
      connectionString,
      connectionTimeoutMillis: 10000,
      ssl: { ca: SUPABASE_CA, rejectUnauthorized: true },
    });
    try {
      await client.connect();
      await client.query(INSERT_LEAD, [
        lead.p_submission_id,
        lead.p_name,
        lead.p_company,
        lead.p_email,
        lead.p_phone,
        lead.p_activity,
        lead.p_service,
        lead.p_source,
        lead.p_message,
        JSON.stringify(lead.p_answers),
        lead.p_fingerprint,
      ]);
    } finally {
      await client.end().catch(() => {});
    }
    return;
  }

  const supabase = createSupabaseServiceClient();
  const { error } = await supabase.rpc("fabrique_submit_lead", lead);
  if (error) throw error;
}
