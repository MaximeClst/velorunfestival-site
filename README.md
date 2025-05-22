# VeloRunFestival - Site Web

Site web de l&apos;association VeloRunFestival, dédié à la promotion des événements cyclistes.

## Technologies utilisées

- Next.js 14
- TypeScript
- TailwindCSS
- shadcn/ui
- React 19

## Prérequis

- Node.js 18.17 ou supérieur
- npm ou yarn

## Installation

1. Clonez le dépôt :

```bash
git clone [URL_DU_REPO]
cd velorunfestival-site
```

2. Installez les dépendances :

```bash
npm install
# ou
yarn install
```

3. Créez un fichier `.env.local` à la racine du projet et ajoutez les variables d&apos;environnement nécessaires :

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Développement

Pour lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible à l&apos;adresse [http://localhost:3000](http://localhost:3000).

## Production

Pour construire le projet pour la production :

```bash
npm run build
# ou
yarn build
```

Pour démarrer le serveur de production :

```bash
npm run start
# ou
yarn start
```

## Structure du projet

```
velorunfestival-site/
├── public/              # Fichiers statiques
│   └── images/         # Images du site
├── src/
│   ├── app/           # Pages de l&apos;application
│   ├── components/    # Composants React
│   │   ├── layout/   # Composants de mise en page
│   │   └── ui/       # Composants UI réutilisables
│   └── lib/          # Utilitaires et configurations
├── .env.local         # Variables d&apos;environnement
└── package.json       # Dépendances et scripts
```

## Fonctionnalités

- Page d&apos;accueil avec présentation de l&apos;association
- Liste des événements à venir
- Liste des épreuves disponibles
- Formulaire de contact
- Formulaire pour devenir bénévole
- Design responsive
- Interface moderne avec TailwindCSS et shadcn/ui

## Contribution

1. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalite`)
2. Committez vos changements (`git commit -m &apos;Ajout de ma fonctionnalité&apos;`)
3. Poussez vers la branche (`git push origin feature/ma-fonctionnalite`)
4. Ouvrez une Pull Request

## Licence

Ce projet est sous licence [MIT](LICENSE).
