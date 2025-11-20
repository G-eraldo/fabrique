export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://lafabriqueducode.fr",
    name: "La Fabrique du Code",
    alternateName: "Fabrique du Code",
    description:
      "Développement web professionnel - Sites vitrines, e-commerce et applications web",
    url: "https://lafabriqueducode.fr",
    telephone: "+33767265366",
    email: "contact@lafabriqueducode.fr",
    image: "https://lafabriqueducode.fr/logo.jpg",
    logo: {
      "@type": "ImageObject",
      url: "https://lafabriqueducode.fr/logo.jpg",
      width: 250,
      height: 60,
    },
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amiens",
      addressRegion: "Hauts-de-France",
      postalCode: "80000",
      addressCountry: "FR",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Amiens",
      },
      {
        "@type": "State",
        name: "Hauts-de-France",
      },
      {
        "@type": "Country",
        name: "France",
      },
    ],
    sameAs: ["https://github.com/G-eraldo"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Web",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Site Vitrine",
            description:
              "Site professionnel pour présenter votre entreprise, vos services et attirer de nouveaux clients",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce",
            description:
              "Vendez vos produits 24h/24 avec une boutique e-commerce sécurisée et facile à gérer avec paiements Stripe",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Applications Web",
            description:
              "Solutions sur mesure : réservations, gestion clients, outils métier personnalisés",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO et Visibilité",
            description:
              "Optimisation pour être visible sur Google et attirer plus de clients locaux",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Responsive Design",
            description:
              "Sites parfaitement adaptés aux mobiles, tablettes et ordinateurs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Support et Accompagnement",
            description:
              "Accompagnement pour gérer votre site en autonomie + support technique",
          },
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+33767265366",
      email: "contact@lafabriqueducode.fr",

      areaServed: "FR",
      availableLanguage: ["fr"],
    },
    foundingDate: "2025",
    foundingLocation: {
      "@type": "Place",
      name: "Amiens",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amiens",
        addressCountry: "FR",
      },
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "La Fabrique du Code",
    url: "https://lafabriqueducode.fr",
    logo: "https://lafabriqueducode.fr/logo.png",
    description:
      "Agence web spécialisée dans le développement de sites professionnels",
    foundingDate: "2025",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+33767265366",
      email: "contact@lafabriqueducode.fr",
    },
    sameAs: ["https://github.com/G-eraldo"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}
