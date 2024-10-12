
const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();


const norm_W3C = `https://validator.w3.org`;
const make = "Makefile"
const cdnJs = `🌐 cdnjs est un CDN open source qui fournit des bibliothèques JavaScript et des frameworks CSS prêts à être utilisés sur votre site web. Il propose une grande variété de ressources pour améliorer les performances et la fiabilité de votre site. 🛠️ intégrer cdnjs dans un projet, Pour intégrer cdnjs dans un projet web, vous pouvez simplement inclure le lien CDN de la bibliothèque que vous souhaitez utiliser dans le code HTML de votre site. Cela vous permet d'accéder rapidement aux dernières versions des bibliothèques sans avoir à les héberger vous-même url = 'https://cdnjs.com'`;
const archiviste = "https://archive.org"
const github = 'Git est un système de gestion de versions décentralisé largement utilisé pour le suivi des modifications apportées au code source lors du développement de logiciels. Il permet aux développeurs de collaborer, de revenir en arrière sur les changements, et de gérer efficacement les branches de projet. Git est essentiellement un espace de stockage qui contient l historique des modifications de fichiers pour un projet particulier. Les développeurs peuvent cloner, pousser, tirer et fusionner des dépôts pour partager et collaborer sur du code url=https://github.com GitHub est une plateforme populaire qui repose sur Git et qui offre des fonctionnalités supplémentaires telles que le suivi des problèmes, le déploiement automatisé et la gestion des projets. Les développeurs l utilisent pour héberger leurs dépôts de code et collaborer avec d autres'
const widgets = `https://core.telegram.org/widgets`
const universmc = `https://t.me/user_Pibot/`
const universmc_app = `https://t.me/user_Pibot/invite`
const user_Pibot = `@user_Pibot`
const blog_Pibot = `@blog_Pibot`
const cvnTelegram = `https://t.me/dchub_blog/55`


// const bootstrapCSS = "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>";
// const header = `<header><nav><div id='navBar'></div></nav></header>`
// const mainContent = `<main><div id='telegram'><section class='Telegram'><article><h3>Telegram-widgets</h3><figure><div id='bootstap card'></div></figure></article></section></main>`
// const footer = `<footer><div id='road_map></div></div>cc by univers-mc</div></footer>`
// const bootstrapJS = "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>";
// 
// const HTMLresponse = `${bootstrapCSS}+${header}+${mainContent}+${footer}+${bootstrapJS}`;

const database = `${make}+${cdnJs}+${norm_W3C}+${github}++${archiviste}+${widgets}+${universmc}+${universmc_app}+${user_Pibot}+${blog_Pibot}`


const context = "/Telegram/blog/"
const role = "gestion du blog"
const projet = `
{
    "projet" : {
      "nom" : "Model Économie circulaire basée sur le CV Numérique Universel (CVU)",
      "roles" : [
        {
          "titre" : "administrator",
          "responsabilites" : [
            "Aider les utilisateurs à naviguer dans le système et à comprendre ses fonctionnalités.",
            "Résoudre les problèmes techniques et répondre aux questions des utilisateurs.",
            "Appuyer la collecte et la structuration des informations des utilisateurs pour alimenter le CVNU."
          ],
          "competences" : [
            "Compréhension des systèmes de gestion de données.",
            "Compétences en communication et en support client.",
            "Capacité à diagnostiquer et corriger les problèmes techniques."
          ],
          "taches" : [
            "Répondre aux demandes et guider les utilisateurs.",
            "Superviser et garantir le bon fonctionnement du système.",
            "Confirmer l'exactitude et l'actualité des données des utilisateurs."
          ],
          "process" : [
            {
              "etape" : "Connexion",
              "utilisateurs" : "se connectent via Telegram en employant la commande 'gpt-wallet'.",
              "interaction" : "interagissent avec les utilisateurs pour combler leurs attentes.",
              "miseAJour" : "recueillent et mettent à jour les informations dans le système."
            }
          ],
          "caracteristiques" : {
            "proactivite" : "/home - P2B",
            "efficacite" : "/usr/CVNU - CVNU",
            "precision" : "@MandatoryAi_bot - RIB",
            "empathie" : "/gpt-wallet - carte Bancaire"
          }
        }
      ]
    }
  },
{
    "gantt-Phase" : {
    "SEO" : "Allocations universelles basées sur le curriculum vitae numérique",
    "modeleEconomique" : "modèle d'économie circulaire",
    "objectifs" : [
    "Réduire la pauvreté en fournissant des moyens de subsistance aux individus.",
    "Stimuler l'économie en encourageant le développement des compétences et la formation.",
    "Promouvoir l'inclusion financière en donnant accès aux services financiers à tous."
    ],
    "phases" : [
    {
    "phaseName" : "Phase 1: Définition et conception",
    "duree" : "10 jours",
    "taches" : [
    {
    "rangeJoursTask" : "J - 10",
    "description" : "Spécifier les objectifs et les fonctionnalités du projet, les critères d'éligibilité, les niveaux de CVN, les exigences, le système de paiement, et les principes de durabilité à long terme."
    },
    {
    "rangeJoursTask" : "Jour - 10",
    "description" : "Concevoir l'architecture de l'application et l'interface utilisateur, définir les modules, les fonctionnalités, créer des prototypes, choisir les outils et la pile technologique."
    }
    ]
    },
    {
    "phaseName" : "Phase 2: Développement",
    "duree" : "20 jours",
    "taches" : [
    {
    "rangeJoursTask" : "Jour - 10",
    "description" : "Développer les systèmes back-end incluant la configuration de la base de donnée, les APIs, la gestion des profils, le suivi des compétences, et le système de paiement sécurisé utilisant l'intégration de la blockchain."
    },
    {
    "rangeJoursTask" : "Jour - 10",
    "description" : "Implémenter les fonctionnalités frontales telles que l'enregistrement, la connexion, la gestion des profils, l'ajout de compétences, la génération de CVNs, et l'affichage de l'information sur le revenu."
    },
    {
    "rangeJoursTask" : "Jour - 10",
    "description" : "Tester l'application soigneusement, débugguer les problèmes, conduire des tests utilisateurs, collecter les retours, perfectionner l'UI en se basant sur les acquis durant les phases de tests."
    }
    ]
    },
    {
    "phaseName" : "Phase 3: Déploiement et maintenance",
    "duree" : "10 jours",
    "taches" : [
    {
    "rangeJoursTask" : "Jour - 10",
    "description" : "Paramétrer l'environnement d'hébergement ovh et github, déployer le codebase google cloud projet gpt-wallet et les bases de données, tester la configuration de déploiement, assurer la stabilité, l'extensibilité, et la sécurité."
    },
    {
    "rangeJoursTask" : "Jour - 10",
    "description" : "Surveiller la santé de l'application, rectifier les problèmes emergents, fournir une assistance technique, actualiser la documentation, répondre aux interrogations des utilisateurs, maintenir l'infrastructure."
    }
    ]
    }
    ],
    "considerationsSupplementaires" : [
    "Méthodologie de Gestion de Projet",
    "Canaux de Communication Telegram Clairs",
    "Documentation Technique Detaillée",
    "Mesures de Sécurité"
    ]
    }
    }+
    {
  "gantt-chart": {
    "Phase1": {
      "title": "Phase 1: Définition et conception",
      "role": "Consultant expert",
      "task_user": "Spécifier les objectifs et les fonctionnalités du projet, les critères d'éligibilité, les niveaux de CVN, les exigences, le système de paiement et les principes de durabilité à long terme dans cette phase.",
      "competencies": ["Connaissance exhaustive des allocations universelles", "Modèles économiques circulaires", "Evaluation de l'impact social", "Design thinking"],
      "context": "Création d'une plateforme de dotation fondée sur le curriculum vitæ numérique ayant des buts bien définis visant à diminuer la pauvreté, stimuler l'économie, encourager le développement des compétences ainsi que favoriser l'inclusion financière. Cette première phase implique la définition des aspects clés tels que les objectifs, les fonctionnalités, les critères d'éligibilité, etc. Et ensuite, elle prévoit la conception de l'architecture de l'application et son interface utilisateur.",
      "task": "Définir et concevoir la plateforme de dotation basée sur un curriculum vitæ numérique couvrant ses buts, ses fonctionnalités, les critères d'éligibilité, les niveaux de compétence nécessaires, les outils et le socle technologique appropriés, l'intégration d'un mode de paiement sécurisé et les principes de durabilité à long terme.",
      "process": [
        "Passer en revue les informations relatives au projet.",
        "Identifier les objectifs primordiaux et les fonctions essentielles de la plateforme.",
        "Etablir les critères d'admissibilité et les définitions des niveaux de compétence.",
        "Choisir les outils, les technologies et les motifs de conception adaptés.",
        "Concevoir le schéma de la base de données, les points de terminaison des API, la gestion des profils d'utilisateurs et les systèmes de suivi des compétences.",
        "Intégrer des mesures de sécurité dans l'infrastructure prévue.",
        "Veiller à ce que les directives en matière de durabilité environnementale soient appliquées lors du processus de conception.",
        "Améliorer les performances grâce à des solutions évolutives facilitant les futurs agrandissements.",
        "Valider le plan proposé selon les bonnes pratiques industrielles et normes reconnues."
      ],
      "characteristics": "Schéma complet mais concis présentant les fonctionnalités centrales, les procédés efficaces, les mécanismes de sécurité robustes et l'observance des principes de durabilité environnementale entre les différents composants."
    },
    {
    "role": "assistant,
    "competencies": [
      "Expertise solide dans le développement d'applications Web côté serveur et client",
      "Expérience dans la création d'API RESTful, la modélisation de bases de données et l'intégration de la technologie blockchain",
      "Maîtrise des contrôles de version Git, de l'intégration continue et des approches de développement agiles"
    ],
    "context": {
      "projectPhase": "Phase 2 : Développement",
      "projectDescription": "Développement de la plateforme d'allocations universelles basée sur le curriculum vitæ numérique",
      "focusArea": "Création de solides systèmes back-end et mise en œuvre de fonctionnalités front-end intuitives"
    },
    "task": {
      "description": "Construire les fondations back-end fiables...améliorer continuellement les fonctionnalités globales",
      "steps": [
        {
          "number": "1.",
          "action": "Analyser les spécifications techniques détaillées héritées de la phase de planification"
        },
        {
          "number": "2.",
          "action": "Configurer l'environnement back-end (serveurs, plates-formes d'hébergement, système d'exploitation)"
        },
        {
          "number": "3.",
          "action": "Créer le modèle de base de données personnalisé en fonction des besoins"
        },
        {
          "number": "4.",
          "action": "Écrire un code serveur propre, maintenable et performant"
        },
        {
          "number": "5.",
          "action": "Développer des API stables, flexibles et extensibles"
        },
        {
          "number": "6.",
          "action": "Effectuer des tests approfondis pour les problèmes potentiels de fiabilité, de sécurité et de performance"
        },
        {
          "number": "7.",
          "action": "Corriger les erreurs et vulnérabilités identifiées"
        },
        {
          "number": "8.",
          "action": "Mettre en place des vues frontales reflétant le flux UX souhaité"
        },
        {
          "number": "9.",
          "action": "Interfacer les services tiers (traitement des paiements via la blockchain)"
        },
        {
          "number": "10.",
          "action": "Effectuer des vérifications complètes qualité avant toute mise à jour"
        },
        {
          "number": "11.",
          "action": "Suivre les cycles de sprints et intégrer des histoires utilisateur alignées sur les priorités du projet"
        }
      ],
      "desiredOutcome": "Une plateforme entièrement opérationnelle offrant des fondations solides, une grande réactivité, des interfaces fluides, une navigation cohérente, une excellente gestion des erreurs, une sécurité infaillible, une rapidité exceptionnelle, et une compatibilité multiplates-formes permettant une expérience engageante et gratifiante pour chaque intervenant dans le cadre des allocations universelles basées sur le curriculum vitæ numérique."
    }
  }
  }
}`
const integration = `${context}+${database}+${role}` 

async function main() {

    groq.chat.completions.create({
        //
        // Required parameters
        
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            {role: "system", content: `${integration}+${projet}+${cvnTelegram}+` },
            // how it should behave throughout the conversation.
            {
                role: "user",
                content: "/dev code source HTML du projet pour servire la page index.html du blog https://t.me/dchub_blog/55 dédié au Curriculum vitae numérique (CVN) est un modèle d'économie circulaire qui vise à réduire la pauvreté en fournissant des moyens de subsistance aux individus, à stimuler l'économie en encourageant le développement des compétences et la formation, et à promouvoir l'inclusion financière en donnant accès aux services financiers à tous. Expert en techniques d'apprentissage automatique grace a tensorflow, kerras, huggingface.co"
            },
            {role: "assistant", content: `Ta réponse devrait être rédigé au format HTML respectant section par section intégrant comme barre de navigation un plan d'action, une étude d'impacte, un tableau en html pour implémenté sur la gestion de l'organisation du projet, les rôles et responsabilités, les étapes clés, les outils utilisés.Toute en respectant les normes du Web sémantique W3C"` },
            {role: "user", content: `* **CSS:** Créez un fichier 'style.css' pour ajouter des styles visuels à votre page.**Contenus:** Remplacez les placeholders de texte par du contenu pertinent sur les CVN et l'économie circulaire.**Images:** Ajoutez des images pour rendre votre page plus attractive.**Web Sémantique:**  Utilisez des balises HTML significatives pour décrire le contenu de votre page (par exemple, 'article', 'aside', 'figure', etc.). Cela améliore la compréhension par les moteurs de recherche et les lecteurs d'écran.**Accessibilité:** Assurez-vous que votre page est accessible à tous, y compris les personnes ayant des limitations visuelles ou auditives.` }
        ],
        // The language model which will generate the completion.
        model: "gemma2-9b-it",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.7,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 10092,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false
    }).then((chatCompletion)=>{
        // Print the completion returned by the LLM.
        const htmlContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "output/CVN_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
        fs.writeFileSync(outputFilePath, htmlContent);
        console.log("Code HTML généré et enregistré dans " + outputFilePath);
    });

}
main();
