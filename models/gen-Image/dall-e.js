const OpenAI = require("openai");
const axios = require("axios");
const fs = require("fs");
const openai = new OpenAI();

const prompts = [
  "A sleek, modern representation of a cloud made of interconnected data points...",
  "A futuristic quantum computer core with glowing circuits and entangled particles...",
  "An abstract representation of machine learning, with neural networks evolving..."
];

async function generateImage(promptIndex) {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompts[promptIndex], // Utilise un prompt de la liste
      n: 1,
      size: "1792x1024",
    });

    const imageUrl = response.data[0].url;
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const date = new Date().toISOString().split('T')[0];
    const fileName = `output/image_${promptIndex}_${date}.webp`;
    fs.writeFileSync(fileName, imageResponse.data);
    console.log(`Image saved as ${fileName}`);
  } catch (error) {
    console.error("Error generating image:", error);
  }
}

generateImage(0); // Appel avec un prompt spécifique
