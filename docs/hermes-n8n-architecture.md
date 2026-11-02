# Note de faisabilité — environnements Hermes et n8n des clients

Cette note décrit un chantier futur. Aucun environnement client, serveur, agent ou workflow n'a été provisionné pour la refonte du site.

## Deux modes à cadrer par contrat

| Mode | Propriété et accès | Exploitation à définir |
| --- | --- | --- |
| Infrastructure du client | Le client contrôle le serveur, les comptes et les clés API ; La Fabrique du Code reçoit des accès limités et révocables pour l'installation. | Maintenance facultative, sauvegardes, mises à jour, support et transfert à préciser. |
| Infrastructure gérée | Un environnement isolé par client, avec comptes, clés et stockage distincts. | Hébergement et maintenance contractuels, supervision, incidents, sauvegardes et sortie du service à préciser. |

Le choix entre VPS, conteneurs Docker/Dokploy, PostgreSQL, Infisical et outil de messagerie reste ouvert après audit des besoins. Ne pas mutualiser les secrets ou les données de plusieurs clients dans un même espace logique sans étude de cloisonnement. Les canaux, intégrations et capacités Hermes doivent être vérifiés dans une installation de test avant d'être vendus comme inclus.

## Parcours de conception

1. Décrire une mission concrète, les données nécessaires, les opérations autorisées, les résultats attendus et les cas d'échec.
2. Vérifier les API, permissions, quotas et conditions d'utilisation des outils à connecter. Choisir n8n pour les étapes déterministes et Hermes uniquement si le besoin d'interprétation ou de préparation le justifie.
3. Créer un environnement client isolé et des comptes de service aux permissions minimales. Garder les clés dans un coffre ; prévoir leur rotation et révocation. Consigner les accès sans écrire les secrets dans les journaux.
4. Insérer une validation humaine explicite avant les envois engageants, suppressions, engagements financiers et traitements sensibles. Tester les refus et l'arrêt du processus.
5. Tester les erreurs, les doublons, les quotas et les interruptions réseau avec des données fictives. Documenter les limites et les étapes de reprise.
6. Définir la supervision, les sauvegardes, une restauration testée, les mises à jour, les incidents, la réversibilité et la suppression finale des données.

Pour chaque client, établir en interne une estimation des postes serveur, stockage, modèles/API, supervision, sauvegardes, support et marge de variation selon l'usage. Le devis commercial reste personnalisé, sans tarif public. Tout déploiement réel exige un cahier des charges client, une validation de faisabilité, un contrat et une autorisation spécifique.
