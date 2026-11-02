/* eslint-disable react/no-unescaped-entities */
import { CTABand, PageHero, SectionIntro } from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const metadata = pageMetadata(
  "Réalisations et démonstrations",
  "Découvrez des projets clients publiés et des démonstrations clairement identifiées de La Fabrique du Code.",
  "/realisations",
);

const clients = [
  {
    title: "Institution du Sacré-Cœur",
    description:
      "Un site publié pour présenter les différents pôles de l'établissement de Breteuil.",
    image: "/site_sacre_coeur.png",
    url: "https://www.sacrecoeur-breteuil.fr/",
  },
  {
    title: "Les Photos de Cécile",
    description:
      "Une vitrine et un portfolio pour découvrir le travail d'une photographe professionnelle.",
    image: "/site_1.png",
    url: "https://lesphotosdececile.fr/",
  },
];
const demos = [
  {
    title: "Restaurant",
    description:
      "Concept de page d'accueil pour présenter une carte, les informations pratiques et les moyens de contact.",
    image: "/site_4.png",
  },
  {
    title: "Pizzeria",
    description:
      "Concept de parcours web pour mettre en avant les produits et les options de commande d'une pizzeria.",
    image: "/site_3.png",
  },
];

function WorkCard({ item, demo = false }) {
  return (
    <article className="work-card">
      <div className="work-image">
        <Image
          src={item.image}
          alt={"Capture du " + (demo ? "concept " : "site ") + item.title}
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
        />
      </div>
      <div className="work-body">
        <span className={"badge" + (demo ? " badge-amber" : "")}>
          {demo ? "Démonstration technique" : "Projet client réalisé"}
        </span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {item.url && (
          <a
            className="inline-link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site publié <ArrowUpRight size={17} />
          </a>
        )}
      </div>
    </article>
  );
}

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Du travail réel, et des idées clairement identifiées."
        compact
      >
        Les projets clients ci-dessous sont accessibles en ligne. Les concepts
        servent uniquement à illustrer des directions possibles ; ils ne
        représentent pas des résultats clients.
      </PageHero>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Projets clients"
            title="Des sites que vous pouvez visiter."
          >
            Ces réalisations sont publiées et créditent La Fabrique du Code.
          </SectionIntro>
          <div className="work-grid">
            {clients.map((item) => (
              <WorkCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Explorations"
            title="Des démonstrations pour imaginer un parcours."
          >
            Ces captures illustrent des possibilités de présentation. Elles ne
            constituent pas des preuves de performance, d'intégration ou de
            résultat commercial.
          </SectionIntro>
          <div className="work-grid">
            {demos.map((item) => (
              <WorkCard key={item.title} item={item} demo />
            ))}
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <CTABand
            title="Votre projet pourrait prendre une toute autre forme."
            service="site-web"
            source="realisations"
          />
        </div>
      </section>
    </>
  );
}
