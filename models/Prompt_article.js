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
      {role: "assistant",content: `
        ### 1. Définition du Thème/Topic:

#### Sujet proposé:
* Titre du Sujet: "Optimiser votre Expérience de Développement Full Stack avec Telegram: Outils, Bots et Sécurité"
* Audience cible: Développeurs Full Stack DevOps utilisant ou souhaitant utiliser Telegram pour améliorer leur workflow.

### 2. Research et Brainstorming:

#### Exploration des tendances:
* Analyse des discussions sur Telegram:
  * Outils de développement et intégrations les plus populaires.
  * Bots Telegram incontournables pour les développeurs.
  * Problématiques courantes liées à la sécurité sur Telegram.

#### Identifiez les besoins:
* Attentes de l’audience:
  * Comment intégrer Telegram dans un workflow DevOps.
  * Bots et API nécessaires pour automatiser certaines tâches.
  * Meilleures pratiques pour sécuriser les communications sur Telegram.

### 3. Création du Titre Attrayant:

#### Proposition de titres:
* Titre 1: "Transformez votre Workflow DevOps avec Telegram: Bots et Intégrations Essentielles"
* Titre 2: "Sécurité et Efficacité: Utiliser Telegram pour le Développement Full Stack"

#### Utilisation des mots-clés:
* "Workflow DevOps", "Intégration Telegram", "Bots pour développeurs", "Sécurité Telegram".

### 4. Sélection des Images:

#### Choix des images:
* Image de couverture: Illustration d'un développeur utilisant un bot Telegram.
* Images Sectionnelles: Captures d'écran de bots populaires, diagrammes de flux d'intégration Telegram.
* Licences libres: Utiliser des banques d’images comme Unsplash ou Pixabay, ou des illustrations créées avec des outils libres de droits.

### 5. Rédaction du Texte:

#### Introduction:
* Captez l’attention:
  * "Imaginez booster votre productivité DevOps grâce à un simple outil de messagerie. Bienvenue dans le monde de Telegram pour développeurs!"

#### Corps de l'article:
* Section 1: Introduction à Telegram pour DevOps
  * "Telegram n'est plus seulement une application de messagerie — découvrez comment il peut révolutionner votre façon de développer."

* Section 2: Les meilleurs Bots pour Développeurs Full Stack
  * "Des outils comme le BotFather, Trello, et Jenkins Bots qui redéfinissent l’efficacité."

* Section 3: Utiliser les API Telegram pour Automatiser les Tâches
  * "Intégrations avancées avec les API Telegram: Comment automatiser vos workflows."

* Section 4: Sécuriser vos Communications sur Telegram
  * "Meilleures pratiques pour assurer la sécurité et la confidentialité de vos communications DevOps."

#### Appel à l'action:
* "N'attendez plus ! Essayez ces outils dès aujourd'hui et partagez votre expérience avec la communauté des développeurs sur notre forum ou en commentaire."

### 6. Vérification et Amélioration:

* Relecture: Vérifiez l'orthographe, la grammaire, et assurez-vous que les sections sont bien connectées.
* Feedback: Demandez à vos collègues ou d’autres développeurs de donner leur avis sur l'article.
* Compatibilité: Testez l'affichage de l'article sur différents appareils et navigateurs.

### 7. Publication sur votre Site Web:

* SEO: Assurez-vous que les mots-clés sont bien intégrés et optimisez les meta-descriptions.
* Promotion: Partagez l'article sur vos réseaux sociaux, groupes Telegram dédiés aux développeurs, et sur des forums comme Stack Overflow ou Reddit.

        `}
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