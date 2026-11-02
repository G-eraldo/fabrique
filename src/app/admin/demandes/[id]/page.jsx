import AdminControls from "@/components/AdminControls";
import { requireAdmin } from "@/lib/adminAuth";
import { SERVICE_LABELS, STATUS } from "@/lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";

export const metadata = {
  title: "Fiche prospect",
  robots: { index: false, follow: false },
};
const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const answerLabels = {
  siteType: "Type de site",
  currentSite: "Site actuel",
  features: "Fonctionnalités",
  deadline: "Échéance",
  trigger: "Déclencheur",
  tools: "Outils",
  volume: "Volume",
  outcome: "Résultat attendu",
  agentTools: "Outils à connecter",
  hosting: "Hébergement",
  humanValidation: "Validation humaine",
  business: "Métier",
  diagnosticTools: "Outils utilisés",
  priority: "Priorité",
  contactPreference: "Contact préféré",
};
function formatDate(value) {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(new Date(value));
}

export default async function LeadPage({ params }) {
  const { supabase } = await requireAdmin();
  const { id } = await params;
  if (!UUID.test(id)) notFound();
  const [{ data: lead, error }, { data: events }] = await Promise.all([
    supabase
      .from("fabrique_leads")
      .select(
        "id,created_at,updated_at,name,company,email,phone,activity,service,source,message,answers,status,consent_at",
      )
      .eq("id", id)
      .maybeSingle(),
    supabase
      .from("fabrique_lead_events")
      .select("id,created_at,kind,status_before,status_after,content")
      .eq("lead_id", id)
      .order("created_at", { ascending: false })
      .limit(100),
  ]);
  if (error || !lead) notFound();
  return (
    <section className="admin-page section-tight">
      <div className="container">
        <p>
          <Link className="inline-link" href="/admin">
            ← Toutes les demandes
          </Link>
        </p>
        <div className="admin-toolbar">
          <div>
            <span className="eyebrow">Fiche prospect</span>
            <h1>{lead.name}</h1>
            <p className="muted">
              {SERVICE_LABELS[lead.service]} · Demande reçue le{" "}
              {formatDate(lead.created_at)}
            </p>
          </div>
          <span className="badge">{STATUS[lead.status]}</span>
        </div>
        <div className="admin-detail">
          <div style={{ display: "grid", gap: "1.3rem" }}>
            <div className="admin-panel">
              <h2 className="h3">Coordonnées et demande</h2>
              <dl>
                <dt>Nom</dt>
                <dd>{lead.name}</dd>
                <dt>Entreprise</dt>
                <dd>{lead.company || "—"}</dd>
                <dt>E-mail</dt>
                <dd>
                  <a className="inline-link" href={"mailto:" + lead.email}>
                    {lead.email}
                  </a>
                </dd>
                <dt>Téléphone</dt>
                <dd>
                  {lead.phone ? (
                    <a className="inline-link" href={"tel:" + lead.phone}>
                      {lead.phone}
                    </a>
                  ) : (
                    "—"
                  )}
                </dd>
                <dt>Activité</dt>
                <dd>{lead.activity || "—"}</dd>
                <dt>Service</dt>
                <dd>{SERVICE_LABELS[lead.service]}</dd>
                <dt>Source</dt>
                <dd>{lead.source}</dd>
                <dt>Information lue</dt>
                <dd>{formatDate(lead.consent_at)}</dd>
              </dl>
              <h3 className="h3" style={{ marginTop: "1.5rem" }}>
                Besoin exprimé
              </h3>
              <p style={{ whiteSpace: "pre-wrap" }}>{lead.message}</p>
              {Object.keys(lead.answers || {}).length > 0 && (
                <>
                  <h3 className="h3" style={{ marginTop: "1.5rem" }}>
                    Réponses complémentaires
                  </h3>
                  <dl>
                    {Object.entries(lead.answers).map(([key, value]) => (
                      <Fragment key={key}>
                        <dt>{answerLabels[key] || key}</dt>
                        <dd>{String(value)}</dd>
                      </Fragment>
                    ))}
                  </dl>
                </>
              )}
            </div>
            <div className="admin-panel">
              <h2 className="h3">Historique</h2>
              <div className="admin-timeline">
                {(events || []).map((event) => (
                  <div className="admin-event" key={event.id}>
                    <small>{formatDate(event.created_at)}</small>
                    {event.kind === "note" ? (
                      <p style={{ whiteSpace: "pre-wrap" }}>{event.content}</p>
                    ) : (
                      <p>
                        Statut :{" "}
                        {event.status_before
                          ? STATUS[event.status_before] + " → "
                          : ""}
                        {STATUS[event.status_after]}
                      </p>
                    )}
                  </div>
                ))}
                {!events?.length && (
                  <p className="muted">Aucune interaction enregistrée.</p>
                )}
              </div>
            </div>
          </div>
          <AdminControls id={lead.id} status={lead.status} />
        </div>
      </div>
    </section>
  );
}
