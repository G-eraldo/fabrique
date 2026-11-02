import FormContent from "@/components/FormContent";
import { PageHero } from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";
import { SERVICE_LABELS } from "@/lib/site";

export const metadata = pageMetadata(
  "Parler de mon projet",
  "Présentez votre projet de site web, d'automatisation, d'assistant IA ou demandez un diagnostic IA gratuit. Formulaire adapté à votre besoin.",
  "/contact",
);

export default async function ContactPage({ searchParams }) {
  const query = await searchParams;
  const rawService = typeof query?.service === "string" ? query.service : "";
  const rawSource =
    typeof query?.source === "string" ? query.source : "contact-direct";
  const service = SERVICE_LABELS[rawService] ? rawService : "";
  const source = /^[a-z0-9/-]{1,120}$/i.test(rawSource)
    ? rawSource
    : "contact-direct";
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de ce que vous voulez faire avancer."
        compact
      >
        Une idée de site, une tâche à automatiser, un assistant IA à explorer ?
        Décrivez votre besoin en quelques étapes. Je vous recontacte
        personnellement.
      </PageHero>
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <FormContent initialService={service} source={source} />
        </div>
      </section>
    </>
  );
}
