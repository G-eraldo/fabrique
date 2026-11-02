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
import { AlertCircle, BookOpen, Settings2 } from "lucide-react";
import Link from "next/link";

export const metadata = pageMetadata(
  "Automatisations n8n et workflows d'entreprise",
  "Automatisation n8n pour gérer les demandes entrantes, rappels et synchronisations entre outils. Packs par besoin et projets sur mesure, après vérification des intégrations.",
  "/automatisations",
);

const cases = [
  {
    title: "Gestion des demandes entrantes",
    before:
      "Une demande arrive par formulaire ou e-mail, puis attend dans une boîte de réception ou doit être recopiée à la main.",
    steps: [
      "Recevoir la demande dans un outil autorisé",
      "Qualifier ou orienter selon des règles convenues",
      "Notifier la bonne personne et conserver une trace",
    ],
    result: "Un suivi plus lisible des demandes, selon les outils disponibles.",
    control: "Les réponses engageantes restent soumises à validation humaine.",
  },
  {
    title: "Relances et rappels",
    before:
      "Une échéance ou une réponse en attente dépend d'un rappel manuel et peut être oubliée.",
    steps: [
      "Définir un déclencheur planifié ou conditionnel",
      "Préparer le rappel avec les bonnes données",
      "Envoyer seulement si le canal et l'autorisation sont prévus",
    ],
    result: "Des rappels plus réguliers, sans promettre un résultat chiffré.",
    control: "Le contenu et l'envoi sont cadrés selon vos autorisations.",
  },
  {
    title: "Synchronisation des outils",
    before:
      "Les mêmes informations sont saisies dans plusieurs applications professionnelles.",
    steps: [
      "Vérifier les API et les droits des comptes",
      "Définir quelles données doivent circuler",
      "Tester les erreurs, doublons et limites de volume",
    ],
    result: "Moins de ressaisie lorsque les intégrations sont compatibles.",
    control: "Seules les applications et données autorisées sont connectées.",
  },
];

export default function AutomatisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Automatisations n8n"
        title="Libérez votre attention des tâches qui se répètent."
        actions={
          <>
            <ActionLink href={contactHref("diagnostic-ia", "n8n-hero")}>
              Demander mon diagnostic IA gratuit
            </ActionLink>
            <ActionLink
              href={contactHref("automatisation", "n8n-hero")}
              variant="outline"
            >
              Parler de mon automatisation
            </ActionLink>
          </>
        }
      >
        Je conçois des workflows n8n pour relier vos outils et organiser vos
        processus. Je vérifie les accès, les quotas et les limites avant de
        promettre une intégration.
      </PageHero>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Trois situations concrètes"
            title="L'automatisation part d'un geste que vous faites déjà."
          >
            Ces parcours sont des démonstrations illustratives. Leur mise en
            œuvre dépend de vos logiciels, de leurs API et des autorisations
            disponibles.
          </SectionIntro>
          <div className="case-grid">
            {cases.map((item, i) => (
              <article className="case-card" key={item.title}>
                <div>
                  <span className="badge badge-amber">
                    Démonstration illustrative {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <div>
                  <p>
                    <strong>Avant :</strong> {item.before}
                  </p>
                  <ol>
                    {item.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <p>
                    <strong>Résultat attendu :</strong> {item.result}
                  </p>
                  <p>
                    <strong>Contrôle :</strong> {item.control}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Ce qui est livré"
            title="Un workflow documenté, testé et transmissible."
          >
            Packs par besoin métier ou workflow personnalisé : le périmètre est
            fixé après un cadrage de vos outils.
          </SectionIntro>
          <InfoCards
            items={[
              {
                icon: Settings2,
                title: "Cadrage et configuration",
                text: "Déclencheurs, données, permissions et dépendances sont définis avant l'assemblage du workflow.",
              },
              {
                icon: AlertCircle,
                title: "Tests et erreurs",
                text: "Je teste les cas prévus, les échecs pertinents et les limitations connues des outils connectés.",
              },
              {
                icon: BookOpen,
                title: "Documentation et prise en main",
                text: "Vous recevez des explications pour comprendre le fonctionnement et savoir quand intervenir.",
              },
            ]}
          />
          <div className="benefit-panel" style={{ marginTop: "1.5rem" }}>
            <h3 className="h3">Un cadre de maintenance explicite</h3>
            <p>
              Si j'héberge la solution, la maintenance fait partie du contrat.
              Sur votre infrastructure, elle peut être facultative selon le
              projet. Les nouvelles intégrations et évolutions sont étudiées sur
              devis.
            </p>
          </div>
        </div>
      </section>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="À savoir"
            title="Les intégrations se vérifient, elles ne se supposent pas."
          >
            Une démonstration ne garantit pas la compatibilité avec tous les
            outils.
          </SectionIntro>
          <FAQ
            items={[
              [
                "Peut-on connecter n'importe quelle application ?",
                "Non. Je vérifie la présence d'une API ou d'un autre accès autorisé, les droits, les quotas et les conditions de l'éditeur avant de confirmer la faisabilité.",
              ],
              [
                "Que se passe-t-il si un workflow échoue ?",
                "Le traitement des erreurs pertinent est prévu dans le périmètre : suivi, notification ou reprise selon le niveau de criticité et les possibilités des outils.",
              ],
              [
                "L'automatisation envoie-t-elle des messages sans contrôle ?",
                "Les règles d'envoi et les autorisations sont définies avec vous. Une étape de validation humaine est prévue lorsque l'action est sensible ou engageante.",
              ],
              [
                "Comment commencer ?",
                "Le diagnostic IA gratuit permet d'identifier une tâche répétitive et de voir si l'automatisation est adaptée. Vous pouvez aussi décrire directement votre projet.",
              ],
            ]}
          />
          <p style={{ marginTop: "1.5rem" }}>
            <Link
              className="inline-link"
              href="/guides/que-peut-automatiser-n8n"
            >
              Lire le guide : que peut automatiser n8n ? →
            </Link>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CTABand
            title="Voyons quelles tâches méritent vraiment d'être automatisées."
            description="Un échange gratuit de 20 à 30 minutes aide à identifier les pistes pertinentes, sans engager un projet avant d'en avoir vérifié la faisabilité."
            service="automatisation"
            source="n8n-bas"
          />
        </div>
      </section>
    </>
  );
}
