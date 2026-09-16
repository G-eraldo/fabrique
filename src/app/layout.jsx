import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import "./globals.css";
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata = {
  // =====================================================
  // INFORMATIONS DE BASE
  // =====================================================
  metadataBase: new URL("https://lafabriqueducode.fr"),

  // Titre et description (affichés dans Google Search)
  title: {
    template: "%s | La Fabrique du Code",
    default: "Création de sites web pour TPE et PME à Amiens",
  },
  description:
    "Création de sites vitrines, e-commerce et applications web pour TPE, PME, artisans et commerçants à Amiens et dans les Hauts-de-France.",

  // =====================================================
  // MOTS-CLÉS
  // =====================================================
  keywords: [
    "développeur web Amiens",
    "création site vitrine",
    "sites vitrines",
    "création de site",
    "concepteur de sites web",
    "e-commerce Amiens",
    "application web",
    "Hauts-de-France",
    "web design",
    "développement web professionnel",
    "création de sites web Hauts-de-France",
    "développeur web freelance Amiens",
    "sites vitrines sur mesure",
    "blogs professionnels",
    "portfolios en ligne",
    "solutions web personnalisées",
    "optimisation SEO sites web",
  ],

  // =====================================================
  // AUTEURS ET CRÉATEURS
  // =====================================================
  authors: [
    {
      name: "Gérald François",
      url: "https://lafabriqueducode.fr",
    },
  ],
  creator: "Gérald François",
  publisher: "La Fabrique du Code",

  // =====================================================
  // ROBOTS ET CRAWLERS
  // =====================================================
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // =====================================================
  // CANONICAL ET ALTERNATES
  // =====================================================
  alternates: {
    canonical: "https://lafabriqueducode.fr",
    languages: {
      "fr-FR": "https://lafabriqueducode.fr",
    },
  },

  // =====================================================
  // OPEN GRAPH (Facebook, LinkedIn, etc.)
  // =====================================================
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lafabriqueducode.fr",
    siteName: "La Fabrique du Code",
    title: "Création de sites web pour TPE et PME à Amiens",
    description:
      "Sites vitrines, e-commerce et applications web pour TPE, PME, artisans et commerçants à Amiens et dans les Hauts-de-France.",
    images: [
      {
        url: "https://lafabriqueducode.fr/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "La Fabrique du Code - Développement Web",
        type: "image/jpeg",
      },
    ],
  },

  // =====================================================
  // TWITTER CARD (Twitter/X)
  // =====================================================
  twitter: {
    card: "summary_large_image",
    title: "Création de sites web pour TPE et PME à Amiens",
    description: "Sites vitrines, e-commerce et applications web à Amiens",
    images: ["https://lafabriqueducode.fr/logo.jpeg"],
    creator: "@GeraldFrancois",
  },

  // =====================================================
  // DÉTECTION DE FORMATS
  // =====================================================
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // =====================================================
  // CONFIGURATION APPLE
  // =====================================================
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "La Fabrique du Code",
  },

  // =====================================================
  // GÉOLOCALISATION (LOCAL SEO)
  // =====================================================
  other: {
    "geo.region": "FR-80",
    "geo.placename": "Amiens, Somme, Hauts-de-France",
    "DC.title": "Développement de sites web professionnels Amiens et Somme",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <body suppressHydrationWarning className="flex flex-col h-full">
        <Header />
        <main className="grow">{children}</main>
        <Analytics />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
