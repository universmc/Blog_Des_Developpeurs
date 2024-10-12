#!/bin/bash

# Fonction pour générer un nombre aléatoire de 75 chiffres
generate_random_number() {
    # Utilise `od` pour générer des données aléatoires et `tr` pour garder seulement les chiffres
    random_number=$(od -An -N38 -tu4 /dev/urandom | tr -d ' \n' | cut -c1-81)
    echo "$random_number"
}
# Durée totale de l'affichage (68 secondes) et l'intervalle d'affichage (1 seconde)
total_duration=36942
interval=0,1

# Calculer le nombre de boucles nécessaires
iterations=$((total_duration / interval))

# Boucle de génération pour la durée totale de 68 secondes
for ((i = 1; i <= iterations; i++)); do
    random_number=$(generate_random_number) # Génère un nombre aléatoire de 75 chiffres

    # Affiche le nombre sur la même ligne
    echo -ne "\r✨ : $random_number : ✨"

    #  sleep $interval # Pause de 1 seconde avant de générer le prochain nombre
done


# Ajouter un saut de ligne à la fin pour proprement terminer l'affichage
echo