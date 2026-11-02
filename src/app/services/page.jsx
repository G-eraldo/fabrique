import {
  CTABand,
  InfoCards,
  PageHero,
  SectionIntro,
} from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight, Bot, GitBranch, Globe2, SearchCheck } from "lucide-react";
import Link from "next/link";

export const metadata = pageMetadata(
  "Sites web, automatisations et assistants IA",
  "Découvrez les solutions de La Fabrique du Code : création de sites web, workflows n8n, assistants IA Hermes et diagnostic IA gratuit.",
  "/services",
);

const offers = [
  {
    icon: Globe2,
    title: "Création de sites web",
    text: "Présenter votre activité, vendre en ligne ou créer un outil adapté à vos méthodes. Conception, développement, tests, hébergement géré et accompagnement selon le projet.",
    href: "/creation-site-web",
  },
  {
    icon: GitBranch,
    title: "Automatisations n8n",
    text: "Faire circuler les informations entre vos outils : demandes entrantes, rappels, synchronisations et workflows sur mesure, après vérification des comptes et API.",
    href: "/automatisations",
  },
  {
    icon: Bot,
    title: "Assistants IA Hermes",
    text: "Un assistant conversationnel professionnel, personnalisé à votre métier ou relié à vos outils selon les capacités effectivement validées.",
    href: "/agents-ia/hermes",
  },
  {
    icon: SearchCheck,
    title: "Diagnostic IA gratuit",
    text: "20 à 30 minutes d'échange pour comprendre vos tâches répétitives et identifier, lorsque possible, deux ou trois pistes d'amélioration.",
    href: "/diagnostic-ia",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Des outils utiles à votre activité, à votre rythme."
        compact
      >
        Je conçois des sites web, des automatisations n8n et des assistants IA.
        Chaque projet est cadré selon vos objectifs, vos contraintes et un devis
        personnalisé.
      </PageHero>
      <section className="section-tight">
        <div className="container">
          <div className="link-grid">
            {offers.map((offer) => (
              <Link className="link-card" href={offer.href} key={offer.href}>
                <offer.icon size={27} color="#a26319" strokeWidth={1.8} />
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
                <span className="inline-link">
                  Découvrir <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Ce qui est prévu"
            title="Une solution livrée avec son contexte."
          >
            Je définis ce qui est inclus avant de construire. Cela évite les
            promesses vagues et facilite la prise en main.
          </SectionIntro>
          <InfoCards
            items={[
              {
                title: "Cadrage",
                text: "Objectifs, contenus, outils et contraintes sont examinés avant de fixer le périmètre.",
              },
              {
                title: "Réalisation et tests",
                text: "Je vérifie les parcours, les erreurs et les cas d'usage prévus pour votre solution.",
              },
              {
                title: "Transmission",
                text: "Documentation et explications adaptées, avec maintenance et support définis au contrat.",
              },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CTABand source="services" />
        </div>
      </section>
    </>
  );
}
