import { Card } from "@/components/ui/card";
import { CheckCircle, Code, Monitor, ShoppingCart } from "lucide-react";

export const metadata = {
  // 1. TITRE UNIQUE (Optimisation Services + Tarifs)
  title: "Services & Tarifs | Création Sites Web Vitrine, E-commerce à Amiens",

  // 2. DESCRIPTION CIBLÉE (Optimisation des services clés et de la proposition de valeur)
  description:
    "Découvrez les tarifs clairs de La Fabrique du Code pour la création de sites vitrines, e-commerce et applications web sur mesure. Expertise locale à Amiens (Hauts-de-France).",

  // 3. URL CANONIQUE SPÉCIFIQUE
  alternates: {
    canonical: "https://lafabriqueducode.fr/services", // Vérifiez que le chemin d'accès est correct
  },

  // 4. OPEN GRAPH (Pour les partages sociaux)
  openGraph: {
    title: "Nos Services de Développement Web avec Tarifs",
    description:
      "Des solutions sur mesure et professionnelles avec tarifs transparents. SEO, support et formation inclus.",
  },

  // 5. MOTS-CLÉS ADDITIONNELS
  keywords: [
    "tarifs création site web Amiens",
    "prix site vitrine freelance",
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
    },
  ];
  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Mes Services & Tarifs <span className="text-amber-500">Clairs</span>
          </h1>
          <p className="text-xl text-slate-600">
            Des solutions sur-mesure pour chaque besoin professionnel. Chaque
            projet inclut le SEO, le support et la formation.
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
              <div className="text-amber-600 font-bold text-lg mb-4">
                {service.price}
              </div>
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
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-inner border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-3">
            Ce qui est toujours inclus
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-600">
            {[
              "SEO Inclus",
              "Support 3 Mois",
              "Hébergement / Nom de Domaine (Option)",
              "Design sur-mesure",
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
        </div>
      </div>
    </div>
  );
}
