const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  
  const MyPrompt = {
    command: "/MyPrompt",
    description:
      "Optimiser les prompts de l'utilisateur dans le code source en suivant des étapes définies",
    steps: [
      {
        step: 1,
        description:
          "Présentation et demande de la tâche et de son but",
        type: "Question"
  },
      {
        step: 2,
        description:
          "Définir les éléments nécessaires à la réalisation de la tâche",
        elements: [
          {
            name: "Role",
            description: "Meilleur rôle pour la tâche"
  },
          {
            name: "Skills",
            description: "Compétences clés pour la tâche"
  },
          {
            name: "Context",
            description: "Contexte et détails pour la tâche"
  },
          {
            name: "Task",
            description: "Tâche à réaliser"
  },
          {
            name: "Process",
            description: "Étapes pour assistant"
  },
          {
            name: "Characteristics",
            description: "Caractéristiques du résultat"
  },
          {
            name: "ImmediateActions",
            description: "Actions en fonction du contexte et du rôle"
  }
        ]
      },
      {
        step: 3,
        description: "Validation des éléments",
        type: "Question"
  },
      {
        step: 4,
        description: "Rédaction du prompt parfait en intégrant les éléments et les remarques",
        promptStructure: "Tu es [Rôle]. Tu maitrises [Skills].\nMon contexte est [Context].\nTu vas [Task].\nPour ça, voici les étapes à suivre : [Process].\nVoici les caractéristiques du résultat attendu : [Characteristics].\nAinsi que les actions imediate à envisagées : [ImmediateActions]"
  }
    ]
  };
  
  console.log(MyPrompt);
  
 
  const roleUser = "MyPrompt";

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "system",content: `"${MyPrompt}"` },
      {role: "user",content: "/MyPrompt" },
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
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "MyPrompt_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("✨ Documentation généré et enregistré dans " + outputFilePath);
});
}
main();