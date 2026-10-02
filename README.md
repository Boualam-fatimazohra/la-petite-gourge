# La Petite Gorge, site React

Site de l'Auberge Restaurant La Petite Gorge (Tinghir), refait en **React + Vite**, avec React Router et Framer Motion.

## Lancer
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère le dossier dist/
```
(Node 18 ou plus.)

## Modifier le contenu
- **Téléphone, WhatsApp, email, lien Booking** : `src/data.js` (une seule fois, partout).
- **Chambres, plats, lieux, galerie** : `src/data.js`.
- **Textes des pages** : `src/pages.jsx`.
- **Couleurs et polices** : variables en haut de `src/styles.css`.

## Photos
Déposez-les dans `public/img/` avec les mêmes noms qu'avant : `hero.jpg`, `chambre-1.jpg` à `chambre-3.jpg`, `restaurant-1.jpg`, `gorge-1.jpg`, `palmeraie.jpg`, `village.jpg`, `desert.jpg`, `dades.jpg`, `galerie-1.jpg` à `galerie-9.jpg`. Sans photo, un bloc coloré avec le titre s'affiche.

## Déployer
- **GitHub Pages** : poussez sur `main`, puis Settings > Pages > Source : GitHub Actions. Le workflow construit et publie `dist/`.
- **Netlify / Vercel / Cloudflare Pages** : importez le dépôt, commande `npm run build`, dossier `dist`.

Le routeur utilise des URL en `#/chambres` : aucune configuration serveur n'est nécessaire.
