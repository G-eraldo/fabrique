import { CTABand, PageHero } from "@/components/Marketing";
import { guides } from "@/lib/guideContent";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = guides[slug];
  return guide
    ? pageMetadata(guide.title, guide.description, "/guides/" + slug)
    : {};
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) notFound();
  return (
    <>
      <PageHero eyebrow="Guide pratique" title={guide.title} compact>
        {guide.intro}
      </PageHero>
      <article className="section-tight section-white">
        <div className="container prose-section">
          {guide.sections.map((section) => (
            <section key={section.title} style={{ marginBottom: "2.6rem" }}>
              <h2 className="h3">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <p>
            <Link className="inline-link" href={guide.related}>
              {guide.relatedLabel} →
            </Link>
          </p>
          <p>
            <Link className="inline-link" href="/guides">
              Tous les guides →
            </Link>
          </p>
        </div>
      </article>
      <section className="section">
        <div className="container">
          <CTABand source={"guide-" + slug} />
        </div>
      </section>
    </>
  );
}
