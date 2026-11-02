import { CTABand, PageHero } from "@/components/Marketing";
import { guides } from "@/lib/guideContent";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata(
  "Guides pratiques : web, n8n et assistants IA",
  "Des guides concrets pour préparer un site web, comprendre n8n et cadrer un assistant IA professionnel.",
  "/guides",
);

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides pratiques"
        title="Comprendre avant de décider."
        compact
      >
        Des repères simples pour choisir un site web, une automatisation ou un
        assistant IA à partir de votre activité réelle.
      </PageHero>
      <section className="section-tight">
        <div className="container">
          <div className="link-grid">
            {Object.entries(guides).map(([slug, guide]) => (
              <Link className="link-card" key={slug} href={"/guides/" + slug}>
                <span className="eyebrow">Guide</span>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <span className="inline-link">Lire le guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CTABand source="guides-index" />
        </div>
      </section>
    </>
  );
}
