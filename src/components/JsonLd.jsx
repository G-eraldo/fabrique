import { SITE_URL } from "@/lib/site";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "La Fabrique du Code",
    url: SITE_URL,
    logo: SITE_URL + "/logo.svg",
    description:
      "Création de sites web, automatisations n8n et assistants IA pour les professionnels.",
    founder: { "@type": "Person", name: "Gérald François" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "commercial",
      email: "contact@lafabriqueducode.fr",
      telephone: "+33767265366",
      availableLanguage: "fr",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Somme" },
      { "@type": "AdministrativeArea", name: "Hauts-de-France" },
      { "@type": "Country", name: "France" },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
