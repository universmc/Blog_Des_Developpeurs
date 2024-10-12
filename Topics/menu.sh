#!/bin/bash

# Fonction pour générer un nombre aléatoire de 75 chiffres
# Affichage de l'heure et du mode de développement
echo "💻$(date "+%H:%M:%S") /dev mode"

titre() {  
    echo "         ╔═══════════════════════════════════════════════════════════╗";
    echo "         ║               _                                           ║";
    echo "         ║   _   _ _ __ (_)_   _____ _ __ ___       _ __ ___   ___   ║";
    echo "         ║  | | | | '_ \| \ \ / / _ \ '__/ __|_____| '_ ' _' \| __|  ║";
    echo "         ║  | |_| | | | | |\ V /  __/ |  \__ \_____| | | | | | (__   ║";
    echo "         ║   \__,_|_| |_|_| \_/ \___|_|  |___/     |_| |_| |_|\___|  ║";
    echo "         ║                                                           ║";
    echo "         ╚═══════════════════════════════════════════════════════════╝";
    echo ""; 
}

# Définition de la fonction 'menu' pour afficher le menu avec les options:

menu() {
    echo ""
    echo "   ╔═════════════════════════════════════════╗    ╔════════════════════════════════════════════════════════════════════════════════════╗";
    echo "   ╠─────────────{ ✨ Blog }─────────────────╣    ║  [💫] [✨] [📚] [🌌] [💬] [∏] [💰] [🌴] [📱] [📡]<                          >[🛰]    ║";
    echo "   ║                                         ║    ╠────────────────────────────────────────────────────────────────────────────────────╣";
    echo "   ║ Sélectionner un sujet à développer :    ║    ║                                                                                    ║";
    echo "   ║ 1) News                                 ║    ║                                                                                    ║";
    echo "   ║ 2) intelligence_artificielle            ║    ║                                                                                    ║";
    echo "   ║ 3) Machine_learning                     ║    ║                                                                                    ║";
    echo "   ║ 4) Nouvelles_Technologie                ║    ║                                                                                    ║";
    echo "   ║ 5) Video_game                           ║    ║                                                                                    ║";
    echo "   ║ 6) Democratie_participative             ║    ║                                                                                    ║";
    echo "   ║ 7) Cinéma_box_office                    ║    ║                                                                                    ║";
    echo "   ║ 8) Agriculture                          ║    ║                                                                                    ║";
    echo "   ║ 9) Justice                              ║    ║                                                                                    ║";
    echo "   ║ 10) meta_Avatar                         ║    ║                                                                                    ║";
    echo "   ║ 11) Industrie                           ║    ║                                                                                    ║";
    echo "   ║ 12) univers_Crypto                      ║    ║                                                                                    ║";
    echo "   ║ 13) Google_for_Gemini                   ║    ║                                                                                    ║";
    echo "   ║                                         ║    ║                                                                                    ║";
    echo "   ║                                         ║    ║                                                                                    ║";
    echo "   ╠═════════════════════════════════════════╣    ╠════════════════════════════════════════════════════════════════════════════════════╣";
    echo "   ║(((∏)                                    ║    ║🌴.✨]:                                                                        / 📡> ║";
    echo "   ╚═════════════════════════════════════════╝    ╚════════════════════════════════════════════════════════════════════════════════════╝"; 
    echo ""

    read -p "Sélectionnez un sujet : " choix

    case $choix in
        1)
            sujet="News"
            ;;
        2)
            sujet="intelligence_artificielle"
            ;;
        3)
            sujet="Machine_learning"
            ;;
        4)
            sujet="Nouvelles_Technologie"
            ;;
        5)
            sujet="Video_game"
            ;;
        6)
            sujet="Democratie_participative"
            ;;
        7)
            sujet="Cinéma_box_office"
            ;;
        8)
            sujet="Agriculture"
            ;;
        9)
            sujet="Justice"
            ;;
        10)
            sujet="meta_Avatar"
            ;;
        11)
            sujet="Industrie"
            ;;
        12)
            sujet="univers_Crypto"
            ;;
        13)
            sujet="Google_for_Gemini"
            ;;
        r)
            clear
            menu
            ;;
        *)
            echo "Entrée invalide"
            menu
            ;;
    esac

    # Exécution du make avec le sujet sélectionné
    make $sujet
}

# Appel de la fonction pour afficher le titre et le menu
titre
menu
