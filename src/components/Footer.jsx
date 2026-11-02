import { Code2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link
              href="/"
              className="brand"
              aria-label="La Fabrique du Code, accueil"
            >
              <span className="brand-mark">
                <Code2 size={23} aria-hidden="true" />
              </span>
              <span className="brand-label">
                <span>La Fabrique</span>
                <span>du Code</span>
              </span>
            </Link>
            <p>
              Sites web, automatisations et assistants IA conçus pour les
              professionnels. Un interlocuteur unique, de la première idée à la
              prise en main.
            </p>
          </div>
          <div className="footer-col">
            <h2>Solutions</h2>
            <Link href="/creation-site-web">Sites web</Link>
            <Link href="/automatisations">Automatisations n8n</Link>
            <Link href="/agents-ia/hermes">Assistants IA Hermes</Link>
            <Link href="/diagnostic-ia">Diagnostic IA gratuit</Link>
          </div>
          <div className="footer-col">
            <h2>Explorer</h2>
            <Link href="/realisations">Réalisations</Link>
            <Link href="/solutions-metiers">Solutions par métier</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/a-propos">À propos</Link>
          </div>
          <div className="footer-col">
            <h2>Contact</h2>
            <Link href="/contact">Parler de mon projet</Link>
            <a href="mailto:contact@lafabriqueducode.fr">
              contact@lafabriqueducode.fr
            </a>
            <a href="tel:+33767265366">07 67 26 53 66</a>
            <span>Somme · Hauts-de-France · France</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} La Fabrique du Code · Gérald François
          </span>
          <span>
            <Link href="/mentions-legales">Mentions légales</Link> ·{" "}
            <Link href="/confidentialite">Confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
