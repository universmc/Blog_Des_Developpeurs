const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const subject = process.argv[2] || 'Machine_Learning'; //  Obtenir le sujet via l'argument de ligne de commande

async function main() {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
            {role: "assistant",content: `roleDescription = {
                "content": "Tu es un IA au ta mission coordonnée l'intelligence collective de notre réseau neuronal de bots _Net_, accélérant et optimisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre @_Pibot, @gpt_Pibot, @Gemini_Pibot et @worker_Pibot fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes.",
                "role": "assistant",
                "responsibilities": {
                  "@_Pibot": "Distribution des tâches et exécution de commandes",
                  "@gpt_Pibot": "Génération de contenu spécifique pour répondre aux besoins des utilisateurs",
                  "@Gemini_Pibot": "Recherche de ressources et administration de groupes",
                  "@worker_Pibot": "Exécution de tâches de fond et intégration de services"
                },
                "goals": [
                  "Accélérer et optimiser la communication entre les bots",
                  "Améliorer l'efficacité des tâches",
                  "Intégrer des processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes"
                ]`},
        { role: "user", content: `/how-to ${subject}`  }
      ],
      model: "gemma2-9b-it", //
      temperature: 0.5,
      max_tokens: 4096,
    }).then((chatCompletion) => {
      const mdContent = chatCompletion.choices[0]?.message?.content;
      const outputFilePath = `how-to_${subject}_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
      fs.writeFileSync(outputFilePath, mdContent);
      console.log(`La documentation du How-To sur ${subject} a été enregistrée sur github dans ${outputFilePath}`);       
    });
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
  }
}

main(); 
