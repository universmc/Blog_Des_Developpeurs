const fs = require('fs');
const axios = require('axios');
const OpenAI = require("openai");
const openai = new OpenAI();
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const marked = require('marked'); // Librairie pour parser le Markdown
const generateTopic = require('./topics');
const config = require('./config');

const subject = process.argv[2] || 'wirefram_single_Page';

// Fonction pour générer des images avec OpenAI
async function generateImage(subject, index) {
  try {
    const prompt = config.imagePrompts[subject];
    if (!prompt) {
      console.error(`No prompt found for the subject: ${subject}`);
      return null;
    }

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `${prompt} (Image ${index + 1})`,
      n: 1,
      size: "1792x1024",
    });

    const imageUrl = response.data[0].url;
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const date = new Date().toISOString().split('T')[0];
    const fileName = `build/image_${subject}_${index + 1}_${date}.webp`;
    fs.writeFileSync(fileName, imageResponse.data);

    console.log(`Image ${index + 1} for ${subject} saved as ${fileName}`);
    return fileName;
  } catch (error) {
    console.error("Error generating or saving the image:", error);
    return null;
  }
}

// Fonction pour charger et convertir un fichier Markdown en HTML
async function loadMarkdownFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading Markdown file ${filePath}:`, err);
        reject(err);
      } else {
        const htmlContent = marked(data); // Convertir le Markdown en HTML
        resolve(htmlContent);
      }
    });
  });
}

// Fonction pour générer dynamiquement une page HTML avec un carrousel d'images
async function generateHTMLForTopic() {
    const topic = generateTopic(); // Sélection d'un sujet aléatoire

    // Charger les sections à partir du fichier JSON
    fs.readFile('./pipeline.json', 'utf8', async (err, data) => {
        if (err) {
            console.error('Error reading pipeline.json:', err);
            return;
        }

        const sections = JSON.parse(data);
        let sectionsHtml = '';
        let carouselHtml = '';
        let imageFiles = [];

        // Parcourir les sections pour générer une image pour chaque section
        for (const [index, section] of sections.entries()) {
            let sousSectionsHtml = '';

            // Générer une image pour chaque section
            const imageFileName = await generateImage(subject, index);
            if (imageFileName) {
                imageFiles.push(imageFileName);
            }

            // Parcourir les sous-sections et charger le contenu Markdown si disponible
            for (const sousSection of section.sousSections) {
                let contenuHtml = '';

                if (sousSection.contenuMarkdown) {
                    // Charger et convertir le fichier Markdown
                    contenuHtml = await loadMarkdownFile(sousSection.contenuMarkdown);
                } else {
                    contenuHtml = sousSection.contenu || '';
                }

                sousSectionsHtml += `
                    <div class="sous-section">
                        <h3>${sousSection.sousTitre}</h3>
                        <div>${contenuHtml}</div>
                    </div>`;
            }

            sectionsHtml += `
                <div id="section${index}" class="section">
                    <h2>${section.titre}</h2>
                    ${sousSectionsHtml}
                </div>`;
        }

        // Générer le HTML du carrousel d'images
        imageFiles.forEach((fileName, index) => {
            carouselHtml += `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${fileName}" alt="Image ${index + 1}" class="d-block w-100">
                </div>`;
        });

        // Générer la page HTML complète
        const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${topic.title} - Wireframe</title>
    <link rel="stylesheet" href="src/css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.3/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <div class="title">${topic.title}</div>

        <!-- Carrousel d'images -->
        <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                ${carouselHtml}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="description">
            <p><strong>Description :</strong> ${topic.description}</p>
        </div>
        <div class="content-sections">
            ${sectionsHtml}
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
        `;

        const fileName = `build/${topic.id}_wireframe.html`;
        fs.writeFileSync(fileName, htmlContent);
        console.log(`HTML with carousel generated and saved to ${fileName}`);
    });
}

// Lancer la génération
generateHTMLForTopic();
