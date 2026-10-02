# La Petite Gorge, site web

Site statique (HTML, CSS, JavaScript) de l'Auberge Restaurant La Petite Gorge, Tinghir, Maroc.
Aucune installation nécessaire : ouvrez `index.html` dans le navigateur.

## Ouvrir dans VS Code
1. Dézippez le dossier, puis `Fichier > Ouvrir un dossier`.
2. Installez l'extension **Live Server**, clic droit sur `index.html` > **Open with Live Server**.

## À remplacer avant la mise en ligne
| Quoi | Où |
|---|---|
| Téléphone `+212 6 00 00 00 00` / `+212600000000` | toutes les pages `.html` |
| WhatsApp `212600000000` | toutes les pages `.html` et `js/main.js` |
| Email `contact@lapetitegorge.example` | toutes les pages `.html` et `js/main.js` |
| Domaine `https://VOTRE-DOMAINE.com` | balises `canonical`, `sitemap.xml`, `robots.txt` |
| Lien Booking | déjà configuré (sans paramètres de suivi) |

Astuce VS Code : `Ctrl+Maj+H` (rechercher/remplacer dans tout le dossier).

## Ajouter vos photos
Déposez vos fichiers dans `assets/img/` avec ces noms exacts. Tant qu'une photo n'existe pas, un bloc coloré avec son titre s'affiche à la place.

`hero.jpg`, `chambre-1.jpg`, `chambre-2.jpg`, `chambre-3.jpg`, `restaurant-1.jpg`, `gorge-1.jpg`, `palmeraie.jpg`, `village.jpg`, `desert.jpg`, `dades.jpg`, `galerie-1.jpg` à `galerie-9.jpg`

Format conseillé : JPG, 1600 px de large, moins de 400 Ko (squoosh.app).

## À vérifier / adapter
- Les types de chambres (double, triple, familiale), la liste des plats et les textes de `decouvrir.html` sont des exemples : adaptez-les à la réalité.
- Les infos issues des annonces en ligne (12 chambres climatisées, petit-déjeuner 7h00-10h30, arrivée 14h, départ 10h, pas d'animaux, Wi-Fi et parking gratuits) doivent être confirmées par l'auberge.
- Aucun prix n'est affiché : ajoutez-les dans `chambres.html` si vous le souhaitez.
- Le formulaire ouvre l'email ou WhatsApp avec le message pré-rempli (pas de serveur nécessaire). Pour un envoi direct, utilisez Formspree ou Netlify Forms.

## Mettre sur GitHub et déployer (gratuit, GitHub Pages)
```bash
cd la-petite-gorge
git init
git add .
git commit -m "Site La Petite Gorge"
git branch -M main
git remote add origin https://github.com/VOTRE-COMPTE/la-petite-gorge.git
git push -u origin main
```
Puis sur GitHub : **Settings > Pages > Source : GitHub Actions**. Le workflow `.github/workflows/pages.yml` publie le site à chaque `git push`. L'adresse sera `https://VOTRE-COMPTE.github.io/la-petite-gorge/`.

Alternatives : glissez le dossier sur **app.netlify.com/drop**, ou importez le dépôt dans Vercel / Cloudflare Pages (aucun réglage, dossier racine `.`).
Pour un nom de domaine personnalisé, ajoutez-le dans Settings > Pages, puis mettez à jour `DOMAIN` dans les `canonical` et `sitemap.xml`.

## Structure
```
index.html  chambres.html  restaurant.html  decouvrir.html  galerie.html  contact.html
css/style.css   js/main.js   assets/img/   assets/favicon.svg
sitemap.xml  robots.txt  netlify.toml  .github/workflows/pages.yml
```
