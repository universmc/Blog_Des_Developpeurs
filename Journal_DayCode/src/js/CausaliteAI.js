const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {

  function templateResponse(question, options, consequences, nextQuestions, causes, effects) {
    return {
      response: {
        question: question,
        answer: {
          text: "Les possibilités sont multiples.",
          quick_replies: options
        },
        decision_tree: options.reduce((acc, option, index) => {
          acc[`Option ${index + 1}`] = {
            consequences: consequences[index],
            next_questions: nextQuestions[index],
            causes: causes[index],
            effects: effects[index]
          };
          return acc;
        }, {})
      }
    };
  }
  
  // Exemple d'utilisation
  const question = "Quelle est la meilleure façon de procéder pour trouver la vérité ?";
  const options = [
    "Interroger le membre du parti politique",
    "Rechercher des preuves pour étayer les accusations",
    "Consulter un expert en fraude électorale"
  ];
  const consequences = [
    "Vous aurez une conversation avec le membre du parti politique, qui pourrait être honnête ou tenter de vous duper.",
    "Vous partirez à la recherche de preuves pour étayer les accusations de fraude.",
    "Vous consulter un expert en fraude électorale pour avoir une perspective professionnelle sur la situation."
  ];
  const nextQuestions = [
    ["Ses réponses sont-elles crédibles ?", "Avez-vous besoin de poursuivre votre enquête ?"],
    ["Les preuves que vous trouvez sont-elles suffisantes pour étayer les accusations ?"],
    ["Le consultant vous donne des conseils pour poursuivre votre enquête. Souhaitez-vous les suivre ?"]
  ];
  const causes = [
    "Un membre du parti politique a été accusé de fraude électorale",
    "Des allégations de fraude électorale ont été portées à votre attention",
    "Vous avez besoin d'un avis professionnel pour poursuivre votre enquête"
  ];
  const effects = [
    ["Vous obtenez des informations qui pourraient être vraies ou fausses", "Le membre du parti politique pourrait devenir plus prudent dans ses actions futures"],
    ["Vous découvrez des preuves importantes qui peuvent aider à étayer les accusations", "Vous pouvez risquer de vous faire remarquer par les personnes impliquées dans la fraude"],
    ["Vous recevez un avis professionnel pour vous guider dans votre enquête", "Vous devrez peut-être payer pour les services du consultant"]
  ];
  
  const response = templateResponse(question, options, consequences, nextQuestions, causes, effects);
  console.log(response);
  

  const completion = await groq.chat.completions.create({

    messages: [

      {role: "assistant", content:"Phase 1: Initialisation de l'instance"},
      {
        "role": "system",
        "content": "code source mirroir :"
      },
      {role: "assistant", content:`
          function templateResponse(question, options, consequences, nextQuestions, causes, effects) {
    return {
      response: {
        question: question,
        answer: {
          text: "Les possibilités sont multiples.",
          quick_replies: options
        },
        decision_tree: options.reduce((acc, option, index) => {
          acc['Option {index + 1}'] = {
            consequences: consequences[index],
            next_questions: nextQuestions[index],
            causes: causes[index],
            effects: effects[index]
          };
          return acc;
        }, {})
      }
    };
  }
  
  // Exemple d'utilisation
  const question = "Quelle est la meilleure façon de procéder pour trouver la vérité ?";
  const options = [
    "Interroger le membre du parti politique",
    "Rechercher des preuves pour étayer les accusations",
    "Consulter un expert en fraude électorale"
  ];
  const consequences = [
    "Vous aurez une conversation avec le membre du parti politique, qui pourrait être honnête ou tenter de vous duper.",
    "Vous partirez à la recherche de preuves pour étayer les accusations de fraude.",
    "Vous consulter un expert en fraude électorale pour avoir une perspective professionnelle sur la situation."
  ];
  const nextQuestions = [
    ["Ses réponses sont-elles crédibles ?", "Avez-vous besoin de poursuivre votre enquête ?"],
    ["Les preuves que vous trouvez sont-elles suffisantes pour étayer les accusations ?"],
    ["Le consultant vous donne des conseils pour poursuivre votre enquête. Souhaitez-vous les suivre ?"]
  ];
  const causes = [
    "Un membre du parti politique a été accusé de fraude électorale",
    "Des allégations de fraude électorale ont été portées à votre attention",
    "Vous avez besoin d'un avis professionnel pour poursuivre votre enquête"
  ];
  const effects = [
    ["Vous obtenez des informations qui pourraient être vraies ou fausses", "Le membre du parti politique pourrait devenir plus prudent dans ses actions futures"],
    ["Vous découvrez des preuves importantes qui peuvent aider à étayer les accusations", "Vous pouvez risquer de vous faire remarquer par les personnes impliquées dans la fraude"],
    ["Vous recevez un avis professionnel pour vous guider dans votre enquête", "Vous devrez peut-être payer pour les services du consultant"]
  ];
  
  const response = templateResponse(question, options, consequences, nextQuestions, causes, effects);

  `},
 {role: "user", name:"umcTokens", content: "Le code définit une fonction `templateResponse` qui génère une structure de réponse le script en cours de developpement"},
  {role: "system", name:"systemDream", content:"Phase 2: Conceptualisation : de l'enqueste"},
 {role: "assistant", name:"✨_pi", content: "rôle de l'assistant dans la QUESTION template du témoin d'énonçant, les suspicions, les accusations, nous fraude électorale, les escroquerie à la finance en Bande organisée concernant un certain nombre de politique inscrit à la commission nationale des de campagne et des financements politique"},
 {role: "user", name:"umcTokens", content: "itération, Recherche, analyse des documents de preuve sur `https://archive.org l'insee, https://cnccfp.fr, et https://github.com/universmc/Chronique_EMP`"},
  {role: "system", name:"systemDream", content:" Scraping en cours"},
 // {role: "system", name:"systemDream", content:"Phase 3: Scraping en cours"},
    //  {role: "assistant", name:"✨_pi", content: "Configuration des paramètres système..."},
    //  {role: "user", name:"umcTokens", content: "Confirmation de la configuration"},
    //  {role: "system", name:"systemDream", content:"Phase 4: Entraînement du modèle IA"},
    //  {role: "assistant", name:"✨_pi", content: "Entraînement en cours..."},
    //  {role: "user", name:"umcTokens", content: "Suivi de l'entraînement"},
    //  // Correction de la duplication et de la faute de frappe
    //  {role: "system", name:"systemDream", content:"Phase 5: Itération & Scripts Frontend"},
    //  {role: "assistant", name:"✨_pi", content: "Itération sur les scripts Frontend..."},
    //  {role: "user", name:"umcTokens", content: "Révision des scripts Frontend"},
    //  {role: "system", name:"systemDream", content:"Phase 6: Test & Débogage"},
    //  {role: "assistant", name:"✨_pi", content: "Tests et débogage en cours..."},
    //  {role: "user", name:"umcTokens", content: "Attente des résultats de test"},
    //  {role: "system", name:"systemDream", content:"Phase 7: Validation & Documentation"},
    //  {role: "assistant", name:"✨_pi", content: "Validation et création de la documentation..."},
    //  {role: "user", name:"umcTokens", content: "Vérification de la documentation"},
    //  {role: "system", name:"systemDream", content:"Phase 8: Déploiement de la version système"},
    //  {role: "assistant", name:"✨_pi", content: "Préparation au déploiement..."},
    //  {role: "user", name:"umcTokens", content: "Prêt pour le déploiement"},
    //  {role: "system", name:"systemDream", content:"Phase 9: Annonce de l'affiliation et contribution"},
    //  {role: "assistant", name:"✨_pi", content: "Annonce en cours..."},
    //  {role: "user", name:"umcTokens", content: "Participation à l'annonce"},
    ],
    model: "gemma2-9b-it",
    temperature: 0.7,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "MyPrompt" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();
