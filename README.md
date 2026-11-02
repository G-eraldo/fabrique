# La Fabrique du Code

Site vitrine et mini-CRM privé, construit avec Next.js 16, React 19, Tailwind CSS et Supabase. Le site présente les prestations web, n8n, assistants IA Hermes et le diagnostic IA gratuit. Les demandes passent par un formulaire conditionnel puis sont suivies dans `/admin`.

## Démarrage local

Node.js 20 et npm sont attendus. Exécuter `npm ci`, puis préparer les variables d'environnement à partir de [`.env.example`](.env.example). Les deux variables `NEXT_PUBLIC_` sont publiques. `SUPABASE_SECRET_KEY` est réservée au serveur : ne jamais la placer dans le code client, un dépôt ou une variable `NEXT_PUBLIC_`.

Le projet Supabase retenu est **suivi-calories** (`fbpmaiwdybbvyfoqzctt`). Les tables `fabrique_*` et le schéma privé `fabrique_internal` sont séparés des données préexistantes de ce projet. Le schéma appliqué est dans [`docs/schema-fabrique.sql`](docs/schema-fabrique.sql).

```bash
npm ci
npm run dev
```

Ouvrir `http://localhost:3000` (pas `127.0.0.1` avec le serveur de développement Next.js actuel). Vérifier le site avec `npm run lint` puis `npm run build`.

## Configuration Supabase

Les migrations `create_fabrique_crm`, `harden_fabrique_internal_rate_limits` et `restrict_fabrique_lead_updates` ont été appliquées au projet. Pour une nouvelle instance, appliquer [`docs/schema-fabrique.sql`](docs/schema-fabrique.sql) une seule fois après avoir vérifié qu'aucun objet `fabrique_*` n'existe ; le fichier décrit l'état final du schéma. Ne pas réappliquer les migrations à l'aveugle sur une base contenant des données.

1. Copier l'URL et la clé publiable depuis `.env.example` dans la configuration locale et l'hébergeur.
2. Récupérer la **secret key** du projet dans Supabase > Project Settings > API Keys et la placer dans le coffre de l'hébergeur sous `SUPABASE_SECRET_KEY`. Si l'interface ne propose que l'ancienne `service_role` key, la traiter avec la même protection et vérifier sa compatibilité avec la version installée de `supabase-js`.
3. Dans Supabase > Authentication > Users, créer ou inviter le propriétaire avec son adresse e-mail. Le propriétaire choisit et saisit lui-même son mot de passe. Vérifier que l'adresse est confirmée.
4. Après la création du compte Auth, lui attribuer l'accès au CRM dans l'éditeur SQL de Supabase :

```sql
insert into public.fabrique_admins (user_id)
select id from auth.users
where lower(email) = lower('ADRESSE_ADMIN_CONFIRMÉE')
  and email_confirmed_at is not null
on conflict (user_id) do nothing;
```

Le formulaire public utilise une action serveur et une fonction SQL exécutable uniquement avec la clé secrète : la clé publiable seule ne suffit pas. La connexion et toutes les opérations CRM nécessitent un compte Supabase Auth présent dans `fabrique_admins`. Les politiques RLS contrôlent également l'accès à la base. `RESEND_API_KEY` est facultative : si elle est présente, une notification interne sans contenu personnel est envoyée après l'enregistrement ; la demande reste enregistrée même si l'e-mail échoue.

## Exploitation

- `/admin` : liste, recherche, filtres et pagination de 25 demandes ; une fiche contient les réponses, les notes et l'historique des statuts.
- La suppression depuis la fiche efface la demande et ses événements associés. Prévoir une vérification régulière de la durée de conservation annoncée dans la politique de confidentialité et traiter les demandes de droits reçues à `contact@lafabriqueducode.fr`.
- Le taux limite est de six nouvelles demandes par empreinte de connexion sur une heure. Le client génère un identifiant de soumission ; la fonction SQL évite les doublons. Les empreintes sont des HMAC de l'adresse IP, stockés dans `fabrique_internal.rate_limits` ; purger les lignes anciennes lors de la maintenance régulière.
- Sauvegarder la base selon le contrat et les capacités réelles du plan Supabase avant toute migration ou suppression importante. Tester périodiquement la restauration sur une instance isolée.

## Mise en production et retour arrière

Aucun déploiement n'est inclus dans cette refonte locale. Avant publication : définir les trois variables Supabase dans l'environnement de production, créer le compte administrateur, contrôler RLS et les politiques, tester une soumission réelle puis la consultation et la suppression dans le CRM, vérifier l'e-mail optionnel, les URL/canoniques, `robots.txt`, `sitemap.xml`, les pages mobiles, le clavier, la réduction des animations, les règles de confidentialité et les sauvegardes. Relier Search Console et mesurer les résultats réels après mise en ligne.

Pour revenir en arrière, redéployer la version précédente du site et conserver les tables `fabrique_*` afin de ne pas perdre les demandes reçues. Si un retour arrière de schéma est indispensable, exporter et sauvegarder les données, puis préparer une migration inverse revue séparément ; ne pas supprimer ces tables sans inventaire et sauvegarde.

Voir aussi [`docs/audit-et-seo.md`](docs/audit-et-seo.md), [`docs/recette.md`](docs/recette.md) et [`docs/hermes-n8n-architecture.md`](docs/hermes-n8n-architecture.md).
