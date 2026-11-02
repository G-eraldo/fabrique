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
import { MapPinned, MessageCircle, Smartphone } from "lucide-react";
import Link from "next/link";

export const metadata = pageMetadata(
  "Création de site web à Amiens pour professionnels",
  "Un site web clair pour les artisans, commerces et entreprises qui s'adressent aux clients d'Amiens. Création, hébergement géré et accompagnement sur devis.",
  "/creation-site-web/amiens",
);

export default function AmiensPage() {
  return (
    <>
      <PageHero
        eyebrow="Création de site web · Amiens"
        title="Un site qui répond aux questions de vos clients à Amiens."
        actions={
          <ActionLink href={contactHref("site-web", "web-amiens")}>
            Demander un devis pour mon site
          </ActionLink>
        }
      >
        Vous exercez à Amiens ou vous vous adressez à ses habitants ? Je
        construis un site qui présente clairement vos prestations, vos
        informations pratiques et la bonne façon de vous contacter.
      </PageHero>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Pour être utile localement"
            title="Des réponses concrètes avant le premier appel."
          >
            Une page locale ne sert que si elle aide vraiment la personne qui
            cherche un professionnel.
          </SectionIntro>
          <InfoCards
            items={[
              {
                icon: MapPinned,
                title: "Votre zone d'intervention",
                text: "Présenter les quartiers ou communes que vous servez réellement, sans inventer d'adresse ou de bureau.",
              },
              {
                icon: Smartphone,
                title: "Une lecture facile sur mobile",
                text: "Horaires, prestations, accès et contact visibles sans devoir parcourir tout le site.",
              },
              {
                icon: MessageCircle,
                title: "Une demande bien orientée",
                text: "Un formulaire et des appels à l'action cohérents avec votre métier pour préparer le premier échange.",
              },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container prose-section">
          <span className="eyebrow">Ma façon de travailler</span>
          <h2 className="h2">Un contenu ancré dans votre activité.</h2>
          <p>
            Pour un commerce, le site peut clarifier l'offre, les horaires et le
            retrait si ce service existe. Pour un artisan, il peut expliquer les
            types d'intervention et les secteurs couverts. Pour une entreprise
            de services, il peut présenter la méthode et les questions
            fréquentes. Je construis ces pages à partir d'informations vérifiées
            avec vous.
          </p>
          <p>
            La conception comprend le responsive, les bases du référencement
            technique et une prise en main. J'assure l'hébergement dans mes
            offres web ; les sauvegardes, la maintenance et les petites
            corrections sont définies au contrat avec un plafond.
          </p>
          <p>
            <Link className="inline-link" href="/creation-site-web">
              Découvrir toute l'offre de création web →
            </Link>
          </p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <CTABand
            title="Votre activité mérite une présentation claire à Amiens."
            service="site-web"
            source="web-amiens-bas"
          />
        </div>
      </section>
    </>
  );
}
