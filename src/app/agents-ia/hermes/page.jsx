/* eslint-disable react/no-unescaped-entities */
import {
  ActionLink,
  CTABand,
  FAQ,
  InfoCards,
  PageHero,
  SectionIntro,
} from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";
import { contactHref } from "@/lib/site";
import { Boxes, Hand, ServerCog } from "lucide-react";

export const metadata = pageMetadata(
  "Assistants IA Hermes : Essentiel, Pro et Premium",
  "Comparez les trois offres Hermes de La Fabrique du Code selon leurs capacités, intégrations et accompagnement. Sans tarif public : devis personnalisé après vérification technique.",
  "/agents-ia/hermes",
);

const rows = [
  [
    "Usage cible",
    "Échanges professionnels cadrés",
    "Assistance adaptée au métier",
    "Processus avancés à superviser",
  ],
  [
    "Personnalisation",
    "Consignes et périmètre de base",
    "Consignes métier et cas d'usage définis",
    "Orchestration et processus plus poussés selon faisabilité",
  ],
  [
    "Connexions",
    "Canal compatible vérifié",
    "Certaines catégories d'outils après tests",
    "Plusieurs intégrations après tests et cadrage",
  ],
  [
    "Actions et validations",
    "Réponses dans un périmètre défini",
    "Opérations autorisées et validations adaptées",
    "Contrôles, supervision et validations renforcés",
  ],
  [
    "Hébergement",
    "Infrastructure du client ou gérée, selon projet",
    "Infrastructure du client ou gérée, selon projet",
    "Architecture définie après étude",
  ],
  [
    "Transmission",
    "Prise en main prévue au devis",
    "Formation adaptée aux outils retenus",
    "Documentation et accompagnement adaptés au processus",
  ],
  [
    "Maintenance",
    "Selon mode de livraison et contrat",
    "Selon mode de livraison et contrat",
    "Selon mode de livraison et contrat",
  ],
];

export default function HermesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hermes · Assistants IA"
        title="Trois niveaux d'accompagnement. Un cadre sur mesure."
        actions={
          <>
            <ActionLink href="/diagnostic-ia">
              Demander mon diagnostic IA gratuit
            </ActionLink>
            <ActionLink
              href={contactHref("agent-ia", "hermes-hero")}
              variant="outline"
            >
              Parler de mon projet
            </ActionLink>
          </>
        }
      >
        Essentiel, Pro ou Premium : les offres se distinguent par le travail
        attendu, la personnalisation et les intégrations vérifiées. Le périmètre
        exact est toujours défini avant le devis.
      </PageHero>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Comparer les offres"
            title="Choisir un niveau adapté à vos tâches."
          >
            Ce tableau indique le positionnement des offres. Les canaux,
            opérations, outils, quotas et consommations sont confirmés après
            étude technique ; aucune intégration n'est incluse sans validation.
          </SectionIntro>
          <div className="table-wrap">
            <table className="comparison">
              <thead>
                <tr>
                  <th scope="col">Capacité</th>
                  <th scope="col">Essentiel</th>
                  <th scope="col">Pro</th>
                  <th scope="col">Premium</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]}>
                    <th scope="row">{row[0]}</th>
                    {row.slice(1).map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pack-grid" style={{ marginTop: "1.2rem" }}>
            {["Essentiel", "Pro", "Premium"].map((pack) => (
              <div className="info-card" key={pack}>
                <span className="badge badge-amber">Offre {pack}</span>
                <h3 style={{ marginTop: "1rem" }}>Parlons de votre besoin</h3>
                <p>Le contenu final et les limites sont définis sur devis.</p>
                <div style={{ marginTop: "1.3rem" }}>
                  <ActionLink
                    href={contactHref(
                      "diagnostic-ia",
                      "hermes-pack-" + pack.toLowerCase(),
                    )}
                    variant="dark"
                  >
                    Demander mon diagnostic IA gratuit
                  </ActionLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Deux façons de livrer"
            title="Votre infrastructure, ou un environnement géré."
          >
            Le mode de livraison détermine la maintenance, les responsabilités
            et la gestion des coûts de modèles.
          </SectionIntro>
          <InfoCards
            items={[
              {
                icon: ServerCog,
                title: "Infrastructure du client",
                text: "Vous détenez le serveur, les comptes et les clés API. J'installe et configure l'assistant ; la maintenance peut être facultative selon contrat.",
              },
              {
                icon: Boxes,
                title: "Infrastructure gérée",
                text: "Un environnement client isolé est hébergé et maintenu par La Fabrique du Code. Les responsabilités, consommations et coûts sont précisés au contrat.",
              },
              {
                icon: Hand,
                title: "Contrôle humain",
                text: "Les permissions sont minimales et révocables. Envoi engageant, suppression, décision financière ou traitement sensible demandent une validation humaine.",
              },
            ]}
          />
        </div>
      </section>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Questions fréquentes"
            title="Décider avec les bonnes informations."
          >
            La capacité réelle de Hermes et de ses intégrations est vérifiée
            dans votre cas d'usage.
          </SectionIntro>
          <FAQ
            items={[
              [
                "Quelle différence entre Essentiel, Pro et Premium ?",
                "Les offres progressent en personnalisation, nombre et complexité des intégrations effectivement testées, processus et supervision. Il ne s'agit pas simplement d'un nombre d'agents.",
              ],
              [
                "Puis-je garder mes propres comptes et clés API ?",
                "Oui, avec l'option d'installation sur votre infrastructure. Les droits, la maintenance éventuelle et les responsabilités sont définis contractuellement.",
              ],
              [
                "L'assistant est-il autonome sans limite ?",
                "Non. Le périmètre des tâches, les permissions, les quotas et les validations humaines sont définis pour chaque projet.",
              ],
              [
                "Les canaux et outils sont-ils tous compatibles ?",
                "Non. Je vérifie la documentation, la version déployée et, lorsque c'est possible, un test réel avant de confirmer une intégration.",
              ],
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CTABand
            title="Trouvons le bon niveau d'assistance pour votre activité."
            service="agent-ia"
            source="hermes-bas"
          />
        </div>
      </section>
    </>
  );
}
