/* eslint-disable react/no-unescaped-entities */
import { CTABand, PageHero, SectionIntro } from "@/components/Marketing";
import { sectors } from "@/lib/sectorContent";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata(
  "Solutions web et IA par métier",
  "Des pistes de sites web, automatisations et assistants IA adaptées aux réalités des artisans et des restaurants. D'autres métiers seront documentés progressivement.",
  "/solutions-metiers",
);

export default function SolutionsMetiersPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions par métier"
        title="Votre métier d'abord. Les outils ensuite."
        compact
      >
        Un restaurant n'a pas les mêmes parcours qu'un artisan. Ces pages
        montrent comment un site ou une automatisation peut répondre à des
        besoins précis, sous réserve de votre situation réelle.
      </PageHero>
      <section className="section-tight">
        <div className="container">
          <div className="link-grid">
            {Object.entries(sectors).map(([slug, sector]) => (
              <Link
                className="link-card"
                key={slug}
                href={"/solutions-metiers/" + slug}
              >
                <span className="eyebrow">Métier</span>
                <h3>{sector.title}</h3>
                <p>{sector.description}</p>
                <span className="inline-link">Découvrir →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Une approche ciblée"
            title="Pas de solution copiée d'un métier à l'autre."
          >
            Je vérifie vos contenus, votre façon de recevoir les demandes et les
            outils déjà utilisés avant de proposer un parcours.
          </SectionIntro>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CTABand source="metiers-index" />
        </div>
      </section>
    </>
  );
}
