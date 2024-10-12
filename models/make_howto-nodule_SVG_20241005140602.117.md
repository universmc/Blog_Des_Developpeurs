## Howto-Nodule_SVG: Un guide pour utiliser SVG avec Node.js

Ce guide vous montre comment utiliser les fichiers SVG (Scalable Vector Graphics) dans vos projets Node.js.

**Prérequis:**

* Node.js et npm installés sur votre machine.
* Une compréhension de base des fichiers SVG.

**1. Installation du module SVG:**

Le module `svg` est un excellent choix pour manipuler les fichiers SVG en Node.js.

```bash
npm install svg
```

**2. Charger et manipuler un SVG:**

```javascript
const svg = require('svg');

// Charger un fichier SVG
svg.load('path/to/your/svg.svg', (err, svgDoc) => {
  if (err) {
    console.error(err);
    return;
  }

  // Accéder aux éléments SVG
  const circle = svgDoc.querySelector('circle');
  console.log(circle); // Accéder aux attributs et propriétés

  // Modifier les attributs d'un élément
  circle.setAttribute('fill', 'red');

  // Ajouter un nouveau nœud
  const newRect = svgDoc.createElement('rect');
  newRect.setAttribute('x', 100);
  newRect.setAttribute('y', 100);
  newRect.setAttribute('width', 50);
  newRect.setAttribute('height', 50);
  svgDoc.appendChild(newRect);

  // Convertir le SVG en chaîne de caractères
  const svgString = svgDoc.outerHTML();
  console.log(svgString);

  // Enregistrer le SVG modifié
  svg.save('path/to/new_svg.svg', svgDoc);
});
```

**3. Utiliser SVG avec d'autres modules:**

Vous pouvez utiliser le module `svg` avec d'autres modules pour des tâches plus complexes, comme:

* **Dessiner des graphiques:** Combinez `svg` avec des bibliothèques de données comme `chart.js` pour créer des graphiques SVG dynamiques.
* **Générer des images SVG personnalisées:** Utilisez `svg` pour générer des images SVG à partir de données, par exemple pour créer des icônes ou des logos dynamiques.
* **Intégrer des SVG dans des applications web:** Utilisez `svg` pour créer des composants SVG que vous pouvez intégrer dans des applications web Node.js avec une framework comme Express.js.

**Ressources supplémentaires:**

* **Documentation du module `svg`:** https://www.npmjs.com/package/svg
* **Tutoriels SVG:** https://developer.mozilla.org/fr/docs/Web/SVG




