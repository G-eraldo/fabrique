import Formcontent from "@/components/FormContent";

export const metadata = {
  // 1. TITRE UNIQUE
  title: "Gérald François | Développeur Web Freelance à Amiens",

  // 2. DESCRIPTION CIBLÉE
  description:
    "Contactez Gérald François, auto-entrepreneur web à Amiens. Spécialisé en sites vitrines, e-commerce et SEO pour entreprises locales des Hauts-de-France.",

  // 3. CANONICAL SPÉCIFIQUE
  alternates: {
    canonical: "https://lafabriqueducode.fr/contact",
  },

  // 4. OPEN GRAPH SPÉCIFIQUE (Optionnel mais recommandé)
  openGraph: {
    title: "Contactez le Développeur Web Gérald François (Amiens)",
    description:
      "Prenez contact pour un devis gratuit pour votre projet de site web sur Amiens et les Hauts-de-France.",
  },
};

export default function page() {
  return (
    <>
      <Formcontent />
    </>
  );
}
