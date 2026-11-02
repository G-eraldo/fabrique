export const SITE_URL = "https://lafabriqueducode.fr";

export const SERVICES = [
  {
    key: "site-web",
    number: "01",
    title: "Création de sites web",
    short: "Un site clair, rapide et pensé pour vos clients.",
    href: "/creation-site-web",
    icon: "web",
  },
  {
    key: "automatisation",
    number: "02",
    title: "Automatisations n8n",
    short: "Vos tâches répétitives circulent sans ressaisie inutile.",
    href: "/automatisations",
    icon: "workflow",
  },
  {
    key: "agent-ia",
    number: "03",
    title: "Assistants IA Hermes",
    short: "Un assistant cadré, relié à vos outils après vérification.",
    href: "/agents-ia/hermes",
    icon: "spark",
  },
  {
    key: "diagnostic-ia",
    number: "04",
    title: "Diagnostic IA gratuit",
    short: "Un échange de 20 à 30 minutes pour trouver des pistes concrètes.",
    href: "/diagnostic-ia",
    icon: "search",
  },
];

export const STATUS = {
  nouveau: "Nouveau",
  "a-contacter": "À contacter",
  "en-echange": "En échange",
  "devis-envoye": "Devis envoyé",
  gagne: "Gagné",
  perdu: "Perdu",
  archive: "Archivé",
};

export const SERVICE_LABELS = {
  "site-web": "Création de site web",
  automatisation: "Automatisation n8n",
  "agent-ia": "Assistant IA Hermes",
  "diagnostic-ia": "Diagnostic IA gratuit",
  autre: "Autre besoin",
};

export function contactHref(service = "", source = "") {
  const query = new URLSearchParams();
  if (service) query.set("service", service);
  if (source) query.set("source", source);
  return "/contact" + (query.size ? "?" + query.toString() : "");
}
