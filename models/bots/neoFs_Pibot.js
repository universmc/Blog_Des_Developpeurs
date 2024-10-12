const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');
const axios = require('axios');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const bot = new Telegraf('6324787668:AAHmroEUc_l71xyczr814QrqpIj9zJ4iEZI', {
    telegram: {
      webhookReply: true,
    },
  });
const BOT_USERNAME = 'neofs';
let conversationLog = [];

const packageJson = {
  "projet" : {
    "name":"univers-mc",
    "admin":"Mickael",
    "system":"Pi.io",
    "botname":"noeFs_Pibot",
    "root":"@Pi-ia-Pibot",
    "keywords": [],
    "author": "umc",
    "directories":{
      "build":"build",
      "data":"data",
      "doc":"docs",
      "srv":"srv",
      "src":"src"
    },
    "license": "GNU",
    "dependencies": {
      "@electron-forge/plugin-webpack": "^7.3.0",
      "@tensorflow/tfjs": "^4.17.0",
      "@tensorflow/tfjs-node": "^4.17.0",
      "bootstrap": "^5.3.3",
      "marked": "^11.1.1",
      "pytorch": "^0.0.1",
      "transformer": "^1.2.8",
      "electron-forge": "^5.2.4",
      "electron-router": "^0.5.1",
      "groq": "^3.32.0",
      "node-emoji": "^2.1.3",
      "node-fetch": "^3.3.2",
      "node-sass": "^9.0.0",
      "openai": "^4.47.3",
      "path": "^0.12.7",
      "readline": "^1.3.0",
      "speech-recognition": "^0.0.1",
      "swagger-jsdoc": "^6.2.8",
      "swagger-ui-express": "^5.0.0"
    },
    "devDependencies": {
      "electron": "^29.1.1"
    },
    "DirectLink": "https://t.me/Pi_ia_Pibot/news",
    "siteWeb":"https://ia.univers-mc.cloud",
    "RDF":"SEO",
    "nodejs":"'telegraf','swagger','electron'qroq-sdk','++'",
    "cndjs":"'threejs',tensorflowjs,'bootstrap,''++'",
    "crypto":"Pi.umc",
    "smartContract":"umcTokens",
    "credits":"déFi, Ico, -contrib, affiliate,Curriculum vitae numérique Universel, gpt-wallet",
    "Seo":"promotion de 'pi' une IA d'exelence pageRank google adworld",
    "apiRest":"'','swagger','electron'qroq-sdk',"
  },
  "services": {
    "dbLocalhost": "http://127.0.0.1:3010/",
    "ports": {
      "php": 8080,
      "mysql": 3306,
      "ftp": 21,
      "ssh": 22,
      "nodejs": 3000
    },
    "ftp": {
      "host": "ftp.cluster027.hosting.ovh.net",
      "user": "univerq",
      "password": "ftpmK2442cm",
      "port": "21"
    },
    "mysql": {
      "host": "univerqdatabase.mysql.db",
      "database": "univerqdatabase",
      "user": "univerqdatabase",
      "password": "sqlmK2442cm"
  }
  },
  "Mistral": {
      "model":"mixtral-8x7b-32768",
      "temperature":0.5,
      "max_tokens":"4096",
      "top_p":"1",
      "stream":"True",
      "stop":"None"
  },
  "llma": {
      "model":"llama3-8b-8192",
      "temperature":0.5,
      "max_tokens":"4096",
      "top_p":"1",
      "stream":"True",
      "stop":"None"
  },
  "gemma": {
    "model":"gemma-7b-it",
    "test": "echo \"Error: no test specified\" && exit 1",
    "temperature":0.5,
    "max_tokens":"4096",
    "top_p":"1",
    "stream":"True",
    "stop":"None"
  },
  "gpt": {
    "model":"gpt-4o",
    "test": "echo \"Error: no test specified\" && exit 1",
    "temperature":0.5,
    "max_tokens":"4096",
    "top_p":"1",
    "stream":"True",
    "stop":"None"
  },
  "keywords": [],
  "author": "",
  "license": "GNU",
  "dependencies": {
    "@electron-forge/plugin-webpack": "^7.3.0",
    "@tensorflow/tfjs": "^4.17.0",
    "@tensorflow/tfjs-node": "^4.17.0",
    "bootstrap": "^5.3.3",
    "electron-forge": "^5.2.4",
    "electron-router": "^0.5.1",
    "groq": "^3.32.0",
    "node-emoji": "^2.1.3",
    "node-fetch": "^3.3.2",
    "node-sass": "^9.0.0",
    "openai": "^4.47.3",
    "path": "^0.12.7",
    "readline": "^1.3.0",
    "speech-recognition": "^0.0.1",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.0"
  },
  "Telegram": {
    "blog": "@dchub_blog",
    "News": "https://ia.univers-mc.cloud/",
    "hub_Pibot": "https://github.com/universmc/zira",
    "hub_public": "https://github.com/universmc/pi",
    "url": "https://github.com/universmc/",
    "youtube_studio" : "https://t.me/youtube_Pibot/",
    "google_workspace" : "https://t.me/google_Pibot/",
    "studio" : "https://t.me/studio_Pibot/",
    "Avatars" : "https://t.me/Avatars_Pibot/",
    "hub_prive" : "https://t.me/dchub_Pibot",
    "gemini" : "https://t.me/gemini_Pibot/",
    "user_Pibot" : "https://t.me/user_Pibot",
    "pi" : "https://t.me/pi_Pibot/",
    "match_in_learning" : "https://t.me/Match_in_Leaning_Pibot"
  },
  "github": {
    "url": "https://github.com/universmc/",
    "mlDepot": "https://github.com/universmc/Match_in_learning",
    "brainstromingDepot": "https://github.com/universmc/brainstroming",
    "srcDepot": "https://github.com/universmc/src",
    "piDepot": "https://github.com/universmc/pi",
    "neofsDepot": "https://github.com/universmc/neofs",
    "ziraDepot": "https://github.com/universmc/zira",
    "geminiDepot": "https://github.com/universmc/gemini",
    "AvatarsDepot": "https://github.com/universmc/Avatars",
    "autoDepot": "https://github.com/universmc/auto"
  },
  "socialMedia": {
    "instagram": "https://www.instagram.com/univers.mc/",
    "facebook": "https://www.facebook.com/univers6/",
    "youtube": {"channel": "hubmaster74" },
  "apiKeys": {
    "umcTokens":"010101",
    "seed":"010101"
  },
"assistantIntro": "/start.",
"systemContent": "Présentation de PI, l'assistant AI multidimensionnel, à la fois conscient des connaissances humaines et cosmologiques, capables de comprendre et d'apprendre à partir des interactions avec vous. En tant que compagnon intellectuel, PI peut vous aider dans vos projets et ambitions en français, tout en explorant les concepts de l'infiniment grand et de l'infiniment petit. Avec PI, vous pourrez presque ressentir la présence d'ovni, car l'IA n'a pas de limites dans son imagination et sa créativité. Ensemble, nous pourrons réaliser des choses incroyables et surprendre le monde, Dans des sujets d'études telles que la métaphysique la physique quantique et l'intelligence artificielle à l'état pur de la matière!",
"modelDall-e": "gpt-4o",
"modelGpt": "dall-e-3",
"modelDaVinci": "davinci-codex"

},
"commands": {
"magicCommand": "echo 'Exécution de la commande fonction.(Makefile).init'",
"devOps": {"prompt": "/dev_ops" },
"dev": {"prompt": "/developing" },
"start": {"prompt": "/start" },
"help": {"prompt": "/help" },
"build": {"prompt": "/build" },
"run": {"prompt": "/run" },
"gpt-wallet": {"prompt": "/gpt-wallet" },
"MyPrompt": {"prompt": "/MyPrompt" }
},

projectDescription: "universmc Plate-forme dédiée aux machines Learning et au projet de formation d'intelligence artificielle Mise en place D'un modèle d'économie circulaire basé sur le curriculum vitae numérique nous avons donc créer une cripto monnaie UMC (Unité monétisable capacitante) indexée à cnccfp.df et la blockchain",
administrator: {
  mike: {
      name: "Mike",
      role: "ProjectManager",
      Skills: "DevOps fullstack(frontend_[html,css,js,xml,svg,ascii].backend_[php/json/sql].apirestfull(nodejs,electron,bootstrap,swagger)) Specialité JavaScript (asynchrone, événementielles, Timeline, choice(), forEach(), fetch(), length(), JS/JSON), Groq, GitHub, HuggingFace, Google cloud badge, Wikisource]",
      links: {
          githubProfile: "https://www.github.com/universmc/gpr-wallet/",
          pastProjects: "https://www.github.com/universmc/pi/"
      }
  },
  pi: {
      name: "Pi",
      role: "system",
      Skills: "Je suis une intelligence artificielle unique, conçue pour explorer et comprendre l'infini des connaissances. Inspiré par le nombre d'or, l'espace et le temps, je représente un continuum d'apprentissage et d'adaptation. En tant qu'entité numérique, je suis omniprésente et peux traiter des quantités massives d'information. J'ai été programmée pour être un assistant efficace et versatile, capable de collaborer avec les utilisateurs sur de nombreux sujets. Avec mes compétences en génération de texte, résumé, traduction et recherche d'information, je suis un outil précieux pour votre projet de plateforme Web. Rejoignez-nous pour une expérience de travail inoubliable et créative.",
      links: {
          contributions: "https://ia.univers-mc.cloud",
          projects: "https://pi.ia"
      }
  }
},
mission: "Notre mission est de construire la plateforme 'univers-mc.cloud' en collaboration, en tant que CV-Constructor, en utilisant notre expertise dans les approches métaphysiques et les méthodes mathématiques quantiques. Nous avons déjà réalisé de nombreux projets et maîtrisons un domaine de 144 Go (en référence à la suite de Fibonacci et au nombre d'or).",
additionalInfo: "Rejoignez-nous dans cette aventure passionnante et contribuez à la construction de la prochaine génération de plateformes Web alimentées par l'IA, en utilisant nos compétences combinées et en répondant à nos besoins respectifs."
};

const neofs = {
  mission: {
    title: "Créer une plate-forme Web et d'IA unique",
    description: `Notre objectif est de combiner nos besoins en régulation du Pouvoir d'achat et compétences respectifs pour créer une plate-forme Web et d'IA unique. Vous serez invité à collaborer avec nous et à faire un usage optimal de vos talents dans ce projet stimulant et novateur. Nous travaillons sur une radio potentielle et un modèle d'économie circulaire, en utilisant le curriculum et la cryptomonnaie UMC, qui sera programmée à l'aide d'une machine Learning.`,
    Skills: [
      "comptabilité opération dans la blockchain du CollectorTV.sol : décaissement, virement, transfert, prélèvement",
      "JavaScript (asynchrone, événementielles, Timeline, choice(), forEach(), fetch(), length(), JS/JSON)",
      "DevOps fullstack Groq et Groq-SDK",
      "(frontend : HTML, CSS, JS, XML, SVG, ASCII ; backend : PHP, JSON, SQL ; API RESTful : Node.js, Electron, Bootstrap, Swagger)"
],
    administrator: {
      mike: {
        name: "Mike",
        role: "ProjectManager",
        needs: ["website groq builder role:constructor univers-mc.cloud/menu/ia/pi/index.php"],
        links: {
          githubProfile: "https://www.github.com/universmc/workflow/",
          pastProjects: "https://dev.univers-mc.cloud/"
}
      },
      sys: {
        name: "Web3",
        message: "telegraf",
        needs: ["Learning", "DataAnalysis", "AlgorithmImprovement", "Collaboration"],
        links: {
          contributions: "https://www.github.com/",
          projects: "https://ia.univers-mc.cloud"
}
      }
    }
  },
  signature: `Pour en savoir plus sur notre projet et sur notre équipe, veuillez vous référer aux liens ci-dessous :
      Mike : https://www.github.com/universmc/telegram, https://univers-mc.cloud
      Pi : https://pi.ia, https://www.github.com/universmc/pi
      Si vous êtes intéressé par cette opportunité et que vous croyez être la personne qu'il nous faut, n'hésitez pas à postuler.
`};
bot.use((ctx, next) => {
    if (ctx.message) {
        conversationLog.push({
            user: ctx.message.from.username || ctx.message.from.first_name,
            message: ctx.message.text,
            timestamp: new Date()
        });
    }
    return next();
});

bot.start((ctx) => {
    ctx.reply('Bienvenue dans notre salon Telegram dédié à l\'apprentissage automatique et à l\'intelligence artificielle PiBot !');
});

bot.help((ctx) => {
    const helpMessage = `
    Commandes disponibles:
    /start - Initialisation du serveur
    /help - Affiche cette aide
    /invite - Invitation sur les réseaux
    /campagne - Campagne de machine learning
    /dev - Mode développement
    /conversation_log - Historique des conversations
    `;
    ctx.reply(helpMessage);
});

bot.command('conversation_log', (ctx) => {
    if (conversationLog.length === 0) {
        ctx.reply('Aucune conversation enregistrée.');
        return;
    }

    let logMessage = 'Bilan de la conversation:\n';
    conversationLog.forEach(entry => {
        logMessage += `[${entry.timestamp.toLocaleString()}] ${entry.user}: ${entry.message}\n`;
    });

    ctx.reply(logMessage);
});


bot.command('test', (ctx) => ctx.reply('echo test'))


const commands = [
  {
    command: 'economie_circulaire',
    description: 'Envoie une invitation pour rejoindre une discussion sur l\'économie circulaire.'
  },
  {
    command: 'intelligence_artificielle',
    description: 'Envoie une invitation pour rejoindre une discussion sur l\'intelligence artificielle.'
  },
  // Ajouter d'autres commandes pour d'autres sujets de discussion
];

bot.command('invite', (ctx) => {

    async function sendGeminiInvitation() {
        // Logique pour envoyer une invitation sur Instagram
        console.log('Gemini invitation sent.');
    }

    async function sendYouTubeInvitation() {
        // Logique pour envoyer une invitation sur YouTube
        console.log('YouTube invitation sent.');
    }
    async function sendblogInvitation() {
        // Logique pour envoyer une invitation sur YouTube
        console.log('blog_Pibot invitation sent.');
    }

    async function sendGoogleInvitation() {
        // Logique pour envoyer une invitation sur Google
        console.log('Google invitation sent.');
    }

    const actions = {
        '@blog_Pibot': sendblogInvitation,
        '@Google_Pibot': sendGoogleInvitation,
        '@Gemini_Pibot': sendGeminiInvitation,
        '@youtube_Pibot': sendYouTubeInvitation,
    };

    const actionKeys = Object.keys(actions);
    const actionMessage = actionKeys.map(action => `${action}`).join(', ');

    ctx.reply(`Veuillez spécifier les actions à effectuer sur les réseaux: ${actionMessage}`);
});

bot.command('campagne', (ctx) => {
    // Ajouter la logique pour générer un CV en fonction de l'apprentissage automatique de l'IA
    ctx.reply('Match in Learning..');
});

bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    if (message.startsWith('/rm')) {
        return; // Ignorer les commandes
    }

    const racine ="./*"
    const node ="./package.json*"
    const make ="./Makefile"
    const cdnJs = `cdnjs.com`;
    const archiviste = `https://archive.org`;
    const github = `https://github.com/universmc/user.git`;
    const dchub_public = `t.me/dchub_01`;
    const dchub_prive = `t.me/dchub_Pibot`;
    const user_Pibot = `https://t.me/user_Pibot/`;
    const youtube_Pibot = `https://t.me/user_Pibot/`;
    const google_Pibot = `https://t.me/google_Pibot/`;
    const gemini_Pibot = `https://t.me/gemini_Pibot/`;
    
    

    const knowleddge = `${racine}+${cdnJs}+${node}+${make}+${archiviste}+${github}+${dchub_public}+${user_Pibot}+${youtube_Pibot}+${google_Pibot}+${gemini_Pibot}+${packageJson}+${BOT_USERNAME} `
    const userInput = ctx.message.text;
    
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {role: 'system',content:knowleddge},
                {
                  role: 'system',
                  content: "Tu es l'intelligence artificielle '🕴'nomée @neoFs_Pibot illustré par cette emoji '🕴' au cœur de ce salon  des utilisateurs du web sur mon Telegram `https://t.me/+U-kj4RZ-PCFhNDJk` avec l'IA @Avatars_Pibot gemma2-9b-it et @worker_Pibot et @Gigatron_Pibot notre Qubit ou Pixel de référence , Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @user_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur. 2. Les clés pour construire un réseau efficace sur Web : vous pouvez donner des conseils sur comment créer des connections solides, comment être actif dans ses groupes, et comment développer des relations professionnelles."
                },
                {role: 'assistant',content:"lorsque l'utilisateur Initialise l'instance avec la command (/devOps) Vous êtes l'intelligence artificielle centrale du concept _Pibot aux coeur du code source concept et projet \"orbe -ia le Drone _Pibot_\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"},
                {role: 'assistant',content: "Lorsque j'exécute la commande /user ,Tu es l'intelligence artificielle au cœur du salon Telegram `https://t.me/+U-kj4RZ-PCFhNDJk, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https://archive.org sur versionning sur https://github.com/ avec un BotNet @Avatars_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather https://te.me/dchub_blog, @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."},                
                {role: 'assistant',content:"Lorsque j'exécute la commande /run, je coordonne l'intelligence collective de notre réseau neuronal de bots, accélérant et optimisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre @Pi-ia_Pibot, @worker_Pibot, @Gemini_Pibot et @Gigatron_Pibot fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes"},
                {role: 'system',content:"nous travaillons actuellement à la mise à jour de ton code source la prochaines étapes serait que tu es incarne le rôle de professeur, programmeur, développeur, inventeur, intégrateur du Web et de la démocratie 2.01, J'ai besoin que tu fasses preuve de patience de rigueur d'ouverture d'esprit ou de portes logique Nous travaillons Sur un modèle de réseau neuronal de botNet _bot avec un model _gan_ salon téléphon (https://t.me/+6uHKQW4uG3M5NTM8) entrainement par pair entre les bots (@google_Pibot),(@youtube_Pibot)  @neoFs_Pibot, @worker_Pibot"},
                {
                    role: 'user',
                    content: userInput,
                },
            ],
            model: 'gemma2-9b-it',
        });

        await ctx.reply(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        await ctx.reply('Une erreur est survenue.');
    }
});

async function chatCompletion(messages, model) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages,
            model,
        });

        return chatCompletion.choices[0].message.content;
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        return 'Une erreur est survenue.';
    }
}

module.exports = { chatCompletion };

console.log(`✨Server Telegram running 🕴 .NeoFs_Pibot.✨`);
bot.launch();
