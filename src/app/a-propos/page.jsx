/* eslint-disable react/no-unescaped-entities */
import {
  ActionLink,
  CTABand,
  InfoCards,
  PageHero,
  SectionIntro,
} from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";
import { contactHref } from "@/lib/site";
import { BookOpen, Compass, Handshake } from "lucide-react";

export const metadata = pageMetadata(
  "À propos de Gérald François",
  "Gérald François, l'entrepreneur derrière La Fabrique du Code : création web, automatisations et assistants IA pour professionnels.",
  "/a-propos",
);

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Un seul interlocuteur, et des solutions faites pour durer."
        actions={
          <ActionLink href={contactHref("", "a-propos")}>
            Parler de mon projet
          </ActionLink>
        }
      >
        Je suis Gérald François, l'entrepreneur derrière La Fabrique du Code.
        J'accompagne les professionnels avec des sites web, des automatisations
        et des assistants IA choisis pour leur utilité réelle.
      </PageHero>
      <section className="section-tight section-white">
        <div className="container split">
          <div>
            <span className="eyebrow">Ma façon de travailler</span>
            <h2 className="h2" style={{ margin: "1rem 0" }}>
              Commencer par écouter, puis construire.
            </h2>
            <p className="lead">
              Je travaille directement avec vous, sans équipe intermédiaire.
              Avant de parler de technologie, je cherche à comprendre vos
              clients, vos outils et ce qui vous ferait gagner en clarté ou en
              temps.
            </p>
            <p>
              Je prospecte dans la Somme, à Amiens et en Hauts-de-France, et je
              peux accompagner des projets partout en France. Le cadrage et les
              échanges peuvent aussi se faire à distance.
            </p>
          </div>
          <div className="benefit-panel">
            <h3 className="h3">Une relation simple</h3>
            <p>
              Je définis le périmètre, les responsabilités, la maintenance et
              les limites d'une prestation dans un devis adapté. Vous savez ce
              que je livre et comment en prendre la main.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Mes repères"
            title="De la clarté à chaque étape."
          >
            Un projet bien fait se comprend aussi après sa livraison.
          </SectionIntro>
          <InfoCards
            items={[
              {
                icon: Compass,
                title: "Utilité",
                text: "Choisir la solution qui répond au besoin, même si elle est plus simple que prévu.",
              },
              {
                icon: BookOpen,
                title: "Transmission",
                text: "Expliquer le fonctionnement, documenter les choix et faciliter la prise en main.",
              },
              {
                icon: Handshake,
                title: "Suivi cadré",
                text: "Définir le support, les petites corrections et les évolutions dans un contrat clair.",
              },
            ]}
          />
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <CTABand source="a-propos-bas" />
        </div>
      </section>
    </>
  );
}
