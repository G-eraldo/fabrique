/* eslint-disable react/no-unescaped-entities */
import { PageHero } from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata(
  "Politique de confidentialité",
  "Comment La Fabrique du Code utilise et protège les données transmises dans ses formulaires et son espace privé.",
  "/confidentialite",
);

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow="Vos données"
        title="Politique de confidentialité"
        compact
      >
        Ces informations expliquent comment votre demande est reçue, suivie et
        protégée.
      </PageHero>
      <section className="section-tight section-white">
        <div className="container prose-section">
          <h2>Responsable du traitement</h2>
          <p>
            Gérald François, La Fabrique du Code, 11 rue de la gare 80360
            Guillemont. Pour toute question :{" "}
            <a href="mailto:contact@lafabriqueducode.fr">
              contact@lafabriqueducode.fr
            </a>
            .
          </p>
          <h2>Données collectées et finalité</h2>
          <p>
            Lorsque vous remplissez le formulaire, je collecte votre nom, votre
            e-mail, éventuellement votre entreprise et votre téléphone, ainsi
            que les informations que vous donnez sur votre activité et votre
            projet. Le service demandé et la provenance du bouton utilisé sont
            aussi enregistrés. Ces données servent à répondre à votre demande,
            préparer un échange, établir un devis si vous le souhaitez et
            assurer le suivi de cette relation.
          </p>
          <p>
            Le traitement repose sur les démarches précontractuelles demandées
            par la personne qui soumet le formulaire et, pour le suivi de la
            relation, sur l'intérêt légitime de gérer les demandes reçues. Aucun
            envoi de prospection automatisée n'est prévu par ce formulaire. Ne
            transmettez pas de données sensibles dans les champs libres.
          </p>
          <h2>Accès, sous-traitants et sécurité</h2>
          <p>
            Seul l'administrateur autorisé accède aux demandes dans le mini-CRM
            privé. Le site utilise Vercel pour l'hébergement, Supabase pour le
            stockage et l'authentification, et peut utiliser Resend pour une
            notification interne par e-mail. Ces prestataires ont leurs propres
            infrastructures et conditions de traitement ; je ne garantis pas que
            toutes les données restent dans un seul pays.
          </p>
          <p>
            Les accès au CRM sont contrôlés côté serveur et par des règles de
            sécurité de la base. Les réponses ne sont pas placées dans les URL
            ni dans les événements de mesure d'audience.
          </p>
          <h2>Durée de conservation</h2>
          <p>
            Les demandes qui ne donnent pas lieu à un contrat sont conservées
            pendant la durée nécessaire à leur traitement et à leur suivi, au
            plus trois ans après le dernier contact émanant de votre part. Elles
            peuvent être supprimées plus tôt sur demande, sous réserve d'une
            obligation de conservation applicable. Les données liées à un
            contrat suivent les durées légales et contractuelles concernées.
          </p>
          <h2>Mesure d'audience et cookies</h2>
          <p>
            Le site utilise Vercel Web Analytics pour des statistiques de visite
            agrégées. Selon la documentation de Vercel, ce service ne dépose pas
            de cookie de mesure d'audience. Les cookies de connexion à l'espace
            administrateur sont nécessaires à son fonctionnement et ne
            concernent pas les visiteurs ordinaires.
          </p>
          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l'accès, la rectification, l'effacement, la
            limitation ou l'opposition au traitement de vos données, selon les
            conditions applicables. Écrivez à{" "}
            <a href="mailto:contact@lafabriqueducode.fr">
              contact@lafabriqueducode.fr
            </a>
            . Vous pouvez aussi déposer une réclamation auprès de la{" "}
            <a
              href="https://www.cnil.fr/fr/plaintes"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL
            </a>
            .
          </p>
          <p>
            Retour au <Link href="/contact">formulaire de contact</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
