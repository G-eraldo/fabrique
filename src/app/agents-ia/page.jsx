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
import { BrainCircuit, Hand, LockKeyhole, MessagesSquare } from "lucide-react";
import Link from "next/link";

export const metadata = pageMetadata(
  "Assistants et agents IA pour les professionnels",
  "Comprendre ce qu'un assistant IA professionnel peut préparer, ses limites et les validations humaines à prévoir. Découvrez les offres Hermes de La Fabrique du Code.",
  "/agents-ia",
);

export default function AgentsIAPage() {
  return (
    <>
      <PageHero
        eyebrow="Assistants IA"
        title="Un assistant utile, avec des limites claires."
        actions={
          <>
            <ActionLink href={contactHref("diagnostic-ia", "agents-ia-hero")}>
              Demander mon diagnostic IA gratuit
            </ActionLink>
            <ActionLink href="/agents-ia/hermes" variant="outline">
              Voir les offres Hermes
            </ActionLink>
          </>
        }
      >
        Un assistant IA peut aider à organiser l'information, préparer des
        réponses ou soutenir certains processus. Je définis avec vous ce qu'il
        peut faire, ce qu'il ne doit pas faire et quand une personne doit
        valider.
      </PageHero>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Usages possibles"
            title="Un renfort pour les tâches encadrées."
          >
            Les capacités exactes sont vérifiées selon votre environnement, vos
            outils et les canaux compatibles au moment du projet.
          </SectionIntro>
          <InfoCards
            items={[
              {
                icon: MessagesSquare,
                title: "Comprendre et préparer",
                text: "Répondre à des questions professionnelles dans un périmètre défini et proposer des brouillons à relire.",
              },
              {
                icon: BrainCircuit,
                title: "Adapter l'assistance au métier",
                text: "Structurer les consignes et informations utiles à votre activité, avec des sources et accès maîtrisés.",
              },
              {
                icon: Hand,
                title: "Faire intervenir la bonne personne",
                text: "Prévoir une validation humaine avant un envoi engageant, une suppression ou une décision sensible.",
              },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Garder le contrôle</span>
            <h2 className="h2" style={{ margin: "1rem 0" }}>
              L'IA propose. Vous décidez des actions importantes.
            </h2>
            <p className="lead">
              Je cherche un usage utile sans donner à un assistant plus de
              permissions que nécessaire. Les comptes, les clés, les coûts de
              modèles et la supervision sont cadrés dans le projet.
            </p>
            <p>
              <Link
                className="inline-link"
                href="/guides/agent-ia-ou-automatisation"
              >
                Lire le guide : agent IA ou automatisation ? →
              </Link>
            </p>
          </div>
          <div className="benefit-panel">
            <LockKeyhole size={30} color="#2f735e" />
            <h3 className="h3" style={{ marginTop: "1.2rem" }}>
              Permissions minimales et révocables
            </h3>
            <p>
              Un assistant peut préparer une tâche. Les actions sensibles
              nécessitent une validation humaine. La compatibilité des canaux et
              intégrations est confirmée avant le déploiement.
            </p>
          </div>
        </div>
      </section>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Questions fréquentes"
            title="Ce qu'il faut savoir avant de confier une tâche à l'IA."
          >
            Un projet d'assistant commence par des règles et des responsabilités
            explicites.
          </SectionIntro>
          <FAQ
            items={[
              [
                "Un assistant IA peut-il agir seul ?",
                "Il peut préparer ou exécuter certaines tâches limitées après cadrage. Les actions sensibles sont soumises à validation humaine et ses permissions restent révocables.",
              ],
              [
                "Quels outils peut-il connecter ?",
                "Je vérifie chaque intégration et ses conditions avant de confirmer sa présence dans une offre. Il n'y a pas de compatibilité universelle annoncée.",
              ],
              [
                "Qui paie les modèles et l'hébergement ?",
                "Cela dépend du mode de livraison : infrastructure du client ou environnement géré. Les consommations et coûts sont définis dans le devis et le contrat.",
              ],
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CTABand
            title="Explorons un usage IA qui a du sens pour vous."
            service="agent-ia"
            source="agents-ia-bas"
          />
        </div>
      </section>
    </>
  );
}
