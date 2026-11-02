/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};
export default function NotFoundPage() {
  return (
    <section className="page-hero" style={{ minHeight: "72vh" }}>
      <div className="container">
        <span className="eyebrow">Erreur 404</span>
        <h1 className="h1">Cette page n'existe pas.</h1>
        <p className="lead">
          Le lien a peut-être changé. Retrouvez les solutions ou revenez à
          l'accueil.
        </p>
        <div className="btn-row" style={{ marginTop: "2rem" }}>
          <Link className="btn btn-dark" href="/">
            Retour à l'accueil
          </Link>
          <Link className="btn btn-outline" href="/services">
            Voir les solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
