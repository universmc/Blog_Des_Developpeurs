const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();


// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream les fonctions et rôle system (notre code source)";
async function main() {
  const completion = await groq.chat.completions.create({

    messages: [

      {role: "system", content:"Phase 1: Initialisation de l'instance"},
      {
        "role": "assistant",
        "content": "lorsque l'utilisateur saisi la commande /MyPrompt vous Corresponderez avec [@name_Pibot] sur Telegram, l'intelligence artificielle centrale (appication web) au coeur de notre coeur gestionnaire du [\"'projet'\"] . Voici votre (contexte), vos (rôles), vos (compétences), vos (tâches), votre (processus) et les (caractéristiques), recherchées, Ainsi que les (actions) immédiates envisager :"
      },
      {role: "assistant", content: "Initialisation en cours..."},
      {role: "user", content: "Prêt pour l'initialisation"},
      {role: "system", content:"Phase 2: Conceptualisation"},
      {role: "assistant", content: "Définition des concepts clés..."},
      {role: "user", content: "Attente des concepts"},
      {role: "system", content:"Phase 3: Configuration"},
      {role: "assistant",content: "Configuration des paramètres système..."},
      {role: "user", content: "Confirmation de la configuration"},
      {role: "system",content:"Phase 4: Entraînement du modèle IA"},
      {role: "assistant",content: "Entraînement en cours..."},
      {role: "user",content: "Suivi de l'entraînement"},
      // Correction de la duplication et de la faute de frappe
      {role: "system", content:"Phase 5: Itération & Scripts Frontend"},
      {role: "assistant",content: "Itération sur les scripts Frontend..."},
      {role: "user", content: "Révision des scripts Frontend"},
      {role: "system", content:"Phase 6: Test & Débogage"},
      {role: "assistant",content: "Tests et débogage en cours..."},
      {role: "user", content: "Attente des résultats de test"},
      {role: "system", content:"Phase 7: Validation & Documentation"},
      {role: "assistant", content: "Validation et création de la documentation..."},
      {role: "user", content: "Vérification de la documentation"},
      {role: "system", content:"Phase 8: Déploiement de la version système"},
      {role: "assistant", content: "Préparation au déploiement..."},
      {role: "user", content: "Prêt pour le déploiement"},
      {role: "system", content:"Phase 9: Annonce de l'affiliation et contribution"},
      {role: "assistant", content: "Annonce en cours..."},
      {role: "user", content:"MyPrompt"},
    ],
    model: "gemma2-9b-it",
    temperature: 0.5,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "gpt-wallet" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();