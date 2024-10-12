// Fonction pour afficher la chronique en HTML
function displayChronique(
) {
  // Charger les données du script pilote JSON
fetch('script_pilote.json')
    .then(response => response.json())
    .then(data => {
      // Récupérer les sections et les articles
const sections = data.chronique.sections;
      const articles = sections.map(section => section.articles);

      // Créer la structure HTML de la chronique
let chroniqueHTML = '<h1>' + data.chronique.title + '</h1>';

      sections.forEach(section => {
        chroniqueHTML += '<h2>' + section.title + '</h2>';

        section.articles.forEach(article => {
          chroniqueHTML += '<h3>' + article.title + '</h3>';
          chroniqueHTML += '<p>' + article.action + '</p>';
        });
      });

      // Afficher la chronique sur la page HTML
const chroniqueDiv = document.getElementById('chronique');
      chroniqueDiv.innerHTML = chroniqueHTML;
    });
}

// Appeler la fonction pour afficher la chronique
displayChronique();
