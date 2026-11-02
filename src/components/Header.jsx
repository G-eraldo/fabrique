"use client";

import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Solutions", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Guides", href: "/guides" },
  { label: "À propos", href: "/a-propos" },
];
const mobileExtra = [
  { label: "Création de sites web", href: "/creation-site-web" },
  { label: "Automatisations n8n", href: "/automatisations" },
  { label: "Assistants IA Hermes", href: "/agents-ia/hermes" },
  { label: "Diagnostic IA gratuit", href: "/diagnostic-ia" },
];

export default function Header() {
  const [openAtPath, setOpenAtPath] = useState(null);
  const pathname = usePathname();
  const open = openAtPath === pathname;

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="La Fabrique du Code, accueil"
          >
            <span className="brand-mark">
              <Code2 size={23} strokeWidth={2.3} aria-hidden="true" />
            </span>
            <span className="brand-label">
              <span>La Fabrique</span>
              <span>du Code</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Navigation principale">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link className="btn btn-dark" href="/contact?source=entete">
              Parler de mon projet
            </Link>
          </nav>
          <button
            type="button"
            className="mobile-toggle"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpenAtPath(open ? null : pathname)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Navigation mobile"
          >
            {[...links, ...mobileExtra].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpenAtPath(null)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact?source=menu-mobile"
              onClick={() => setOpenAtPath(null)}
            >
              Parler de mon projet →
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
