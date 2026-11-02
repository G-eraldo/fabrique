/* eslint-disable react/no-unescaped-entities */
import {
  ActionLink,
  CheckList,
  CTABand,
  FAQ,
  InfoCards,
  PageHero,
  SectionIntro,
} from "@/components/Marketing";
import { pageMetadata } from "@/lib/seo";
import { contactHref } from "@/lib/site";
import {
  ArrowUpRight,
  ClipboardCheck,
  Gauge,
  Headphones,
  LayoutTemplate,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata(
  "Création de sites web et e-commerce sur mesure",
  "Sites vitrines, e-commerce et développements web sur mesure pour les professionnels de la Somme et de toute la France. Devis personnalisé et accompagnement.",
  "/creation-site-web",
);

const faq = [
  [
    "Puis-je faire évoluer mon site après sa mise en ligne ?",
    "Oui. Les corrections mineures prévues au contrat sont accompagnées dans un plafond défini ensemble. Les nouvelles fonctionnalités ou changements substantiels font l'objet d'un devis distinct.",
  ],
  [
    "L'hébergement est-il compris ?",
    "Je gère l'hébergement des sites dans le cadre des offres proposées. Les modalités, responsabilités, sauvegardes et coûts sont précisés dans le devis et le contrat.",
  ],
  [
    "Le référencement est-il garanti ?",
    "Je prévois une base SEO technique adaptée au projet : structure, métadonnées, performance et indexabilité. Aucune position dans Google n'est garantie.",
  ],
  [
    "Combien de temps faut-il pour créer un site ?",
    "Le calendrier dépend des contenus, des fonctionnalités, des validations et des éventuelles intégrations. Je le définis après avoir étudié votre besoin.",
  ],
];

export default function CreationSiteWebPage() {
  return (
    <>
      <PageHero
        eyebrow="Création de sites web"
        title="Un site pensé pour votre activité, et pour les personnes qui le visitent."
        actions={
          <ActionLink href={contactHref("site-web", "page-web-hero")}>
            Demander un devis pour mon site
          </ActionLink>
        }
      >
        Site vitrine, boutique en ligne ou développement sur mesure : je conçois
        un parcours clair, rapide et utilisable sur tous les écrans, après étude
        de faisabilité.
      </PageHero>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Selon votre besoin"
            title="La bonne forme pour le bon projet."
          >
            Le choix technique suit vos objectifs commerciaux et votre façon de
            travailler.
          </SectionIntro>
          <InfoCards
            items={[
              {
                icon: LayoutTemplate,
                title: "Site vitrine",
                text: "Présenter votre savoir-faire, vos services et vos coordonnées dans une expérience claire qui donne envie de vous contacter.",
              },
              {
                icon: ShoppingBag,
                title: "E-commerce",
                text: "Construire un catalogue et un parcours de commande adaptés à vos produits, paiements et contraintes de gestion, selon faisabilité.",
              },
              {
                icon: Wrench,
                title: "Développement sur mesure",
                text: "Créer un outil métier, un espace privé ou un parcours spécifique lorsque les solutions standard ne répondent pas au besoin.",
              },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Du besoin à la mise en ligne</span>
            <h2 className="h2" style={{ margin: "1rem 0" }}>
              Un projet web complet, sans zone floue.
            </h2>
            <p className="lead">
              Je prends en charge la conception, le développement et les tests.
              Vous savez ce qui sera livré, ce qui sera maintenu et ce qui
              relève d'une évolution future.
            </p>
            <CheckList
              items={[
                "Cadrage des objectifs, des contenus et des fonctionnalités",
                "Design responsive et développement",
                "Tests des parcours et optimisation SEO technique de base",
                "Mise en ligne, hébergement géré et prise en main",
                "Maintenance et petites corrections dans un plafond contractuel",
              ]}
            />
            <ActionLink
              href={contactHref("site-web", "page-web-livrables")}
              variant="dark"
            >
              Parler de mon site
            </ActionLink>
          </div>
          <div className="work-card">
            <div className="work-image">
              <Image
                src="https://res.cloudinary.com/dlnbsf2ed/image/upload/v1793636416/site_1_i64sv4.jpg"
                alt="Capture du site Les Photos de Cécile"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
            <div className="work-body">
              <span className="badge">Projet client réalisé</span>
              <h3>Les Photos de Cécile</h3>
              <p>
                Un site vitrine et portfolio pour présenter le travail d'une
                photographe professionnelle.
              </p>
              <a
                className="inline-link"
                href="https://lesphotosdececile.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explorer le site <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Un cadre lisible"
            title="Hébergement et maintenance définis avant la livraison."
          >
            Je gère l'hébergement dans mes offres web. Le contrat précise les
            sauvegardes, les responsabilités, le support et les limites de
            maintenance.
          </SectionIntro>
          <InfoCards
            items={[
              {
                icon: Gauge,
                title: "Performance et suivi",
                text: "Un site conçu pour charger vite et rester compréhensible. Les mesures et optimisations dépendent de son contenu réel.",
              },
              {
                icon: Headphones,
                title: "Support",
                text: "Par e-mail, avec un objectif de première réponse sous deux jours ouvrés. Il ne s'agit pas d'une garantie de résolution dans ce délai.",
              },
              {
                icon: ClipboardCheck,
                title: "Évolutions",
                text: "Les petites corrections incluses sont plafonnées au contrat. Nouvelles fonctionnalités et refontes sont étudiées sur devis.",
              },
            ]}
          />
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <SectionIntro
            eyebrow="Près de vous ou à distance"
            title="Un même niveau d'attention, où que vous soyez."
          >
            Je prospecte dans la Somme et autour d'Amiens, et j'accompagne aussi
            des entreprises partout en France.
          </SectionIntro>
          <div className="link-grid">
            <Link className="link-card" href="/creation-site-web/amiens">
              <span className="eyebrow">Amiens</span>
              <h3>Créer un site web pour une activité à Amiens</h3>
              <p>
                Présence locale, informations pratiques et demandes entrantes.
              </p>
              <span className="inline-link">Lire la page →</span>
            </Link>
            <Link className="link-card" href="/creation-site-web/somme">
              <span className="eyebrow">Somme</span>
              <h3>Un site adapté aux professionnels de la Somme</h3>
              <p>
                Parcours utiles pour artisans, commerces et entreprises du
                département.
              </p>
              <span className="inline-link">Lire la page →</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-tight section-white">
        <div className="container">
          <SectionIntro
            eyebrow="Questions fréquentes"
            title="Préparer votre projet web."
          >
            Les conditions exactes sont toujours précisées dans la proposition.
          </SectionIntro>
          <FAQ items={faq} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CTABand
            title="Racontons le site dont votre activité a besoin."
            description="Décrivez votre projet, même s'il n'est pas encore cadré. Je reviendrai vers vous pour en discuter et préparer un devis adapté."
            service="site-web"
            source="page-web-bas"
          />
        </div>
      </section>
    </>
  );
}
