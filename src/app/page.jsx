/* eslint-disable react/no-unescaped-entities */
import AutomationDemo from "@/components/AutomationDemo";
import {
  ActionLink,
  CTABand,
  FAQ,
  OfferGrid,
  SectionIntro,
} from "@/components/Marketing";
import { contactHref, SITE_URL } from "@/lib/site";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  Code2,
  GitBranch,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = { alternates: { canonical: SITE_URL } };

const faq = [
  [
    "Par quoi commencer si je ne sais pas quelle solution choisir ?",
    "Le diagnostic IA gratuit permet de clarifier vos tâches et vos outils. Pour un projet de site web déjà identifié, vous pouvez aussi m'en parler directement.",
  ],
  [
    "Travaillez-vous seulement dans la Somme ?",
    "Je prospecte dans la Somme, à Amiens et en Hauts-de-France, et j'accompagne aussi des professionnels partout en France à distance.",
  ],
  [
    "Y a-t-il un tarif fixe ?",
    "Non. Je définis le périmètre, l'hébergement, les éventuelles API et la maintenance avec vous, puis je prépare un devis personnalisé.",
  ],
  [
    "L'IA peut-elle tout faire à ma place ?",
    "Un assistant peut préparer, classer ou proposer. Les actions sensibles restent soumises à votre validation et les accès sont limités au nécessaire.",
  ],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              La Fabrique du Code · Solutions pour professionnels
            </span>
            <h1 className="display">
              Un site qui inspire confiance.
              <br />
              <span className="text-amber">
                Une IA qui vous fait gagner du temps.
              </span>
            </h1>
            <p className="lead">
              Je crée des sites web, des automatisations et des assistants IA
              adaptés à votre entreprise, de la conception à l'accompagnement.
            </p>
            <div className="btn-row">
              <ActionLink href="/diagnostic-ia">
                Diagnostic IA gratuit
              </ActionLink>
              <ActionLink
                href={contactHref("", "accueil-hero")}
                variant="outline"
              >
                Parler de mon projet
              </ActionLink>
            </div>
            <p className="hero-diagnostic-note">
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>
                <strong>20 à 30 minutes, sans engagement.</strong> Un échange sur
                vos tâches et vos outils, puis des pistes concrètes par e-mail.
              </span>
            </p>
            <p className="hero-note">
              <strong>Un interlocuteur unique.</strong> Pour les indépendants,
              artisans, commerces, restaurants et PME.
            </p>
          </div>
          <div
            className="hero-art"
            aria-label="Un site web, une automatisation et un assistant IA reliés à votre activité"
          >
            <div className="art-top">
              <span>Votre activité, mieux reliée</span>
              <span className="art-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
            <p className="art-title">
              Des outils qui avancent
              <br />
              dans le même sens.
            </p>
            <div className="flow-line" aria-hidden="true" />
            <div className="flow-card">
              <span className="flow-icon">
                <Code2 size={22} aria-hidden="true" />
              </span>
              <span>
                <small>Présence</small>
                <strong>Un site qui vous ressemble</strong>
              </span>
            </div>
            <div className="flow-card">
              <span className="flow-icon">
                <GitBranch size={22} aria-hidden="true" />
              </span>
              <span>
                <small>Organisation</small>
                <strong>Moins de tâches répétitives</strong>
              </span>
            </div>
            <div className="flow-card">
              <span className="flow-icon">
                <Sparkles size={22} aria-hidden="true" />
              </span>
              <span>
                <small>Assistance</small>
                <strong>Une IA sous votre contrôle</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-item">
            <CircleDot size={19} aria-hidden="true" />
            Un seul interlocuteur, du cadrage à la prise en main
          </div>
          <div className="trust-item">
            <ShieldCheck size={19} aria-hidden="true" />
            Des solutions cadrées, testées et documentées
          </div>
          <div className="trust-item">
            <Layers3 size={19} aria-hidden="true" />
            Somme, Hauts-de-France et France entière
          </div>
        </div>
      </div>

      <section className="section" id="solutions">
        <div className="container">
          <SectionIntro
            eyebrow="Ce que je peux construire"
            title="Quatre façons de faire avancer votre activité."
          >
            Un besoin précis ou simplement une idée à explorer : chaque solution
            commence par votre réalité, vos outils et vos priorités.
          </SectionIntro>
          <OfferGrid />
        </div>
      </section>

      <section className="section section-white">
        <div className="container split">
          <div>
            <span className="eyebrow">Le bon point de départ</span>
            <h2 className="h2" style={{ margin: "1rem 0" }}>
              Le numérique doit vous simplifier la journée.
            </h2>
            <p className="lead">
              Un formulaire qui se perd, des copier-coller entre outils, un site
              qui n'explique plus votre activité : ces frictions coûtent de
              l'attention. Je cherche une solution utile avant de choisir la
              technologie.
            </p>
            <div className="btn-row" style={{ marginTop: "1.7rem" }}>
              <ActionLink href="/services" variant="dark">
                Explorer les solutions
              </ActionLink>
            </div>
          </div>
          <div className="benefit-panel">
            <div className="benefit-list">
              <div className="benefit-item">
                <CheckCircle2 size={22} />
                <div>
                  <strong>Être trouvé et compris</strong>
                  <p>
                    Un site lisible, rapide et adapté aux personnes que vous
                    voulez toucher.
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <CheckCircle2 size={22} />
                <div>
                  <strong>Retrouver du temps</strong>
                  <p>
                    Des workflows n8n pour organiser les tâches répétitives
                    après vérification de vos outils.
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <CheckCircle2 size={22} />
                <div>
                  <strong>Garder la main</strong>
                  <p>
                    Des assistants IA avec des permissions limitées et des
                    validations humaines pour les actions sensibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionIntro
            eyebrow="Ma méthode"
            title="Une démarche claire, de la première discussion à la prise en main."
          >
            Je reste votre interlocuteur tout au long du projet. Le périmètre et
            les responsabilités sont définis avant la réalisation.
          </SectionIntro>
          <div className="steps">
            {[
              [
                "01 / ÉCOUTER",
                "Comprendre",
                "Votre activité, vos objectifs, les outils existants et vos contraintes.",
              ],
              [
                "02 / CADRER",
                "Proposer",
                "Une solution faisable, un périmètre précis et un devis adapté.",
              ],
              [
                "03 / CONSTRUIRE",
                "Réaliser",
                "Développement, configuration, tests et ajustements prévus ensemble.",
              ],
              [
                "04 / TRANSMETTRE",
                "Accompagner",
                "Mise en ligne ou livraison, documentation et prise en main.",
              ],
            ].map(([number, title, text]) => (
              <article className="step" key={number}>
                <span className="step-num">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Sites web & automatisation"
            title="Des sites à parcourir. Un exemple à explorer."
          >
            Découvrez deux sites clients publiés, puis explorez comment une
            demande de devis pourrait être suivie et préparée avec n8n et Hermes.
          </SectionIntro>
          <div className="work-grid">
            <article className="work-card">
              <div className="work-image">
                <Image
                  src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1793636417/site_sacre_coeur_wflhdg.jpg"
                  alt="Capture du site de l'Institution du Sacré-Cœur de Breteuil"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </div>
              <div className="work-body">
                <span className="badge">Projet client réalisé</span>
                <h3>Institution du Sacré-Cœur</h3>
                <p>
                  Un site pour présenter l'école, le collège, la SEGPA et
                  l'internat de Breteuil.
                </p>
                <a
                  className="inline-link"
                  href="https://www.sacrecoeur-breteuil.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le site <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
            <article className="work-card">
              <div className="work-image">
                <Image
                  src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1793636416/site_1_i64sv4.jpg"
                  alt="Capture du site Les Photos de Cécile"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </div>
              <div className="work-body">
                <span className="badge">Projet client réalisé</span>
                <h3>Les Photos de Cécile</h3>
                <p>
                  Une vitrine et un portfolio pour découvrir l'univers d'une
                  photographe professionnelle.
                </p>
                <a
                  className="inline-link"
                  href="https://lesphotosdececile.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le site <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          </div>
          <AutomationDemo />
          <div style={{ marginTop: "1.5rem" }}>
            <Link className="inline-link" href="/realisations">
              Toutes les réalisations et démonstrations{" "}
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Questions fréquentes"
            title="Avant de commencer."
          >
            Quelques réponses pour choisir le bon premier échange.
          </SectionIntro>
          <FAQ items={faq} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CTABand source="accueil-bas" />
        </div>
      </section>
    </>
  );
}
