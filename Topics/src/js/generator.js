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
async function generateImage(subject) {
  try {
    const prompt = config.imagePrompts[subject];
    if (!prompt) {
      console.error(`No prompt found for the subject: ${subject}`);
      return null;
    }

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1792x1024",
    });

    const imageUrl = response.data[0].url;
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const date = new Date().toISOString().split('T')[0];
    const fileName = `build/image_${subject}_${date}.webp`;
    fs.writeFileSync(fileName, imageResponse.data);

    console.log(`Image for ${subject} saved as ${fileName}`);
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

// Fonction pour générer dynamiquement une page HTML avec des données asynchrones
async function generateHTMLForTopic() {
    const topic = generateTopic(); // Sélection d'un sujet aléatoire

    // Générer l'image associée
    const imageFileName = await generateImage(topic.id);
    if (!imageFileName) {
        console.error("Failed to generate image. Aborting HTML generation.");
        return;
    }

    // Charger les sections à partir du fichier JSON
    fs.readFile('./pipeline.json', 'utf8', async (err, data) => {
        if (err) {
            console.error('Error reading pipeline.json:', err);
            return;
        }

        const sections = JSON.parse(data);
        let sectionsHtml = '';

        for (const [index, section] of sections.entries()) {
            let sousSectionsHtml = '';

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

        // Générer la page HTML complète
        const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${topic.title} - Wireframe</title>
    <link rel="stylesheet" href="src/css/style.css">
</head>
<body>
    <div class="container">
        <div class="title">${topic.title}</div>
        <div class="image-container">
            <img src="${imageFileName}" alt="${topic.title}">
        </div>
        <div class="description">
            <p><strong>Description :</strong> ${topic.description}</p>
        </div>
        <div class="content-sections">
            ${sectionsHtml}
        </div>
    </div>
</body>
</html>
        `;

        const fileName = `build/${topic.id}_wireframe.html`;
        fs.writeFileSync(fileName, htmlContent);
        console.log(`HTML generated and saved to ${fileName}`);
    });
}

// Lancer la génération
generateHTMLForTopic();
