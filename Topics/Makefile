# Makefile pour générer et gérer les sujets du blog

# Variables pour définir les chemins et fichiers de sortie
BUILD_DIR = build
MD_DIR = src/md
HTML_DIR = src/html

# Créer les dossiers nécessaires
.PHONY: init
init:
	mkdir -p $(BUILD_DIR) $(MD_DIR) $(HTML_DIR)

# Règles pour chaque sujet
.PHONY: News
News:
	@echo "Génération du sujet News"
	@node src/js/generator.js News

.PHONY: intelligence_artificielle
intelligence_artificielle:
	@echo "Génération du sujet Intelligence Artificielle"
	@node src/js/generator.js intelligence_artificielle
	mv $(BUILD_DIR)/intelligence_artificielle_wireframe.html $(HTML_DIR)/

.PHONY: Machine_learning
Machine_learning:
	@echo "Génération du sujet Machine Learning"
	@node src/js/generator.js Machine_learning
	@mv $(BUILD_DIR)/Machine_learning_wireframe.html $(HTML_DIR)/

.PHONY: Nouvelles_Technologie
Nouvelles_Technologie:
	@echo "Génération du sujet Nouvelles Technologies"
	@node src/js/generator.js Nouvelles_Technologie
	@mv $(BUILD_DIR)/Nouvelles_Technologie_wireframe.html $(HTML_DIR)/

.PHONY: Video_game
Video_game:
	@echo "Génération du sujet Video Game"
	@node src/js/generator.js Video_game
	@mv $(BUILD_DIR)/Video_game_wireframe.html $(HTML_DIR)/

.PHONY: Democratie_participative
Democratie_participative:
	@echo "Génération du sujet Démocratie Participative"
	@node src/js/generator.js Democratie_participative
	@mv $(BUILD_DIR)/Democratie_participative_wireframe.html $(HTML_DIR)/

.PHONY: Cinéma_box_office
Cinéma_box_office:
	@echo "Génération du sujet Cinéma Box Office"
	@node src/js/generator.js Cinéma_box_office
	@mv $(BUILD_DIR)/Cinéma_box_office_wireframe.html $(HTML_DIR)/

.PHONY: Agriculture
Agriculture:
	@echo "Génération du sujet Agriculture"
	@node src/js/generator.js Agriculture
	@mv $(BUILD_DIR)/Agriculture_wireframe.html $(HTML_DIR)/

.PHONY: Justice
Justice:
	@echo "Génération du sujet Justice"
	@node src/js/generator.js Justice
	@mv $(BUILD_DIR)/Justice_wireframe.html $(HTML_DIR)/

.PHONY: meta_Avatar
meta_Avatar:
	@echo "Génération du sujet Meta Avatar"
	@node src/js/generator.js meta_Avatar
	@mv $(BUILD_DIR)/meta_Avatar_wireframe.html $(HTML_DIR)/

.PHONY: Industrie
Industrie:
	@echo "Génération du sujet Industrie"
	@node src/js/generator.js Industrie
	@mv $(BUILD_DIR)/Industrie_wireframe.html $(HTML_DIR)/

.PHONY: univers_Crypto
univers_Crypto:
	@echo "Génération du sujet Univers Crypto"
	@node src/js/generator.js univers_Crypto
	@mv $(BUILD_DIR)/univers_Crypto_wireframe.html $(HTML_DIR)/

.PHONY: Google_for_Gemini
Google_for_Gemini:
	@echo "Génération du sujet Google for Gemini"
	@node src/js/generator.js Google_for_Gemini
	@mv $(BUILD_DIR)/Google_for_Gemini_wireframe.html $(HTML_DIR)/

# Nettoyer les fichiers générés
.PHONY: clean
clean:
	@rm -rf $(BUILD_DIR)/* $(HTML_DIR)/*
