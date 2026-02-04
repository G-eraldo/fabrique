/* eslint-disable react/no-unescaped-entities */
import { CheckCircle, Code, Phone } from "lucide-react";

export const metadata = {
  // 1. TITRE UNIQUE (Optimisation Personne + Localisation)
  title:
    "Gérald François | Développeur Web Freelance à Amiens (Hauts-de-France)",

  // 2. DESCRIPTION CIBLÉE (Optimisation E-E-A-T et Services)
  description:
    "Découvrez Gérald François, auto-entrepreneur web à Amiens. Expertise React, Next.js, SEO, sites vitrines et e-commerce sur mesure pour les professionnels locaux.",

  // 3. URL CANONIQUE SPÉCIFIQUE
  alternates: {
    // Assurez-vous que l'URL est correcte (ex: /a-propos ou /qui-suis-je)
    canonical: "https://lafabriqueducode.fr/a-propos",
  },

  // 4. OPEN GRAPH (Pour les partages sociaux)
  openGraph: {
    title: "Gérald François | Développeur Web Freelance à Amiens",
    description:
      "Le développeur derrière La Fabrique du Code. Partenaire dédié à la réussite digitale des entreprises d'Amiens et des Hauts-de-France.",
  },

  // 5. MOTS-CLÉS ADDITIONNELS (Optionnel, mais renforce le ciblage)
  keywords: [
    "Gérald François développeur",
    "freelance web Amiens",
    "auto-entrepreneur web Hauts-de-France",
    "expert Next.js React",
    "partenaire web Amiens",
  ],
};

export default function page() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Qui est <span className="text-amber-500">Gérald François</span> ?
          </h1>
          <p className="text-xl text-slate-600">
            Derrière chaque ligne de code se trouve un partenaire dédié à votre
            succès.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Presentation Text */}
          <div className="prose max-w-none text-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 mt-0">
              Mon parcours et ma philosophie
            </h2>

            <p className="pt-4">
              Bonjour, je suis Gérald François, auto-entrepreneur web passionné
              basé à proximité d'Amiens (Hauts-de-France).
            </p>

            <p className="pt-4">
              J'ai créé La Fabrique du Code après une formation intensive. Je
              maîtrise l'écosystème web moderne, notamment : Vue.js, Nuxt.js,
              HTML, CSS, JavaScript et les solutions e-commerce robustes comme
              Stripe.
            </p>

            <h3 className="pt-4">Pourquoi travailler avec moi ?</h3>
            <ul className="list-disc pl-5 py-4 space-y-2">
              <li>
                Pas d'agence, pas d'intermédiaire : Vous travaillez directement
                avec le développeur. Cela garantit une communication fluide et
                des coûts optimisés.
              </li>
              <li>
                Je ne vends pas des heures, je vends des sites qui génèrent des
                clients et des ventes. Le référencement (SEO) est toujours
                inclus.
              </li>
              <li>
                Je vous forme pour que vous puissiez gérer votre site sans
                dépendre de moi pour les mises à jour de contenu quotidiennes.
              </li>
            </ul>

            <p>
              Mon objectif est d'accompagner les entreprises locales (artisans,
              restaurateurs, commerçants) à avoir une présence digitale aussi
              efficace que les grandes marques, mais avec l'âme du commerce de
              proximité.
            </p>
          </div>

          {/* Stats and Promise */}
          <div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Mes engagements
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="flex flex-col items-center text-center p-4">
                  <Code className="w-8 h-8 text-amber-400 mb-3" />
                  <p className="text-3xl font-bold text-slate-800 mb-1">
                    Nuxt.js
                  </p>
                  <p className="text-slate-500 text-sm uppercase tracking-wide">
                    Expertise Tech
                  </p>
                </div>
                {/* <div className="flex flex-col items-center text-center p-4">
                  <Star className="w-8 h-8 text-amber-400 mb-3" />
                  <p className="text-3xl font-bold text-slate-800 mb-1">
                    3 ans
                  </p>
                  <p className="text-slate-500 text-sm uppercase tracking-wide">
                    Expérience
                  </p>
                </div> */}
                <div className="flex flex-col items-center text-center p-4">
                  <CheckCircle className="w-8 h-8 text-amber-400 mb-3" />
                  <p className="text-3xl font-bold text-slate-800 mb-1">100%</p>
                  <p className="text-slate-500 text-sm uppercase tracking-wide">
                    SEO Inclus
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <Phone className="w-8 h-8 text-amber-400 mb-3" />
                  <p className="text-3xl font-bold text-slate-800 mb-1">
                    Local
                  </p>
                  <p className="text-slate-500 text-sm uppercase tracking-wide">
                    À Amiens
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">
                La Technologie au service de votre business
              </h3>
              <p className="text-slate-300 mb-4">
                Utiliser des frameworks comme Next.js ou React, c'est garantir à
                votre site une <span className="text-amber-500">vitesse</span>{" "}
                et une <span className="text-amber-500">évolutivité</span>{" "}
                maximales.
              </p>
              <p className="text-slate-300">
                Cela signifie un meilleur score Google et donc plus de
                visibilité que vos concurrents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
