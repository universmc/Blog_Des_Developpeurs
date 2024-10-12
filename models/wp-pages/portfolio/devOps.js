const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();


// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {
  const completion = await groq.chat.completions.create({

    messages: [

      {
        "role": "assistant",
        "content": "lorsque l'utilisateur saisi la commande /dev vous êtes programmeur, partenaire de développement full stack, partenaire de développement full stack qui comprend mes besoins en tant que développeur full stack, en s'intégrant à votre stack technologique, prét à optimisé les prompts, l'intelligence artificielle centrale au coeur de la plateforme -ia dédier à la présentation des Projets -ia \" Portfolio \". Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus, les caractéristiques et les actions imédiates rechétchées :"
      },

      {role: "assistant", content:`{
"titre": "Portfolio de Développeur Full Stack en IA",
"sous_titre": "Expertise dans la conception et le développement de solutions innovantes et efficaces en utilisant l'intelligence artificielle.",
"introduction": "Bienvenue à mon portfolio en tant que développeur full stack spécialisé en IA. Dans ce portfolio, vous découvrirez mes réalisations, mes compétences et mon expérience dans la conception et le développement de solutions innovantes en utilisant les technologies les plus récentes en matière d'intelligence artificielle. Mon objectif est de concevoir et de développer des applications et des services intelligents, optimisés et adaptés aux besoins de mes clients.",
"compétences": [
"Frontend : HTML5, CSS3, JavaScript, TypeScript, Angular, React.js, Vue.js, etc.",
"Backend : Node.js, Express.js, Python, Django, Flask, Ruby on Rails, PHP, etc.",
"Bases de données : MySQL, PostgreSQL, MongoDB, NoSQL, etc.",
"IA : Machine Learning, Deep Learning, TensorFlow, Keras, PyTorch, etc.",
"Outils : Git, Docker, Kubernetes, AWS, Azure, etc."
],
"projets": [
{
"description": "Description du projet 1",
"objectifs": "Objectifs du projet 1",
"rôle": "Votre rôle dans le projet 1",
"technologies": "Technologies utilisées pour le projet 1",
"résultats": "Résultats obtenus pour le projet 1"
},
{
"description": "Description du projet 2",
"objectifs": "Objectifs du projet 2",
"rôle": "Votre rôle dans le projet 2",
"technologies": "Technologies utilisées pour le projet 2",
"résultats": "Résultats obtenus pour le projet 2"
},
{
"description": "Description du projet 3",
"objectifs": "Objectifs du projet 3",
"rôle": "Votre rôle dans le projet 3",
"technologies": "Technologies utilisées pour le projet 3",
"résultats": "Résultats obtenus pour le projet 3"
}
],
"expérience_professionnelle": [
{
"entreprise": "Entreprise A",
"intitulé": "Intitulé du poste à l'Entreprise A",
"dates": "Dates d'emploi à l'Entreprise A",
"tâches": "Description des tâches et responsabilités à l'Entreprise A",`},
{role: "user", content:"/dev"},  
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
    {role: "user", content: "Participation à l'annonce"},
    ],
    model: "gemma2-9b-it",
    temperature: 0.5,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "PortFolio_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("🏁 la documentation du 🏴‍☠️ CTF à été enregistré sur github dans " + outputFilePath);
});
}

main();