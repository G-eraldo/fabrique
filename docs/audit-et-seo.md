# Audit initial, direction visuelle et plan SEO

État observé le 2 novembre 2026, avant la refonte du dépôt. Les chiffres Search Console, les positions, les conversions, les Core Web Vitals réels et l'index Google n'étaient pas disponibles ; aucune performance initiale n'est inventée.

## Dépôt et impacts

Le dépôt utilisait Next.js 16, React 19, JavaScript, Tailwind CSS 4, Vercel Analytics et Resend. Les routes présentes étaient `/`, `/services`, `/portfolio`, `/a-propos`, `/contact` et `/mentions-legales`. Le formulaire envoyait seulement un e-mail ; il n'y avait ni stockage structuré, ni authentification, ni suivi de prospect. Le site était rendu côté serveur, avec métadonnées et sitemap, mais le parcours mobile, la preuve des réalisations et les données structurées demandaient une reprise. La CI existante exécute installation, audit npm, lint et build ; aucun déploiement n'a été effectué pendant cette refonte.

Les URL existantes restent valides, sauf `/portfolio`, redirigée de manière permanente vers `/realisations`. `/services`, `/a-propos`, `/contact` et `/mentions-legales` gardent leur URL. Cette matrice doit être confrontée aux URL réellement indexées dans Search Console avant publication.

| Ancienne URL | Nouvelle URL | Action |
| --- | --- | --- |
| `/portfolio` | `/realisations` | Redirection permanente Next.js |
| `/services` | `/services` | Conservée comme page de synthèse |
| `/`, `/a-propos`, `/contact`, `/mentions-legales` | identiques | Conservées |

Le projet Supabase choisi par le propriétaire, `suivi-calories`, contenait des objets `miametrie` sans lien avec ce site. Les nouvelles tables `fabrique_*` et le schéma `fabrique_internal` ont été ajoutés sans toucher à ces données. Aucun compte Auth n'existait lors de la création du schéma. Les risques principaux sont la mise en service de la clé secrète, l'activation du premier administrateur, l'envoi réel du formulaire et la protection des données personnelles ; ces points font partie de la recette avant publication.

## Direction visuelle appliquée

La refonte emploie un fond papier chaud, une encre vert ardoise, un accent ambre limité aux actions et repères, une typographie affirmée et des blocs généreusement espacés. La navigation est compacte et légèrement translucide ; les éléments interactifs ont un focus visible et un mouvement discret, désactivé lorsque la réduction des animations est demandée. La composition privilégie la lecture et les deux CTA de l'accueil. Cette direction reste à valider visuellement par le propriétaire avant mise en ligne.

## Cartographie SEO de lancement

Les expressions ci-dessous sont des hypothèses éditoriales, pas des volumes de recherche mesurés ni des positions acquises.

| Requête ou thème | Intention | URL cible | Zone |
| --- | --- | --- | --- |
| création de site web professionnel | commerciale | `/creation-site-web` | France |
| création de site web Amiens | commerciale locale | `/creation-site-web/amiens` | Amiens |
| création de site web Somme | commerciale locale | `/creation-site-web/somme` | Somme |
| automatisation n8n entreprise | commerciale / informationnelle | `/automatisations` | France |
| assistant IA professionnel | commerciale / informationnelle | `/agents-ia` | France |
| agent IA Hermes pour entreprise | commerciale | `/agents-ia/hermes` | France |
| diagnostic IA gratuit pour entreprise | commerciale | `/diagnostic-ia` | France |
| site web artisan | commerciale métier | `/solutions-metiers/artisans` | France |
| automatisation restaurant | commerciale métier | `/solutions-metiers/restaurants` | France |
| agent IA ou automatisation | informationnelle | `/guides/agent-ia-ou-automatisation` | France |
| que peut automatiser n8n | informationnelle | `/guides/que-peut-automatiser-n8n` | France |
| préparer un projet de site web | informationnelle | `/guides/preparer-projet-site-web` | France |
| cadrer un assistant IA en entreprise | informationnelle | `/guides/cadrer-assistant-ia-entreprise` | France |

Les pages Amiens et Somme ont des contenus distincts. Aucune page Picardie ou Hauts-de-France n'a été créée sans information régionale spécifique. Les pages métier initiales traitent les besoins propres aux artisans et restaurants ; les autres métiers seront ajoutés après collecte d'exemples solides. Le maillage relie les guides aux services et les pages locales à la prestation web.

## Calendrier éditorial progressif

| Mois | Travail | Preuve attendue |
| --- | --- | --- |
| 1 | Publier les pages piliers et les quatre guides de départ ; relire les exemples et CTA ; connecter Search Console. | URL indexables, canoniques correctes, premières données réelles. |
| 2 | Enrichir les deux réalisations vérifiées avec périmètre et autorisation ; documenter une démonstration n8n supplémentaire ; compléter les questions fréquentes à partir des demandes reçues. | Preuves publiables et questions fondées sur les échanges. |
| 3 | Étudier les requêtes et pages d'entrée dans Search Console ; créer une page métier ou régionale seulement si un besoin distinct et une preuve éditoriale existent ; ajuster les liens internes. | Décisions fondées sur impressions, clics et demandes qualifiées. |

## Mesure après publication

Suivre les impressions, clics, requêtes et pages dans Search Console ; dans l'outil d'audience, suivre les pages d'entrée et les clics CTA si un événement conforme est configuré. Dans le CRM, comparer les soumissions par service et par source du CTA, puis qualifier les demandes par statut. Les URL `/admin` sont exclues de Vercel Analytics et les paramètres de requête sont retirés avant envoi. Aucun taux de conversion initial n'est disponible.
