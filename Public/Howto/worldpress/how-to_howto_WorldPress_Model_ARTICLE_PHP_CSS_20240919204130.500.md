## Comment créer un modèle d'article personnalisé avec WordPress

Ce guide vous aidera à comprendre et à réaliser un modèle d'article personnalisé avec WordPress, en utilisant PHP et CSS. Il est conçu pour les débutants et les utilisateurs intermédiaires qui souhaitent apprendre à contrôler l'affichage de leurs articles WordPress.

**Prérequis:**

* Un site WordPress fonctionnel.
* Connaissance de base de HTML, CSS et PHP.
* Accès à l'éditeur de code de votre thème WordPress.

**Étapes:**

1. **Créer un fichier PHP pour le modèle d'article:**

   * Accédez à la section "Thème" de votre panneau d'administration WordPress.
   * Cliquez sur "Modifier" pour ouvrir l'éditeur de code de votre thème.
   * Créez un nouveau fichier PHP nommé `single.php` dans le dossier `templates` de votre thème.

2. **Structurer le modèle d'article:**

   * Ouvrez le fichier `single.php` dans votre éditeur de texte.
   * Commencez par inclure le header de votre thème :

     ```php
     <?php get_header(); ?>
     ```

   * Ensuite, ajoutez la structure de base de votre article :

     ```php
     <article <?php post_class(); ?>>
         <header>
             <h1><?php the_title(); ?></h1>
             <?php the_date(); ?>
         </header>
         <div class="entry-content">
             <?php the_content(); ?>
         </div>
     </article>
     ```

3. **Personnaliser l'apparence de l'article:**

   * Utilisez CSS pour personnaliser l'apparence de votre modèle d'article.
   * Ajoutez des styles spécifiques à votre article dans le fichier `style.css` de votre thème.
   * Par exemple, vous pouvez modifier la taille de la police, la couleur du texte, l'espacement entre les lignes, etc.
   * Vous pouvez également utiliser des classes CSS pour cibler des éléments spécifiques de votre modèle d'article.

4. **Tester votre modèle d'article:**

   * Publiez un nouvel article sur votre site WordPress.
   * Vérifiez que l'article s'affiche correctement en utilisant votre modèle personnalisé.

**Conseils:**

* Utilisez des commentaires dans votre code PHP pour expliquer ce que chaque partie du code fait.
* Testez votre modèle d'article régulièrement pour vous assurer qu'il fonctionne correctement.
* N'hésitez pas à expérimenter avec différents styles CSS pour créer l'apparence souhaitée pour votre modèle d'article.

**Ressources supplémentaires:**

* [Documentation officielle de WordPress sur les modèles](https://developer.wordpress.org/themes/template-files-explained/)
* [Tutoriels WordPress sur la création de modèles personnalisés](https://www.wpbeginner.com/themes/how-to-create-a-custom-wordpress-theme/)
* [Forums WordPress pour obtenir de l'aide](https://wordpress.org/support/)



