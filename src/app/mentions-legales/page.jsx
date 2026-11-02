/* eslint-disable react/no-unescaped-entities */
import { PageHero } from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Mentions légales",
  "Informations relatives à l'éditeur et à l'hébergement du site La Fabrique du Code.",
  "/mentions-legales",
);

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero eyebrow="Informations légales" title="Mentions légales" compact>
        Les informations relatives à l'édition du site lafabriqueducode.fr.
      </PageHero>
      <section className="section-tight section-white">
        <div className="container prose-section">
          <h2>Éditeur du site</h2>
          <p>
            La Fabrique du Code est édité par Gérald François, entrepreneur
            individuel, domicilié au 11 rue de la gare, 80360 Guillemont,
            France, immatriculé au R.C.S. d'Amiens sous le numéro 994 074 458.
          </p>
          <h2>Directeur de publication</h2>
          <p>Gérald François.</p>
          <h2>Contact</h2>
          <p>
            Par e-mail :{" "}
            <a href="mailto:contact@lafabriqueducode.fr">
              contact@lafabriqueducode.fr
            </a>
            <br />
            Par téléphone : <a href="tel:+33767265366">07 67 26 53 66</a>
            <br />
            Par courrier : 11 rue de la gare, 80360 Guillemont, France.
          </p>
          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, États-Unis. Les données du formulaire sont hébergées via
            Supabase. Les modalités exactes de traitement sont présentées dans
            la politique de confidentialité.
          </p>
          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, éléments graphiques et codes propres à ce site ne
            peuvent être réutilisés sans autorisation. Les noms, visuels et
            marques des projets présentés restent la propriété de leurs
            titulaires respectifs.
          </p>
        </div>
      </section>
    </>
  );
}
