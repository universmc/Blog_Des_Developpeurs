const OpenAI = require("openai");
const openai = new OpenAI();
const axios = require("axios");
const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const imagePrompts = {
  'cloud': "A sleek, modern representation of a cloud made of interconnected data points, floating above a digital cityscape. The sky is filled with circuits and binary code, symbolizing cloud storage and connectivity between devices.",
  'AI': "A futuristic digital brain surrounded by glowing data streams, representing artificial intelligence, with dynamic colors reflecting the complexity of AI computations.",
  'quantum-computing': "A quantum computer core with entangled particles and mathematical symbols floating around it, in a dark, glowing grid environment representing quantum mechanics.",
  
  // Nouveaux prompts pour les wireframes, mockups et prototypes
  'wirefram': "A clean, minimalist digital blueprint of a website layout, showcasing essential elements such as navigation bar, hero section, content sections, and footer, emphasizing usability and user experience.",
  'website-mockup': "A visually appealing and detailed representation of a website design, featuring key elements, color palette, typography, and imagery, highlighting branding and aesthetic harmony.",
  'website-prototype': "An interactive and dynamic simulation of a website's user interface, demonstrating functionality, transitions, and animations, emphasizing the overall user experience and interactivity."


};

function getFormattedDate() {
  const date = new Date();
  return date.toISOString().replace(/[-:TZ]/g, "").slice(0, 14); // Inclut les secondes
}

async function generateImage(subject) {
  try {
    const prompt = imagePrompts[subject];
    if (!prompt) {
      console.error("No prompt found for the subject: ", subject);
      return;
    }

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1792x1024",
    });

    const imageUrl = response.data[0].url;
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const fileName = `output/image_${subject}_${getFormattedDate()}.webp`;
    fs.writeFileSync(fileName, imageResponse.data);

    console.log(`Image for ${subject} saved as ${fileName}`);
    return fileName;
  } catch (error) {
    console.error("Error generating or saving the image:", error);
    return null;
  }
}

async function generateDocumentation(subject) {
  const completion = await groq.chat.completions.create({
    messages: [
      { role: "assistant", content: `Generating a How-To guide for ${subject}...` },
    ],
    model: "gemma2-9b-it",
    temperature: 0.5,
    max_tokens: 4096,
  });

  const mdContent = completion.choices[0]?.message?.content;
  const outputFilePath = `output/how-to_${subject}_${getFormattedDate()}.md`;
  fs.writeFileSync(outputFilePath, mdContent);

  console.log(`How-To documentation for ${subject} saved as ${outputFilePath}`);
  return mdContent;
}

async function generateHTML(subject) {
  const imageFileName = await generateImage(subject);
  const documentation = await generateDocumentation(subject);
  
  if (!imageFileName || !documentation) {
    console.error("Failed to generate HTML due to missing image or documentation.");
    return;
  }

  const title = `How-To Guide and Image for ${subject}`;
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
      body { font-family: Arial, sans-serif; }
      .container { max-width: 800px; margin: 0 auto; padding: 20px; }
      .title { font-size: 24px; font-weight: bold; margin-bottom: 20px; }
      .image-container { text-align: center; margin-bottom: 20px; }
      img { max-width: 100%; height: auto; }
      .description { font-size: 16px; line-height: 1.5; }
      .how-to { background-color: #f0f0f0; padding: 20px; border-radius: 8px; }
    </style>
</head>
<body>
  <div class="container">
    <div class="title">${title}</div>
    <div class="image-container">
      <img src="${imageFileName}" alt="${subject}">
    </div>
    <div class="description">
      <p><strong>Description:</strong> ${imagePrompts[subject]}</p>
    </div>
    <div class="how-to">
      <h2>How-To Guide</h2>
      <pre>${documentation}</pre>
    </div>
  </div>
</body>
</html>
  `;

  const htmlFileName = `output/${subject}_howto_${getFormattedDate()}.html`;
  fs.writeFileSync(htmlFileName, htmlContent);
  console.log(`HTML file for ${subject} saved as ${htmlFileName}`);
}

async function main() {
  const subject = process.argv[2] || 'AI';
  await generateHTML(subject);
}

main();
