import { contactHref, SERVICES } from "@/lib/site";
import {
  ArrowRight,
  Check,
  Code2,
  GitBranch,
  Lightbulb,
  SearchCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const icons = {
  web: Code2,
  workflow: GitBranch,
  spark: Sparkles,
  search: SearchCheck,
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  arrow = true,
}) {
  return (
    <Link href={href} className={"btn btn-" + variant}>
      {children}
      {arrow && <ArrowRight size={17} aria-hidden="true" />}
    </Link>
  );
}

export function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2">{title}</h2>
      {children && <p className="lead">{children}</p>}
    </div>
  );
}

export function OfferGrid() {
  return (
    <div className="card-grid">
      {SERVICES.map((item) => {
        const Icon = icons[item.icon];
        return (
          <article className="offer-card" key={item.key}>
            <span className="offer-number">{item.number} / SOLUTION</span>
            <span className="offer-icon">
              <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h3>{item.title}</h3>
            <p>{item.short}</p>
            <Link className="inline-link" href={item.href}>
              Découvrir l’offre <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export function InfoCards({ items }) {
  return (
    <div className="info-grid">
      {items.map((item) => {
        const Icon = item.icon || Lightbulb;
        return (
          <article className="info-card" key={item.title}>
            <span className="icon-box">
              <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        );
      })}
    </div>
  );
}

export function CheckList({ items }) {
  return (
    <ul className="simple-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={19} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FAQ({ items }) {
  return (
    <div className="faq-list">
      {items.map(([question, answer]) => (
        <details key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

export function CTABand({
  title = "Parlons de ce qui ferait vraiment avancer votre activité.",
  description = "Je prends le temps de comprendre votre besoin avant de proposer une solution et un devis adaptés.",
  service = "",
  source = "bas-de-page",
}) {
  return (
    <div className="cta-band">
      <span className="eyebrow">La prochaine étape</span>
      <h2 className="h2">{title}</h2>
      <p>{description}</p>
      <div className="btn-row">
        <ActionLink href={contactHref("diagnostic-ia", source + "-diagnostic")}>
          Diagnostic IA gratuit
        </ActionLink>
        <ActionLink
          href={contactHref(service, source + "-projet")}
          variant="light"
        >
          Parler de mon projet
        </ActionLink>
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
  actions,
  compact = false,
  center = false,
}) {
  return (
    <header
      className={
        "page-hero" + (compact ? " compact" : "") + (center ? " center" : "")
      }
    >
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="h1">{title}</h1>
        <p className="lead">{children}</p>
        {actions && <div className="btn-row">{actions}</div>}
      </div>
    </header>
  );
}
