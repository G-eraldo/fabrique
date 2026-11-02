# Recette de la refonte — 2 novembre 2026

## Vérifications réalisées

| Sujet | Résultat observé |
| --- | --- |
| Qualité du code | `npm run lint` sans erreur. |
| Production locale | `npm run build` avec webpack sans erreur ; routes publiques pré-rendues et routes CRM dynamiques. |
| Accueil | Nouvelle accroche et deux CTA visibles ; vérification visuelle et mobile à actualiser après la dernière modification. |
| Navigation mobile | Le menu s'ouvre, annonce son état et donne accès aux pages de service et au contact. |
| Pages commerciales | Les pages web, automatisations, Hermes, diagnostic, réalisations, guides et métiers se rendent localement. Les trois captures clients sont chargées depuis Cloudinary via `next/image` ; leurs dimensions réelles sont détectées et aucune erreur de domaine distant ne s'affiche. |
| Formulaire | Préselection diagnostic depuis le CTA, étape conditionnelle, progression vers les coordonnées, validation des champs, message d'échec lisible et conservation des réponses après une erreur. L'envoi depuis la seconde étape atteint désormais l'action serveur sans erreur « champ de service non focalisable ». |
| SEO | Titles et canoniques propres aux pages testées ; `/portfolio` redirige vers `/realisations` ; `robots.txt` et `sitemap.xml` sont générés ; la 404 est personnalisée ; `/admin` redirige vers la connexion et la page de connexion indique `noindex, nofollow`. |
| Supabase | Tables et politiques RLS appliquées. Une transaction de test annulée a vérifié l'absence de doublon sur renvoi et le refus de la septième demande sur une heure. Le compte administrateur confirmé a été inscrit dans `fabrique_admins`. Une autre transaction annulée a montré qu'il voit une demande fictive tandis qu'un utilisateur authentifié non administrateur ne la voit pas. La base contient 1 administrateur, 0 prospect et 0 empreinte de test. L'accès anonyme aux prospects et à la fonction d'insertion est refusé. L'administrateur peut modifier `status`, mais pas la colonne `email`, selon les privilèges vérifiés. |

Les avis Supabase ne signalent aucun problème de sécurité critique sur les tables publiques `fabrique_*`. Un avis informatif [RLS enabled no policy](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy) reste sur `fabrique_internal.rate_limits` : c'est voulu, puisque le schéma n'est pas exposé aux visiteurs et que seule la clé serveur accède à cette table. Quatre tables préexistantes `miametrie` présentent le même avis informatif ; elles n'ont pas été modifiées. L'avis informatif [unused index](https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index) concerne les index CRM encore inutilisés parce que les tables de demandes sont vides.

## Points à valider avant publication

- Installer `SUPABASE_DATABASE_URL` ou `SUPABASE_SECRET_KEY` côté serveur pour le formulaire. L'URL API et la clé publiable du projet sont déjà configurées pour Auth. Aucun secret n'a été ajouté au dépôt.
- Le compte Auth confirmé et son appartenance au CRM sont en place. Le parcours administrateur complet dans l'interface (connexion avec le mot de passe choisi par le propriétaire, consultation, note, changement de statut, suppression) reste à éprouver.
- Envoyer une demande fictive avec des données de test depuis le site déployé ou un environnement de préproduction configuré ; vérifier son enregistrement unique dans le CRM et, si configurée, la notification Resend. Supprimer ensuite cette demande de test.
- Vérifier en situation réelle les sauvegardes/restaurations, l'adresse d'envoi Resend et les délais de support annoncés. Faire relire les mentions légales et la politique de confidentialité par le propriétaire en fonction des contrats et sous-traitants effectivement utilisés.
- Mesurer LCP, INP et CLS sur l'URL publiée et vérifier l'indexation, les impressions et requêtes dans Search Console. Le navigateur local ne permet pas de conclure sur les performances réseau réelles ni les classements de recherche.
- Faire valider le rendu visuel et les textes commerciaux par le propriétaire avant la mise en ligne.

## Limites connues

Sans URL PostgreSQL ni clé secrète configurée, le formulaire affiche une erreur de service et propose le contact direct par e-mail ; aucune donnée n'est perdue dans la base. Une URL PostgreSQL locale est maintenant présente. La connexion avec certificat racine vérifié a réussi en lecture seule ; l'envoi complet reste à confirmer après redéploiement de cette correction. L'interface administrateur utilise l'URL API et la clé publique configurées dans le code ; son authentification avec le mot de passe du propriétaire reste à confirmer. Aucun déploiement de production et aucune infrastructure Hermes/n8n client n'ont été effectués.
