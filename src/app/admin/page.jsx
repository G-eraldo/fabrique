/* eslint-disable react/no-unescaped-entities */
import { logoutAdmin } from "@/lib/adminActions";
import { requireAdmin } from "@/lib/adminAuth";
import { SERVICE_LABELS, STATUS } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "Demandes reçues",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

function formatDate(value) {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(new Date(value));
}

export default async function AdminPage({ searchParams }) {
  const { supabase, user } = await requireAdmin();
  const params = await searchParams;
  const service = SERVICE_LABELS[params?.service] ? params.service : "";
  const status = STATUS[params?.status] ? params.status : "";
  const search =
    typeof params?.q === "string"
      ? params.q
          .replace(/[^\p{L}\p{N} @._-]/gu, "")
          .trim()
          .slice(0, 80)
      : "";
  const page = Math.max(
    1,
    Math.min(1000, Number.parseInt(params?.page, 10) || 1),
  );
  let query = supabase
    .from("fabrique_leads")
    .select("id,created_at,name,company,email,service,status,source", {
      count: "exact",
    });
  if (service) query = query.eq("service", service);
  if (status) query = query.eq("status", status);
  if (search)
    query = query.or(
      "name.ilike.%" +
        search +
        "%,email.ilike.%" +
        search +
        "%,company.ilike.%" +
        search +
        "%",
    );
  const {
    data: leads,
    count,
    error,
  } = await query
    .order("created_at", { ascending: false })
    .range((page - 1) * 25, page * 25 - 1);
  const buildPageHref = (number) => {
    const p = new URLSearchParams();
    if (service) p.set("service", service);
    if (status) p.set("status", status);
    if (search) p.set("q", search);
    p.set("page", String(number));
    return "/admin?" + p.toString();
  };
  return (
    <section className="admin-page section-tight">
      <div className="container">
        <div className="admin-toolbar">
          <div>
            <span className="eyebrow">Mini-CRM privé</span>
            <h1>Demandes reçues</h1>
            <p className="muted">Connecté en tant que {user.email}</p>
          </div>
          <form action={logoutAdmin}>
            <button type="submit" className="btn btn-outline">
              Se déconnecter
            </button>
          </form>
        </div>
        <div className="admin-panel">
          <form className="admin-filters" method="get">
            <input
              className="admin-field"
              type="search"
              name="q"
              defaultValue={search}
              placeholder="Rechercher nom, e-mail, entreprise"
              aria-label="Rechercher une demande"
            />
            <select
              className="admin-field"
              name="service"
              defaultValue={service}
              aria-label="Filtrer par service"
            >
              <option value="">Tous les services</option>
              {Object.entries(SERVICE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <select
              className="admin-field"
              name="status"
              defaultValue={status}
              aria-label="Filtrer par statut"
            >
              <option value="">Tous les statuts</option>
              {Object.entries(STATUS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <button className="btn btn-dark" type="submit">
              Filtrer
            </button>
          </form>
          {error ? (
            <p className="form-error" role="alert">
              Les demandes n'ont pas pu être chargées.
            </p>
          ) : (
            <>
              <p className="muted" style={{ fontSize: ".86rem" }}>
                {count || 0} demande{count === 1 ? "" : "s"}
              </p>
              <div className="table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Prospect</th>
                      <th>Service</th>
                      <th>Statut</th>
                      <th>Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(leads || []).map((lead) => (
                      <tr key={lead.id}>
                        <td>{formatDate(lead.created_at)}</td>
                        <td>
                          <Link href={"/admin/demandes/" + lead.id}>
                            {lead.name}
                          </Link>
                          <br />
                          <small className="muted">
                            {lead.company || lead.email}
                          </small>
                        </td>
                        <td>{SERVICE_LABELS[lead.service]}</td>
                        <td>
                          <span className="badge">{STATUS[lead.status]}</span>
                        </td>
                        <td>{lead.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {!leads?.length && (
                <p className="muted" style={{ padding: "1rem" }}>
                  Aucune demande ne correspond à ces critères.
                </p>
              )}
              <div
                className="btn-row"
                style={{ marginTop: "1rem", justifyContent: "space-between" }}
              >
                {page > 1 ? (
                  <Link
                    className="btn btn-outline"
                    href={buildPageHref(page - 1)}
                  >
                    ← Précédent
                  </Link>
                ) : (
                  <span />
                )}
                {count > page * 25 && (
                  <Link
                    className="btn btn-outline"
                    href={buildPageHref(page + 1)}
                  >
                    Suivant →
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
