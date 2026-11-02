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
import { ClipboardList, Map, Route } from "lucide-react";
import Link from "next/link";

export const metadata = pageMetadata(
  "Création de site web dans la Somme",
  "Site vitrine, e-commerce ou outil sur mesure pour professionnels de la Somme. Un site adapté à votre zone réelle d'activité, avec hébergement et accompagnement sur devis.",
  "/creation-site-web/somme",
);

export default function SommePage() {
  return (
    <>
      <PageHero
        eyebrow="Création de site web · Somme"
        title="Une présence web cohérente avec votre territoire et votre métier."
        actions={
          <ActionLink href={contactHref("site-web", "web-somme")}>
            Demander un devis pour mon site
          </ActionLink>
        }
      >
        Dans la Somme, beaucoup d'activités servent plusieurs communes ou
        travaillent à distance. Je conçois un site qui explique précisément où,
        comment et pour qui vous intervenez.
      </PageHero>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Un site à votre échelle"
            title="Clarifier votre offre, au-delà d'une simple ville."
          >
            Un contenu utile décrit votre service réel et le parcours de vos
            clients, sans multiplier des pages géographiques identiques.
          </SectionIntro>
          <InfoCards
            items={[
              {
                icon: Map,
                title: "Zone de service réelle",
                text: "Nommer les communes, secteurs ou modalités de déplacement que vous assurez effectivement.",
              },
              {
                icon: Route,
                title: "Parcours selon le métier",
                text: "Demande de devis, achat, réservation ou simple prise de contact : le site suit votre façon de travailler.",
              },
              {
                icon: ClipboardList,
                title: "Contenus vérifiés",
                text: "Prestations, délais, informations pratiques et exemples sont préparés avec vous avant publication.",
              },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container prose-section">
          <span className="eyebrow">Exemples d'usages</span>
          <h2 className="h2">Pour un artisan, un commerce ou une PME.</h2>
          <p>
            Un artisan peut expliquer ses interventions, le processus de devis
            et sa zone de déplacement. Un commerce peut présenter ses produits,
            ses horaires et ses options de commande vérifiées. Une PME peut
            détailler ses solutions et aider ses prospects à choisir le bon
            contact.
          </p>
          <p>
            Je conçois et développe le site, teste les parcours et prépare les
            bases SEO techniques. L'hébergement est géré dans mes offres web ;
            les modalités de sauvegarde, de support et de maintenance sont
            fixées au contrat. Les nouvelles fonctionnalités restent sur devis.
          </p>
          <p>
            <Link className="inline-link" href="/solutions-metiers">
              Explorer les solutions par métier →
            </Link>
          </p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <CTABand
            title="Construisons un site qui raconte votre activité dans la Somme."
            service="site-web"
            source="web-somme-bas"
          />
        </div>
      </section>
    </>
  );
}
