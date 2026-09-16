import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Réalisations et démonstrations web à Amiens",

  // 2. DESCRIPTION CIBLÉE (Optimisation Expertise et Preuve Sociale)
  description:
    "Découvrez des réalisations clientes et démonstrations de sites vitrines, e-commerce et applications web créées par La Fabrique du Code à Amiens.",

  // 3. URL CANONIQUE SPÉCIFIQUE
  alternates: {
    canonical: "https://lafabriqueducode.fr/portfolio", // Vérifiez que le chemin d'accès est correct
  },

  // 4. OPEN GRAPH (Pour les partages sociaux)
  openGraph: {
    title: "Réalisations et démonstrations web par Gérald François",
    description:
      "Voir des réalisations clientes et démonstrations de sites vitrines, e-commerce et applications web.",
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
      id: 0,
      img: "/site_sacre_coeur.png",
      title: "Site Institution du Sacré Cœur",
      type: "Site vitrine",
      description:
        "Création d'un site vitrine pour l'Institution du Sacré Cœur à Breteuil : École, Collège (SEGPA) et Internat.",
      tags: ["Nuxt.js", "SEO", "Actualités", "Multi-établissements"],
      linkText: "Voir le projet détaillé",
      href: "https://www.sacrecoeur-breteuil.fr/",
      category: "client",
    },
    {
      id: 2,
      img: "/site_1.png",
      title: "Les Photos de Cécile",
      type: "Portfolio Photographe",
      description:
        "Création d'un portfolio pour une artiste photographe. Objectif : faire de ce site, la vitrine de son travail.",
      tags: ["Galerie HD", "SEO", "Mollie", "Strapi"],
      linkText: "Voir le projet détaillé",
      href: "https://lesphotosdececile.fr",
      category: "client",
    },
    {
      id: 3,
      img: "/site_4.png",
      title: "Démonstration pour un restaurant",
      type: "Projet de démonstration",
      description:
        "Démonstration d'un site vitrine imaginé pour présenter l'activité d'un restaurant.",
      tags: ["Nuxt.js", "SEO"],
      linkText: "Voir le projet détaillé",
      href: "https://le-bistrot-gourmand.vercel.app/",
      category: "demo",
    },
    {
      id: 4,
      img: "/site_3.png",
      title: "Démonstration pour une pizzeria",
      type: "Projet de démonstration",
      description:
        "Démonstration d'un site de pizzeria avec click and collect et livraison.",
      tags: ["Nuxt.js", "Stripe", "SEO"],
      linkText: "Voir le projet détaillé",
      href: "https://pizza-planet-six.vercel.app/",
      category: "demo",
    },
    {
      id: 5,
      img: "/site_6.png",
      title: "Démonstration pour un caviste",
      type: "Projet de démonstration",
      description:
        "Démonstration d'un site vitrine imaginé pour un caviste.",
      tags: ["Nuxt.js", "SEO"],
      linkText: "Voir le projet détaillé",
      href: "https://demo-caviste.netlify.app/",
      category: "demo",
    },
    {
      id: 6,
      img: "/site_5.png",
      title: "Démonstration pour un plombier",
      type: "Projet de démonstration",
      description:
        "Démonstration d'un site vitrine imaginé pour un plombier.",
      tags: ["Nuxt.js", "SEO"],
      linkText: "Voir le projet détaillé",
      href: "https://plumber-site-psi.vercel.app/",
      category: "demo",
    },

    {
      id: 7,
      img: "/site_2.png",
      title: "Démonstration d'intégration web",
      type: "Exercice de formation",
      description:
        "Exercice de formation : reproduction front-end de la page d'accueil easyJet.",
      tags: ["HTML", "CSS", "Responsive"],
      linkText: "Voir le projet détaillé",
      href: "https://lambent-parfait-50538f.netlify.app",
      category: "demo",
    },
  ];
  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Réalisations clientes et <span className="text-amber-500">démonstrations</span>
          </h1>
          <p className="text-xl text-slate-600">
            Découvrez des projets réalisés pour des clients et des démonstrations
            conçues pour illustrer mon approche technique.
          </p>
        </div>

        <section aria-labelledby="realisations-clients" className="mb-16">
          <div className="mb-8">
            <h2 id="realisations-clients" className="text-3xl font-bold text-slate-900 mb-2">
              Réalisations clientes
            </h2>
            <p className="text-slate-600">Des sites livrés pour des organisations et indépendants.</p>
          </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter((project) => project.category === "client").map((project) => (
            <Link
              key={project.id}
              href={project.href}
              target="_blank"
              className="group block h-full"
            >
              <Card className="bg-white p-8 rounded-2xl shadow-md group-hover:shadow-xl border border-slate-100 transition-all duration-300 group-hover:border-amber-500 relative flex flex-col h-full">
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
                  <div className="mt-4 text-amber-500 font-semibold flex items-center group-hover:text-amber-600 transition-colors">
                    <span className="flex items-center">
                      {project.linkText} <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        </section>

        <section aria-labelledby="demonstrations" className="mb-16">
          <div className="mb-8">
            <h2 id="demonstrations" className="text-3xl font-bold text-slate-900 mb-2">
              Démonstrations et exercices
            </h2>
            <p className="text-slate-600">Des projets d&apos;entraînement conçus pour montrer des parcours et fonctionnalités possibles.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter((project) => project.category === "demo").map((project) => (
              <Link
                key={project.id}
                href={project.href}
                target="_blank"
                className="group block h-full"
              >
                <Card className="bg-white p-8 rounded-2xl shadow-md group-hover:shadow-xl border border-slate-100 transition-all duration-300 group-hover:border-amber-500 relative flex flex-col h-full">
                  <div className="h-48 flex items-center justify-center relative overflow-hidden">
                    <Image src={project.img} alt={project.title} width={384} height={192} className="object-cover" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-2">{project.type}</p>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">{tag}</span>)}
                    </div>
                    <div className="mt-4 text-amber-500 font-semibold flex items-center group-hover:text-amber-600 transition-colors">
                      <span className="flex items-center">{project.linkText} <ArrowRight className="ml-2 w-4 h-4" /></span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
        <div className="col-span-full text-center mt-8 p-10 bg-slate-300 rounded-2xl">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            Votre projet sera le prochain !
          </h3>
          <p className="text-slate-600 mb-6">
            Parlons de votre activité et du site dont vous avez réellement besoin.
          </p>
          <Button asChild>
            <Link href="/contact">Démarrer mon projet</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
