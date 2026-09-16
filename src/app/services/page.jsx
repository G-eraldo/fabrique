import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Code, Monitor, ShoppingCart } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services web pour TPE et PME à Amiens",

  // 2. DESCRIPTION CIBLÉE (Optimisation des services clés et de la proposition de valeur)
  description:
    "Découvrez les services de La Fabrique du Code : sites vitrines, e-commerce et applications web sur mesure pour TPE et PME à Amiens et dans les Hauts-de-France.",

  // 3. URL CANONIQUE SPÉCIFIQUE
  alternates: {
    canonical: "https://lafabriqueducode.fr/services", // Vérifiez que le chemin d'accès est correct
  },

  // 4. OPEN GRAPH (Pour les partages sociaux)
  openGraph: {
    title: "Services de développement web pour TPE et PME",
    description:
      "Des solutions sur mesure pour créer ou faire évoluer votre présence en ligne.",
  },

  // 5. MOTS-CLÉS ADDITIONNELS
  keywords: [
    "devis site e-commerce",
    "développement web sur mesure prix",
    "offre création site web Amiens",
  ],
};

export default function page() {
  const services = [
    {
      id: 1,
      icon: Monitor,
      title: "Site Vitrine",
      description:
        "L'essentiel pour présenter votre activité, rassurer vos prospects et être trouvé sur Google localement. Le site qui travaille pour vous 24h/24.",
      features: [
        "Design adapté (Mobile & Tablette)",
        "Optimisation SEO locale (Google Maps)",
        "Formulaire de contact + anti-spam",
        "Formation de prise en main (2h)",
      ],
      cta: "Demander un devis pour un site vitrine",
    },
    {
      id: 2,
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Votre boutique en ligne ouverte 24h/24. Une plateforme de vente robuste, sécurisée et facile à gérer pour maximiser vos revenus.",
      features: [
        "Catalogue produits illimité",
        "Paiement sécurisé (Stripe/Paypal)",
        "Gestion des stocks simple",
        "Tableau de bord administrateur intuitif",
      ],
      cta: "Parler de mon projet e-commerce",
    },
    {
      id: 3,
      icon: Code,
      title: "Sur Mesure / App Web",
      description:
        "Pour les projets uniques et complexes : outils métiers personnalisés, plateformes de réservation, ou applications web spécifiques.",
      features: [
        "Architecture évolutive et adaptative",
        "Base de données personnalisée",
        "Espace membre / Authentification",
        "Maintenance évolutive",
      ],
      cta: "Échanger sur mon projet sur mesure",
    },
  ];
  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Des services web <span className="text-amber-500">adaptés à votre projet</span>
          </h1>
          <p className="text-xl text-slate-600">
            Site vitrine, e-commerce ou application web : construisons une
            solution utile à votre activité et à vos clients.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 hover:border-amber-500 relative flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-slate-900 rounded flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <service.icon
                  size={24}
                  strokeWidth={2.5}
                  className="text-white"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8 border-t pt-4">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm text-slate-500"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="/contact">{service.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-inner border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Un accompagnement clair, du besoin à la mise en ligne
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-600">
            {[
              "Référencement adapté au projet",
              "Formation à la prise en main",
              "Hébergement et nom de domaine sur demande",
              "Design sur mesure",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-2 bg-slate-50 rounded-lg"
              >
                <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500 max-w-3xl mx-auto">
            Le périmètre, le calendrier et les modalités de support sont définis
            avec vous dans le devis. Ils peuvent évoluer selon les contenus,
            fonctionnalités et validations nécessaires.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild variant="outline">
              <Link href="/portfolio">Voir des réalisations et démonstrations</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Demander un devis adapté</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
