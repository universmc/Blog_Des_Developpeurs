<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" />
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body>
<header>
<nav class="navbar">
    <ul class="main-menu">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Blog</a></li>
        <li class="dropdown">
            <a href="#">Services</a>
            <ul class="dropdown-menu">
                <li><a href="#">Développement Web</a></li>
                <li><a href="#">Machine Learning</a></li>
                <li><a href="#">Intelligence Artificielle</a></li>
            </ul>
        </li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'navBar', // Emplacement de menu
                    'container' => false,
                    'menu_class' => 'navbar-nav ms-auto', // Classe pour le menu
                    'fallback_cb' => false
                ));
                ?>
            </div>
        </div>
    </nav>
</header>
