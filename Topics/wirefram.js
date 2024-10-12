const fs = require('fs');
const axios = require('axios');
const OpenAI = require("openai");
const openai = new OpenAI();
const generateTopic = require('./src/js/topics');
const config = require('./src/js/config'); // Module de configuration qui stocke les prompts et le format HTML

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

// Fonction pour générer l'interface HTML pour un wireframe donné
async function generateHTMLForTopic() {
    const topic = generateTopic(); // Sélection d'un sujet aléatoire à partir du générateur de sujets
    
    // Générer l'image associée au sujet
    const imageFileName = await generateImage(topic.id);
    if (!imageFileName) {
        console.error("Failed to generate image. Aborting HTML generation.");
        return;
    }

    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${topic.title} - Wireframe</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .title { font-size: 24px; font-weight: bold; margin-bottom: 20px; }
        .image-container { text-align: center; margin-bottom: 20px; }
        img { max-width: 100%; height: auto; }
        .description { font-size: 16px; line-height: 1.5; }
        .how-to { background-color: #f0f0f0; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    </style>
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
        <div class="how-to">
            <h2>Guide How-To</h2>
            <p>${config.documentationPrompts[`how_to_${topic.id}`]}</p>
        </div>
    </div>
</body>
</html>
    `;

    const fileName = `build/${topic.id}_wireframe.html`;
    fs.writeFileSync(fileName, htmlContent);
    console.log(`HTML generated and saved to ${fileName}`);
}

// Exportation de la fonction
module.exports = generateHTMLForTopic;
