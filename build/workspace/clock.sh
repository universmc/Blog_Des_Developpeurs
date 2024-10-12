# Définir la liste des emojis d'horloge
emojis=("🕐" "🕑" "🕒" "🕓" "🕔" "🕕" "🕖" "🕗" "🕘" "🕙" "🕚" "🕛" "🕜" "🕝" "🕞" "🕟" "🕠" "🕡" "🕢" "🕣" "🕤" "🕥" "🕦")

# Définir le timestamp de départ (en secondes)
timestamp_origine=$(date +%s)

# Boucle infinie pour mettre à jour le timestamp actuel et afficher l'horloge
while :; do
# Calculer le timestamp actuel en ajoutant 1 seconde au timestamp de départ
timestamp_actuel=$((timestamp_origine + $(date +%s)))

  # Déterminer l'index de l'emoji correspondant au timestamp actuel
index=$((timestamp_actuel % ${#emojis[@]}))

  # Afficher le timestamp actuel et l'emoji d'horloge correspondant
echo "🕛 $timestamp_actuel ${emojis[index]}"
# Attendre 1 seconde avant la prochaine itération
sleep 1
done
