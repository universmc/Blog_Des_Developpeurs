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

  # Afficher l'emoji d'horloge correspondant et le timestamp
  if [ $index -lt 12 ]; then
    printf "\r${emojis[index]} $(date -d @$timestamp_actuel "+%T")"
  elif [ $index -ge 12 ] && [ $index -lt 24 ]; then
    emoji_de_remplacement="🕔"
    if [ $index -eq 12 ]; then
      emoji_de_remplacement="🕛"
    fi
    printf "\r${emojis[index]} $(date -d @$timestamp_actuel "+%T") ${emoji_de_remplacement}"
  else
    printf "\r${emojis[index]} $(date -d @$timestamp_actuel "+%T")"
  fi

  # Attendre 1 seconde avant la prochaine itération
  sleep 1
done