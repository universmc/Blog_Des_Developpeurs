## Howto: utiliser Three.js avec Node.js

Ce guide vous montre comment utiliser le moteur de rendu 3D Three.js avec Node.js pour créer des applications immersives. 

**Prérequis:**

* Node.js et npm (ou yarn) installés.
* Connaissance de base du JavaScript.

**Etapes:**

1. **Création du projet:**

   ```bash
   npm init -y
   ```

2. **Installation de Three.js:**

   ```bash
   npm install three
   ```

3. **Création d'un fichier JavaScript (ex: app.js):**

   ```javascript
   const THREE = require('three');

   // Création de la scène
   const scene = new THREE.Scene();

   // Création de la caméra
   const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

   // Création du renderer
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize( window.innerWidth, window.innerHeight );
   document.body.appendChild( renderer.domElement );

   // Création d'un cube
   const geometry = new THREE.BoxGeometry( 1, 1, 1 );
   const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
   const cube = new THREE.Mesh( geometry, material );
   scene.add( cube );

   // Positionnement de la caméra
   camera.position.z = 5;

   // Boucle d'animation
   function animate() {
       requestAnimationFrame( animate );

       cube.rotation.x += 0.01;
       cube.rotation.y += 0.01;

       renderer.render( scene, camera );
   }

   animate();
   ```

4. **Exécution du projet:**

  ```bash
  node app.js
  ```

**Explication du code:**

* **Importation de Three.js:** `const THREE = require('three');`

* **Création de la scène, de la caméra et du renderer:** Ces objets sont les éléments fondamentaux de l'environnement 3D.

* **Création du cube:** Un cube est créé avec des géométrie et un matériau.

* **Ajout du cube à la scène:** Le cube est ajouté à la scène pour qu'il soit visible.

* **Positionnement de la caméra:** La caméra est déplacée pour obtenir une vue du cube.

* **Boucle d'animation:** Cette boucle appelle `requestAnimationFrame` pour créer une animation fluide du cube en rotation.

* **Affichage du rendu:** `renderer.render` dessine la scène depuis la perspective de la caméra.

**Développement ultérieur:**

* **Ajouter des lumières:** Utilisez `THREE.DirectionalLight` ou `THREE.PointLight` pour éclairer la scène.
* **Créer des objets 3D personnalisés:** Utilisez des modèles 3D importés ou créez vos propres géométries.
* **Intégrer des interactions utilisateur:** Détectez les clics, les déplacements de la souris et les touches du clavier pour créer des applications interactives.
* **Utiliser des effets spéciaux:** Explorez les options de post-traitement et d'effets spéciaux pour enrichir votre application.

**Ressources:**

* **Documentation officielle de Three.js:** [https://threejs.org/](https://threejs.org/)
* **Tutoriels et exemples:** [https://threejs.org/docs/#examples](https://threejs.org/docs/#examples)

N'hésitez pas à explorer et à expérimenter avec Three.js pour créer des applications 3D impressionnantes avec Node.js.



