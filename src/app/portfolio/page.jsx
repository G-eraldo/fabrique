import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  // 1. TITRE UNIQUE (Optimisation Services + Localisation)
  title: "Portfolio | Réalisations de Sites Web à Amiens & Hauts-de-France",

  // 2. DESCRIPTION CIBLÉE (Optimisation Expertise et Preuve Sociale)
  description:
    "Découvrez le portfolio de La Fabrique du Code : études de cas réelles en sites vitrines, e-commerce et applications web. Qualité professionnelle garantie à Amiens.",

  // 3. URL CANONIQUE SPÉCIFIQUE
  alternates: {
    canonical: "https://lafabriqueducode.fr/portfolio", // Vérifiez que le chemin d'accès est correct
  },

  // 4. OPEN GRAPH (Pour les partages sociaux)
  openGraph: {
    title: "Portfolio : Sites Vitrines et E-commerce par Gérald François",
    description:
      "Voir les projets réalisés pour des clients en Hauts-de-France (Next.js, React, SEO).",
  },

  // 5. MOTS-CLÉS ADDITIONNELS
  keywords: [
    "portfolio développeur web Amiens",
    "études de cas création site",
    "réalisations e-commerce",
    "exemples sites vitrines Next.js",
  ],
};

export default function page() {
  const projects = [
    {
      id: 1,
      img: "/site_1.png",
      title: "Les Photos de Cécile",
      type: "Portfolio Photographe",
      description:
        "Création d'un portfolio pour une artiste photographe. Objectif : faire de ce site, la vitrine de son travail.",
      tags: ["Galerie HD", "SEO", "Stripe"],
      linkText: "Voir le projet détaillé",
      href: "https://les-photos-de-cecile-l7f5.vercel.app/",
    },
    {
      id: 2,
      img: "/site_2.png",
      title: "Réplique easyJet",
      type: "Intégration web Front-End",
      description:
        "Reproduire la page d'accueil du site easyJet front-end dans le cadre de ma formation.",
      tags: ["HTML", "CSS", "Responsive"],
      linkText: "Voir le projet détaillé",
      href: "https://lambent-parfait-50538f.netlify.app",
    },
    {
      id: 3,
      img: "/site_3.png",
      title: "Site fiction d'une pizzeria",
      type: "Site e-commerce",
      description:
        "Création d'un site pour une pizzeria. Objectif : faire de ce site, la vitrine de son travail, permettre le click and collect et la livraison.",
      tags: ["Nuxt.js", "Stripe", "SEO"],
      linkText: "Voir le projet détaillé",
      href: "https://pizza-planet-six.vercel.app/",
    },
  ];
  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Mes <span className="text-amber-500">Études de Cas</span> &
            Réalisations
          </h1>
          <p className="text-xl text-slate-600">
            Chaque projet est un partenariat visant un objectif clair :
            développer votre activité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 hover:border-amber-500 relative flex flex-col h-full"
            >
              <div className="h-48 flex items-center justify-center relative overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={384}
                  height={192}
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 text-amber-500 font-semibold flex items-center hover:text-amber-600 transition-colors">
                  <Link
                    href={project.href}
                    target="_blank"
                    className="flex items-center"
                  >
                    {project.linkText} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </button>
              </div>
            </Card>
          ))}
        </div>
        <div className="col-span-full text-center mt-8 p-10 bg-slate-300 rounded-2xl">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            Votre projet sera le prochain !
          </h3>
          <p className="text-slate-600 mb-6">
            J'utilise toujours les technologies les plus modernes pour garantir
            la performance.
          </p>
          <Button>
            <Link href="/contact">Démarrer mon projet</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
