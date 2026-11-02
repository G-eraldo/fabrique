export const guides = {
  "agent-ia-ou-automatisation": {
    title: "Agent IA ou automatisation : que choisir ?",
    description:
      "Comprendre la différence entre un workflow déterministe et un assistant IA pour choisir le bon outil professionnel.",
    intro:
      "Les deux approches peuvent faire gagner de l'attention, mais elles ne répondent pas aux mêmes situations. La bonne question est : votre tâche suit-elle toujours les mêmes règles ?",
    sections: [
      {
        title: "Quand un workflow suffit",
        paragraphs: [
          "Une automatisation n8n suit des étapes définies. Un formulaire arrive, une règle choisit sa destination, une notification est envoyée. Les données, les conditions et les erreurs sont explicites.",
          "Ce choix est souvent pertinent pour déplacer des données entre outils autorisés, déclencher un rappel ou classer des demandes selon des critères stables. Il faut vérifier les API, les quotas et les droits d'accès de chaque application.",
        ],
      },
      {
        title: "Quand l'IA peut aider",
        paragraphs: [
          "Un assistant IA est intéressant lorsque la tâche demande de comprendre un texte, d'explorer plusieurs pistes ou de préparer une réponse. Son résultat doit pouvoir être relu, corrigé et replacé dans le contexte du métier.",
          "Il n'est pas adapté à une autonomie illimitée. Pour un envoi engageant, une suppression ou une décision sensible, une validation humaine reste nécessaire.",
        ],
      },
      {
        title: "Les deux peuvent se compléter",
        paragraphs: [
          "Un workflow peut collecter et organiser des informations ; un assistant peut préparer un brouillon ; une personne approuve l'action finale. La frontière entre ces étapes doit être claire.",
          "Avant de construire, je propose de décrire une tâche réelle, ses entrées, sa fréquence, ses exceptions et les personnes responsables. C'est ce cadrage qui détermine la solution, pas la nouveauté de la technologie.",
        ],
      },
    ],
    related: "/automatisations",
    relatedLabel: "Découvrir les automatisations n8n",
  },
  "que-peut-automatiser-n8n": {
    title: "Que peut-on automatiser avec n8n ?",
    description:
      "Exemples concrets de workflows n8n pour demandes entrantes, rappels et synchronisation d'outils, avec leurs limites.",
    intro:
      "n8n permet de construire des workflows qui réagissent à un événement et transmettent des données entre services. Ce qui est possible dépend toujours des accès et des règles de chaque outil.",
    sections: [
      {
        title: "Recevoir et orienter les demandes",
        paragraphs: [
          "Un formulaire peut déclencher une notification, créer un suivi et orienter la demande selon le service demandé. Il faut prévoir les champs réellement utiles, la protection des données et une façon de traiter les erreurs.",
          "Si une réponse automatique est envisagée, elle doit rester adaptée au contexte et aux autorisations. Une demande importante mérite souvent une relecture humaine.",
        ],
      },
      {
        title: "Préparer des rappels",
        paragraphs: [
          "Un rendez-vous, une échéance ou une demande sans suite peut déclencher un rappel selon une règle définie. Le workflow peut préparer un message ou notifier la personne chargée du suivi.",
          "Avant l'envoi, il faut vérifier le consentement, les quotas du canal, les cas de doublon et la façon de stopper les rappels si la situation change.",
        ],
      },
      {
        title: "Synchroniser des applications",
        paragraphs: [
          "Une information créée dans un outil peut être recopiée dans un autre lorsque les deux proposent une intégration compatible. La difficulté se trouve souvent dans le format des données, les droits et la gestion des conflits.",
          "Un workflow sérieux inclut des tests, un traitement des erreurs, une documentation et une maintenance adaptée à son hébergement. Une démonstration n'est jamais une garantie de compatibilité universelle.",
        ],
      },
    ],
    related: "/automatisations",
    relatedLabel: "Voir les cas d'usage n8n",
  },
  "preparer-projet-site-web": {
    title: "Comment préparer son projet de site web ?",
    description:
      "Les questions utiles avant un devis de site vitrine, e-commerce ou développement web sur mesure.",
    intro:
      "Un bon projet web commence par des réponses simples : pour qui est le site, que doit faire la personne qui arrive dessus et quels contenus sont déjà disponibles ?",
    sections: [
      {
        title: "Clarifier l'objectif",
        paragraphs: [
          "Souhaitez-vous présenter votre activité, recevoir des demandes, vendre des produits ou faciliter un service existant ? Ces objectifs n'impliquent pas les mêmes pages ni les mêmes fonctionnalités.",
          "Pensez aux questions que vos clients posent avant de vous contacter. Les réponses les plus fréquentes donnent souvent la structure du site.",
        ],
      },
      {
        title: "Rassembler les contenus",
        paragraphs: [
          "Une liste de prestations, des informations pratiques, des photos publiables et des coordonnées exactes sont un bon début. Les textes peuvent être travaillés ensemble ; ils doivent décrire votre activité réelle.",
          "Pour un e-commerce, il faut aussi cadrer le catalogue, les paiements, la livraison, les retours et la gestion des stocks avant de choisir une plateforme.",
        ],
      },
      {
        title: "Prévoir la suite",
        paragraphs: [
          "Demandez qui mettra à jour le site, qui gère l'hébergement, ce qui est sauvegardé et comment obtenir du support. Le devis doit séparer les petites corrections contractuelles des nouvelles fonctionnalités.",
          "Enfin, fixez une échéance indicative et les personnes qui valideront les contenus. Le calendrier final dépend de ces éléments autant que du développement.",
        ],
      },
    ],
    related: "/creation-site-web",
    relatedLabel: "Découvrir la création de sites web",
  },
  "cadrer-assistant-ia-entreprise": {
    title: "Comment cadrer un assistant IA en entreprise ?",
    description:
      "Tâches, permissions, validations humaines, coûts et maintenance : les questions à poser avant de mettre en place un assistant IA.",
    intro:
      "Un assistant professionnel a besoin d'un périmètre plus précis qu'une consigne générale. Le cadrage protège votre activité et rend les résultats plus utiles.",
    sections: [
      {
        title: "Décrire les tâches et leurs limites",
        paragraphs: [
          "Listez quelques situations concrètes : informations à lire, brouillons à préparer, réponses à proposer. Pour chacune, indiquez ce qui constitue une bonne réponse et ce qui doit être transmis à une personne.",
          "Les cas rares et sensibles comptent autant que le scénario habituel. Un assistant doit pouvoir s'arrêter, demander une précision ou refuser une action hors périmètre.",
        ],
      },
      {
        title: "Limiter les accès",
        paragraphs: [
          "Chaque connexion à un outil doit être vérifiée. Les permissions doivent être les plus faibles possibles et pouvoir être retirées. Les clés API et données personnelles ne doivent pas être exposées dans une interface publique.",
          "Un envoi engageant, une suppression, un engagement financier ou un traitement sensible demande une validation humaine explicite.",
        ],
      },
      {
        title: "Prévoir exploitation et coûts",
        paragraphs: [
          "Le mode d'hébergement, les modèles utilisés, les quotas, la supervision, les sauvegardes et la maintenance doivent être définis avant la mise en service.",
          "Je propose un projet sur devis après avoir vérifié les capacités réelles des canaux et intégrations retenus. Il n'y a pas de compatibilité annoncée sans test ou documentation actuelle.",
        ],
      },
    ],
    related: "/agents-ia/hermes",
    relatedLabel: "Comparer les offres Hermes",
  },
};
