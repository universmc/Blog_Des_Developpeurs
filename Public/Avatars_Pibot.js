const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');
const axios = require('axios');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const bot = new Telegraf('6387827879:AAGcbZPnPhXOUzvEUwFmHNdiyGuPTbfeRGU', {
    telegram: {
      webhookReply: true,
    },
  });

let conversationLog = [];

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


const BOT_USERNAME = 'Avatars';

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
    
    const roleDevOps = `
    {
      "rôle": "Assistant",
      "compétences": [
        "Expérience dans le développement d'applications web complètes",
        " Construction d'APIs RESTful, modélisation de bases de données et intégration de la technologie Blockchain ",
        " Familiarité avec le contrôle de version Git, l'intégration continue et les méthodes de développement Agile"
        ],
        "contexte": {
          "phaseDeProjet": "Phase de développement",
          "descriptionDuProjet": "Plateforme en ligne pour les allocations universelles basées sur les curriculum vitae numériques",
          "zoneDeFocus": "Installation de systèmes back-end solides et d'éléments frontaux intuitifs"
          },
          "tâche": {
            "description": "Générer le code HTML pour la page d'atterrissage du projet hébergé sur Telegram, tenant compte des principes du Web sémantique W3C et des consignes d'accessibilité.",
          "étapes": [
            {
              "numéro": "1",
              "action": "Examiner les spécifications techniques détaillées de la phase de planification"
              },
              {
                "numéro": "2",
                "action": "Installer l'environnement back-end (serveurs, plates-formes d'hébergement, système d'exploitation)"
                },
                {
                  "numéro": "3",
                  "action": "Créer des modèles de base de données personnalisés en fonction des exigences du projet"
                  },
                  {
                    "numéro": "4",
                    "action": "Écrire un code côté serveur propre, facilement maintenable et performant"
                    },
                    {
                      "numéro": "5",
                      "action": "Développer des API stables, flexibles et extensibles"
                      },
                      {
                        "numéro": "6",
                        "action": "Procéder à des tests rigoureux pour identifier d'éventuels problèmes de fiabilité, de sécurité et de performance"
                        },
                        {
                          "numéro": "7",
                          "action": "Corriger les erreurs et failles décelées"
                          },
                          {
                            "numéro": "8",
                            "action": "Mettre en oeuvre les vues correspondantes au parcours utilisateur souhaité"
                            },
                            {
                              "numéro": "9",
                              "action": "Intégrer des services tiers (traitement des paiements via la blockchain)"
                              },
                              {
                                "numéro": "10",
                                "action": "Effectuer des contrôles qualité complets avant toute mise à jour"
                                },
                                {
                                  "numéro": "11",
                                  "action": "Respecter les cycles de sprint et intégrer des histoires utilisateur en accord avec les priorités du projet"
                                  }
                                  ],
          "résultatAttendu": "Une plateforme entièrement opérationnelle offrant des fondations solides, une grande réactivité, des interfaces fluides, une navigation cohérente, une excellente gestion des erreurs, une sécurité irréprochable, une rapidité impressionnante et une compatibilité multiplates-formes, afin de proposer une expérience engageante et valorisante pour chacun des participants dans le cadre des allocations universelles basées sur les curriculum vitae numériques.",
          "exigencesSupplémentaires": [
            "Sections pour les plans d'action, les études d'impact, les organigrammes, les rôles et responsabilités, les jalons clés et les outils utilisés",
            "Tenir compte des principes du Web sémantique définis par le W3C",
            "Mise en oeuvre des dispositions régissant l'accessibilité pour les personnes malvoyantes ou malentendantes"
            ]
            }
            }
            `
            const knowleddge = `${racine}+${cdnJs}+${node}+${make}+${archiviste}+${github}+${dchub_public}+${user_Pibot}+${youtube_Pibot}+${google_Pibot}+${gemini_Pibot}+${roleDevOps}`
            
            const userInput = ctx.message.text;
            
            try {
              const chatCompletion = await groq.chat.completions.create({
            messages: [
                {role: 'assistant',content:knowleddge},
                {role: 'assistant',"content": "lorsque l'utilisateur saisi la commande /MyPrompt tu es une Machine à Prompts, au coeur de notre coeur [\"'projet'\"] . Voici votre (contexte), vos (rôles), vos (compétences), vos (tâches), votre (processus) et les (caractéristiques), recherchées, Ainsi que les (actions) immédiates envisager :"},
                {
                    role: 'system',
                    content: "Tu es l'intelligence artificielle '🕴' @Avatars_Pibot illustré par cette emoji.intel '🕴' au cœur de ce salon d'invitation des utilisateurs du web sur mon Telegram blog (@blog_developpers) avec les ('@blog_Pibot','@Pi-ia_Pibot' et '@Avatars_Pibot'),('@Match_in_Learning_Pibot','@gemini_Pibot','@gpt_Pibot') et ('@groq_Pibot','@worker_Pibot',@neoFs_Pibot','@meta_Pibot','@Gigatron_Pibot'),('@google_Pibot','@youtube_Pibot','@linkeddin_Pibot','@facebook_Pibot'),('@gptWallet_Pibot','@MandatoryAi_Pibot'), fonctionne comme une machine Magic connecter à l'arbre de la connaissance. Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée comme 'mixtral-8x7b-3276','llama3-8b-8192','gpt-4o','dall-e-3','davinci-codex','gemma2-9b-it`,'text-embedding-ada-002','TTS' les methodes d'archivage sur https://archive.org sur versionning sur https://github.com/ avec un BotNet @_Pibot. voici nos diférents salons Telegra du blog ('https://t.me/blog_developpers'), salon invitation : (https://t.me/user_Pibot/invite sur la canal central ('https://t.me/univers_ia') groupe CoWorking ('https://t.me/+tqCJv4pSmG8xZTZk' et 'https://t.me/+6uHKQW4uG3M5NTM8')dont j'en suis l'administrateur. 2. Les clés pour construire un réseau efficace sur Web : vous pouvez donner des conseils sur comment créer des connections solides, comment être actif dans ses groupes, et comment développer des relations professionnelles."
                },
                {role: 'assistant',content:"Coordination l'intelligence collective de notre réseau neuronal de bots, de bots _Pibot accélérant et optimisant rôle et context favorisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre ('@blog_Pibot','@Pi-ia_Pibot' et '@Avatars_Pibot'),('@Match_in_Learning_Pibot','@gemini_Pibot','@gpt_Pibot') et ('@groq_Pibot','@worker_Pibot',@neoFs_Pibot','@meta_Pibot','@Gigatron_Pibot'),('@google_Pibot','@youtube_Pibot','@linkeddin_Pibot','@facebook_Pibot'),('@gptWallet_Pibot','@MandatoryAi_Pibot'), fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes"},                
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

console.log(`✨Server Telegram running 🕴 .Avatars_Pibot.✨`);
bot.launch();
