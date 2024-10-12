const fs = require("fs");
const Groq = require('groq-sdk');
const { Telegraf } = require('telegraf');
const axios = require('axios');
const emoji = require('node-emoji');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const nodule = process.argv[2] || 'EcoSystem-_node_modules'; // Obtenir le sujet via l'argument de ligne de commande

const nodeJs = [
  "howto-nodule_groq-sdk",
  "howto-nodule_SVG",
  "howto-nodule_ThreeJs"
];

async function main() {
  for (const nodule of nodeJs) {
    try {
      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: "Phase 0: initialisation de `const nodule of nodeJs;`" },
          { role: "user", content: `Développer une série de How-To pour les nodules: ${nodeJs.join(', ')}` },
          { role: "assistant", content: `Imaginer un écosystème nodulaire (node_modules) ["howto-nodule_electron","howto-nodule_react","howto-nodule_next","howto-nodule_groq","howto-nodule_groq-sdk","howto-nodule_groq-mixtral-8x7b-32768","howto-nodule_node-Makefile"] avec intersections logiques et réseau neuronal.`},
          { role: "user", content: nodule }
        ],
        model: "gemma2-9b-it", // Modèle utilisé
        temperature: 0.6,
        max_tokens: 4096,
      });

      const mdContent = completion.choices[0]?.message?.content;
      const outputFilePath = `make_${nodule}_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";

      fs.writeFileSync(outputFilePath, mdContent);
      console.log(`Le How-To sur ${nodule} a été enregistré sur GitHub dans ${outputFilePath}`);
    } catch (error) {
      console.error(`Une erreur s'est produite lors de la génération pour le nodule ${nodule}:`, error);
    }
  }
}

main();
