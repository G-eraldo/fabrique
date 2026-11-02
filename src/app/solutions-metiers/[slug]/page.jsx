/* eslint-disable react/no-unescaped-entities */
import {
  ActionLink,
  CTABand,
  InfoCards,
  PageHero,
  SectionIntro,
} from "@/components/Marketing";
import { sectors } from "@/lib/sectorContent";
import { pageMetadata } from "@/lib/seo";
import { contactHref } from "@/lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(sectors).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sector = sectors[slug];
  return sector
    ? pageMetadata(
        sector.title,
        sector.description,
        "/solutions-metiers/" + slug,
      )
    : {};
}

export default async function SectorPage({ params }) {
  const { slug } = await params;
  const sector = sectors[slug];
  if (!sector) notFound();
  return (
    <>
      <PageHero
        eyebrow="Solutions par métier"
        title={sector.title}
        actions={
          <ActionLink href={contactHref(sector.service, "metier-" + slug)}>
            Parler de mon projet
          </ActionLink>
        }
      >
        {sector.intro}
      </PageHero>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Besoins concrets"
            title="Les points à traiter en priorité."
          >
            {sector.description}
          </SectionIntro>
          <InfoCards
            items={sector.problems.map((item) => ({
              text: item.text,
              title: item.title,
            }))}
          />
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Exemple de parcours</span>
            <h2 className="h2" style={{ margin: "1rem 0" }}>
              Un site et des outils qui suivent votre travail.
            </h2>
            <p className="lead">{sector.workflow}</p>
            <span className="badge badge-amber">
              Démonstration illustrative
            </span>
          </div>
          <div className="benefit-panel">
            <h3 className="h3">Ce que je vérifie avec vous</h3>
            <p>
              Les contenus publiables, les demandes réellement reçues, les accès
              aux applications et la place d'une validation humaine. La solution
              finale et la maintenance sont détaillées dans un devis.
            </p>
            <Link className="inline-link" href="/creation-site-web">
              En savoir plus sur la création web →
            </Link>
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <CTABand
            title="Parlons de votre métier et de vos vrais besoins."
            service={sector.service}
            source={"metier-" + slug + "-bas"}
          />
        </div>
      </section>
    </>
  );
}
