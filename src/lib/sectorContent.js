export const sectors = {
  artisans: {
    title: "Solutions web et automatisation pour artisans",
    description:
      "Un site clair pour vos interventions et des demandes mieux organisées, sans promettre des intégrations avant vérification.",
    intro:
      "Quand les appels arrivent pendant un chantier, il est difficile de répondre à tout et de garder une trace. Un site utile explique votre savoir-faire, votre zone réelle d'intervention et la façon de demander un devis.",
    problems: [
      {
        title: "Expliquer vos prestations",
        text: "Décrire les types de travaux, ce qui est compris dans une intervention et les informations utiles avant une demande.",
      },
      {
        title: "Qualifier les demandes",
        text: "Un formulaire peut recueillir le besoin, la commune et les éléments nécessaires, sans demander de données sensibles inutiles.",
      },
      {
        title: "Suivre sans ressaisie",
        text: "Si vos outils le permettent, un workflow n8n peut notifier et classer les demandes entrantes.",
      },
    ],
    workflow:
      "Exemple illustratif : une demande de devis arrive via le site ; les informations sont classées et une notification est préparée. La réponse au client est relue ou envoyée selon les règles autorisées. La faisabilité dépend des outils choisis.",
    service: "site-web",
  },
  restaurants: {
    title: "Sites et automatisations pour restaurants",
    description:
      "Présentez votre carte, vos horaires et les bons moyens de réservation, puis simplifiez certains suivis si vos outils sont compatibles.",
    intro:
      "Une personne qui cherche un restaurant veut savoir rapidement ce que vous proposez, quand vous êtes ouvert et comment réserver. Le site doit rendre ces informations accessibles sur mobile.",
    problems: [
      {
        title: "Une carte facile à consulter",
        text: "Mettre en avant les menus et informations vérifiées, avec une mise à jour adaptée à votre rythme.",
      },
      {
        title: "Des parcours pratiques",
        text: "Horaires, accès, réservation ou commande : seuls les services réellement proposés sont affichés.",
      },
      {
        title: "Des rappels cadrés",
        text: "Selon le système de réservation, un workflow peut préparer des rappels et signaler les erreurs, avec les autorisations nécessaires.",
      },
    ],
    workflow:
      "Exemple illustratif : une réservation confirmée dans un outil compatible déclenche un rappel prévu à l'avance. Les quotas, consentements et possibilités de l'éditeur sont vérifiés avant toute mise en place.",
    service: "site-web",
  },
};
