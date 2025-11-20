import Header from "@/components/Header";

// Métadonnées pour le SEO de la page
export const metadata = {
  title: "Mentions Légales - La Fabrique du Code",
  description:
    "Consultez les mentions légales et les informations éditoriales du site lafabriqueducode.fr.",
};

export default function MentionsLegalesPage() {
  return (
    // Wrapper principal qui applique le thème sombre
    <div className="min-h-screen">
      {/* Importation de votre barre de navigation */}
      <Header />

      <main>
        {/* Conteneur principal qui applique le padding, identique aux autres pages */}
        <div className="pt-24 lg:pt-32 pb-16">
          {/* Conteneur max-width externe (identique à vos autres pages) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Bloc Titre Centré (identique à vos autres pages) */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900  sm:text-5xl">
                MENTIONS LÉGALES
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Informations légales et obligatoires concernant le site
                lafabriqueducode.fr.
              </p>
            </div>

            {/* Bloc de Contenu Principal (suit le bloc titre) */}
            <div className="mt-12 max-w-3xl mx-auto">
              {/* Introduction de la loi */}
              <p className="text-slate-600 mb-6 text-lg">
                Conformément aux dispositions de la loi n° 2004-575 du 21 juin
                2004 pour la confiance en l'économie numérique, il est précisé
                aux utilisateurs du site La fabrique du code l'identité des
                différents intervenants dans le cadre de sa réalisation et de
                son suivi.
              </p>

              {/* Section Edition */}
              <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">
                Edition du site
              </h2>
              <p className="text-slate-600 mb-4">
                Le présent site, accessible à l’URL{" "}
                <span className="text-amber-500 font-bold">
                  lafabriqueducode.fr
                </span>{" "}
                (le « Site »), est édité par :
              </p>
              {/* J'utilise un style de "citation" avec bordure verte pour l'info principale */}
              <p className="text-slate-600 mb-4 pl-4 border-l-2 border-amber-500">
                Gérald Francois, résidant 27A grande rue 80250 Thory, de
                nationalité Française (France), né(e) le 30/11/1994, inscrite au
                R.C.S. de AMIENS sous le numéro 994 074 458 R.C.S. Amiens,
              </p>

              {/* Section Hébergement */}
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                Hébergement
              </h2>
              <p className="text-slate-600 mb-4">
                Le Site est hébergé par la société Vercel Inc., situé 340 S
                Lemon Ave #4133, Walnut, CA 91789, États-Unis, (contact
                téléphonique ou email : +15592887060).
              </p>

              {/* Section Directeur de publication */}
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                Directeur de publication
              </h2>
              <p className="text-slate-600 mb-4">
                Le Directeur de la publication du Site est Gérald Francois.
              </p>

              {/* Section Contact */}
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                Nous contacter
              </h2>
              <ul className="list-none space-y-2 text-slate-600">
                <li>
                  <strong className="text-amber-500">Par téléphone :</strong>{" "}
                  +33767265366
                </li>
                <li>
                  <strong className="text-amber-500">Par email :</strong>{" "}
                  contact@lafabriqueducode.fr
                </li>
                <li>
                  <strong className="text-amber-500">Par courrier :</strong> 27A
                  grande rue 80250 Thory
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
