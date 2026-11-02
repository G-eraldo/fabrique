import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import SiteAnalytics from "@/components/SiteAnalytics";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f5ef",
};

export const metadata = {
  metadataBase: new URL("https://lafabriqueducode.fr"),
  title: {
    default: "La Fabrique du Code | Sites web, automatisations et IA",
    template: "%s | La Fabrique du Code",
  },
  description:
    "Je crée des sites web, des automatisations n8n et des assistants IA adaptés aux professionnels de la Somme et de toute la France.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "La Fabrique du Code",
    title: "Développez votre activité. Automatisez le reste.",
    description:
      "Sites web, automatisations et assistants IA adaptés à votre entreprise.",
    url: "https://lafabriqueducode.fr",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:rounded-lg focus:bg-white focus:p-3"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <JsonLd />
        <SiteAnalytics />
      </body>
    </html>
  );
}
