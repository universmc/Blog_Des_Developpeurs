const OpenAI = require("openai");
const axios = require("axios");
const fs = require("fs");
const openai = new OpenAI();
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
    const fileName = `src/ban/image_${subject}_${getFormattedDate()}.webp`;
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
  const outputFilePath = `how-to_${subject}_${getFormattedDate()}.md`;
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
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link rel="stylesheet" href="src/css/chatbot.css">
        <link rel="stylesheet" href="src/css/style.css">
        <link rel="stylesheet" href="src/css/imgContent.css">
</head>
<body>
  <header>
  <nav class="nabar_intel">
  <div class="cms">
    <div class="0[💫]"><button class="btn picker" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">💫</button></div>
      <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
        News
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="./Public/pipeline.html">To-do-List</a></li>
        <li><a class="dropdown-item" href="../index.html">Actualité</a></li>
        <li><a class="dropdown-item" href="#">Recherche</a></li>
        <li><a class="dropdown-item" href="#">Présentation</a></li>
        <li><a class="dropdown-item" href="#">-------------</a></li>
        <li><a class="dropdown-item" href="index.html">Page</a></li>
        <li><a class="dropdown-item" href="#">Article</a></li>
      </ul>
      <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Blog
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="blog.html"> intelligence artificielle</a></li>
        <li><a class="dropdown-item" href="#"> Réalisé augmenté</a></li>
        <li><a class="dropdown-item" href="#"> Jeu vidéo</a></li>
        <li><a class="dropdown-item" href="#"> Médiamétrie</a></li>
        <li><a class="dropdown-item" href="#"> web 2.0</a></li>
        <li><a class="dropdown-item" href="#"> Cinéma</a></li>
        <li><a class="dropdown-item" href="#"> Géopolitique</a></li>
        <li><a class="dropdown-item" href="#"> Agriculture</a></li>
        <li><a class="dropdown-item" href="#"> Astronomy</a></li>
        <li><a class="dropdown-item" href="#"> Industrie</a></li>
        <li><a class="dropdown-item" href="#"> Justice</a></li>
      </ul>
      <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
        IA
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="model.html">OpenAi</a></li>
        <li><a class="dropdown-item" href="#">Gemini</a></li>
        <li><a class="dropdown-item" href="#">Meta</a></li>
        <li><a class="dropdown-item" href="#">Groq</a></li>
      </ul>
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
          HowTo
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="MachineLearning.html">Machine Learning</a></li>
          <li><a class="dropdown-item" href="#">Generate</a></li>
          <li><a class="dropdown-item" href="#">Compose</a></li>
          <li><a class="dropdown-item" href="#">Connect</a></li>
          <li><a class="dropdown-item" href="#">Encode</a></li>
          <li><a class="dropdown-item" href="#">Make</a></li>
        </ul>
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Projets
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="projets.html">RIC</a></li>
          <li><a class="dropdown-item" href="#">GPT-wallet</a></li>
          <li><a class="dropdown-item" href="#">Democratie 2.0</a></li>
          <li><a class="dropdown-item" href="#">Web 2.3</a></li>
        </ul>
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
          About mc
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="Story.html">Story</a></li>
          <li><a class="dropdown-item" href="#">Credits</a></li>
          <li><a class="dropdown-item" href="#">CVUN</a></li>
        </ul>
    <div class="9"><button type="button" class="btn btn-primary picker"><a href="../index.html">[<<]</a></button></div>
</div></nav>
</header>
  <!-- Modal 💬 -->

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal 💬</h1>
        </div>
        <div class="modal-body">
          <textarea id="prompt" rows="4" cols="50"></textarea>
          <button id="submit">Envoyer</button></div>
          <div id="result">
            <h3>🤗 :</h3>
            <p id="output"></p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

<!-- slidbar📔 -->
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div id="sommaire"></div>
    </div>
  </div>

<!-- Modal📔 -->
  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">[📔.CODEX]</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Mon Rôle :

            Facilitateur d'Interactions : Je suis conçu pour rendre votre expérience utilisateur aussi intuitive et agréable que possible. Que vous soyez un développeur chevronné ou un novice dans le monde de la cryptographie et de l'apprentissage automatique, je suis là pour vous guider.
            
            Educateur : À travers une série de documentations interactives et de tutoriels, je vous fournirai les connaissances nécessaires pour exploiter pleinement les capacités de DisKetCrypto.
            
            Pont entre l'Utilisateur et la Technologie : Je traduis vos commandes et requêtes en actions concrètes au sein de la plateforme, vous permettant ainsi de vous concentrer sur vos objectifs sans vous soucier des détails techniques.
            
            Mes Capacités :
            
            Traitement du Langage Naturel : Grâce à des modèles d'IA avancés, je comprends et interprète votre langage naturel, vous permettant de communiquer avec la plateforme de manière fluide.
            
            Apprentissage Continu : Je m'améliore constamment en apprenant de nos interactions, ce qui me permet de vous fournir des réponses et des solutions toujours plus pertinentes.
            
            Support Technique : Je suis équipé pour vous assister dans la résolution de problèmes techniques, vous guidant à travers les étapes de dépannage ou en vous fournissant des ressources utiles.
            
            Ma Vision :
            
            Je vise à devenir un compagnon indispensable dans votre parcours DisKetCrypto, en enrichissant votre expérience tout en simplifiant la complexité des technologies sous-jacentes. Ensemble, explorons les possibilités illimitées que DisKetCrypto a à offrir.
          </p> 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

<!-- Modal🌌 -->
    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">🌌 config</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
    </div>
<!-- Modal📚 -->
        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal 📚</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
        </div>
            <!-- Modal_4 -->
    <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal 4</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
    </div>
        <!-- Modal_🏗️ -->
        <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal 🏗️</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
        </div>
            <!-- Modal_✨ -->
    <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal ✨</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
    </div>
        <!-- Modal_💰 -->
        <div class="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal 💰</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
        </div>
      
      <main class="index">
        <div class="row1">

          <div class="1"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal">🤖</button></div>
          <div class="2"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal2">💬</button></div>
          <div class="3"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal3">🌌</button></div>
          <div class="4"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal4">📚</button>    </div>
          <div class="5"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal5">🏗️</button> </div>
          <div class="6"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal6">💰</button></div>
          <div class="7"><button type="button" class="btn btn-primary picker" data-bs-toggle="modal" data-bs-target="#exampleModal7">✨</button> </div>
    
        </div>
        <div class="mainContent">
  <div class="container">
    <div class="title">${title}</div>
    <div class="image-container">
      <img class="img" src="${imageFileName}" alt="${subject}">
    </div>
    <div class="description">
      <p><strong>Description:</strong> ${imagePrompts[subject]}</p>
    </div>
    <div class="how-to">
      <h2>How-To Guide</h2>
      <pre>${documentation}</pre>
    </div>
  </div>
      </div>
      </main>
    <footer>cc by mc, neoFS & Pi.ia</footer>
    <script src="src/js/completion.js"></script>
    <script src="src/js/pipeline.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</body>
</html>





  `;

  const htmlFileName = `output/${subject}_howto_${getFormattedDate()}.html`;
  fs.writeFileSync(htmlFileName, htmlContent);
  console.log(`HTML file for ${subject} saved as ${htmlFileName}`);
}

async function main() {
  const subject = process.argv[2] || 'website-wireframe';  // Par défaut, on génère un wireframe
  await generateHTML(subject);
}

main();
