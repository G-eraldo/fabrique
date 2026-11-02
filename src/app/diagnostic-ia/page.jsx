/* eslint-disable react/no-unescaped-entities */
import FormContent from "@/components/FormContent";
import {
  ActionLink,
  FAQ,
  InfoCards,
  PageHero,
  SectionIntro,
} from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";
import { CalendarClock, FileText, MessagesSquare } from "lucide-react";

export const metadata = pageMetadata(
  "Diagnostic IA gratuit pour les professionnels",
  "Un échange gratuit de 20 à 30 minutes par téléphone ou visioconférence, suivi d'un récapitulatif personnalisé par e-mail. Demandez votre diagnostic IA.",
  "/diagnostic-ia",
);

export default function DiagnosticIAPage() {
  return (
    <>
      <PageHero
        eyebrow="Diagnostic IA gratuit"
        title="Prenons 20 à 30 minutes pour voir ce qui peut vous simplifier la vie."
        actions={
          <ActionLink href="#demande-diagnostic">
            Demander mon diagnostic IA gratuit
          </ActionLink>
        }
      >
        Par téléphone ou visioconférence, sans engagement. Je découvre votre
        activité, vos outils et vos tâches répétitives, puis je vous envoie un
        récapitulatif personnalisé par e-mail après notre échange.
      </PageHero>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Comment ça se passe"
            title="Un premier échange utile, sans jargon."
          >
            Le diagnostic sert à faire émerger des pistes. Il ne remplace pas un
            audit technique approfondi.
          </SectionIntro>
          <InfoCards
            items={[
              {
                icon: MessagesSquare,
                title: "1. Vous me racontez",
                text: "Votre métier, les outils que vous utilisez, les tâches qui prennent du temps et ce que vous aimeriez améliorer.",
              },
              {
                icon: CalendarClock,
                title: "2. Nous échangeons",
                text: "Un appel ou une visioconférence de 20 à 30 minutes, organisé selon nos disponibilités après votre demande.",
              },
              {
                icon: FileText,
                title: "3. Je récapitule",
                text: "Je vous envoie un e-mail personnalisé avec deux ou trois pistes d'amélioration lorsque c'est possible, et une suite éventuelle sur devis.",
              },
            ]}
          />
        </div>
      </section>
      <section className="section" id="demande-diagnostic">
        <div className="container">
          <SectionIntro
            eyebrow="Faire la demande"
            title="Parlez-moi de votre activité."
          >
            Quelques réponses suffisent pour préparer notre échange. Je vous
            recontacte ensuite pour convenir d'un moment disponible ; aucune
            réservation automatique n'est imposée.
          </SectionIntro>
          <FormContent
            initialService="diagnostic-ia"
            source="page-diagnostic"
          />
        </div>
      </section>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Questions fréquentes"
            title="Avant notre échange."
          >
            Le diagnostic est gratuit et sans engagement.
          </SectionIntro>
          <FAQ
            items={[
              [
                "Est-ce vraiment gratuit ?",
                "Oui. L'échange dure 20 à 30 minutes et je vous envoie ensuite un récapitulatif personnalisé par e-mail.",
              ],
              [
                "Comment le rendez-vous est-il fixé ?",
                "Après votre formulaire, je vous contacte selon vos préférences et nos disponibilités. Il n'y a pas de réservation instantanée.",
              ],
              [
                "Vais-je recevoir un audit technique complet ?",
                "Non. Le diagnostic permet d'identifier des pistes et de voir s'il vaut la peine de cadrer un projet plus approfondi.",
              ],
              [
                "Dois-je déjà savoir si j'ai besoin d'un agent IA ?",
                "Non. Nous pouvons aussi conclure qu'un site web plus clair ou une automatisation simple serait plus pertinent.",
              ],
            ]}
          />
        </div>
      </section>
    </>
  );
}
