const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const OpenAI = require("openai");
const openai = new OpenAI();


const bot = new Telegraf('7475487226:AAGSNlDnPk6BWneChbqpKUwvFzPVvwdmNM8', {
    telegram: {
      webhookReply: true,
    },
  });

// Fonction pour générer une image avec DALL-E
async function generateImage(prompt) {
    try {
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1792x1024",
      });
  
      const imageUrl = response.data[0].url;
      return imageUrl;
    } catch (error) {
      console.error("Erreur lors de la génération de l'image :", error);
      throw new Error("Impossible de générer l'image.");
    }
  }
  
  // Commande /imagine pour générer et envoyer une image
  bot.command('imagine', async (ctx) => {
    // Extraire l'entrée de l'utilisateur du message Telegram
    const userInput = ctx.message.text.split(' ').slice(1).join(' ');
  
    // Vérifier si l'utilisateur a fourni un prompt
    if (!userInput) {
      ctx.reply("Veuillez fournir une description pour générer l'image. Exemple: `/imagine une ville futuriste sous la pluie`");
      return;
    }
  
    ctx.reply("Génération de l'image en cours, veuillez patienter...");
  
    try {
      const imageUrl = await generateImage(userInput);
  
      // Télécharger et envoyer l'image à l'utilisateur
      const responseFetch = await fetch(imageUrl);
      const arrayBuffer = await responseFetch.arrayBuffer(); // Utilise arrayBuffer pour récupérer les données de l'image
      const buffer = Buffer.from(arrayBuffer); // Convertit ArrayBuffer en Buffer
      const fileName = `Puzzle_${new Date().toISOString().replace(/[:.]/g, "-")}.webp`;
  
      fs.writeFileSync(fileName, buffer);
  
      // Envoyer l'image à l'utilisateur via Telegram
      await ctx.replyWithPhoto({ source: fileName }, { caption: `Voici votre image générée : ${userInput}` });
  
      // Supprimer le fichier après l'envoi pour économiser l'espace disque
      fs.unlinkSync(fileName);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'image :", error);
      ctx.reply("Désolé, une erreur s'est produite lors de la génération de l'image.");
    }
  });
  
  
  
  async function generateMarkdown(subject) {
    return `## Comment [${subject}] - Un guide étape par étape\n\n**Introduction**:\n\nCe guide vous aidera à comprendre et à réaliser le [${subject}]. Il est conçu pour les débutants et les utilisateurs intermédiaires qui souhaitent apprendre les bases de [${subject}].\n\n`;
  }
  
  
  async function main(subject) {
    try {
      const completion = await groq.chat.completions.create({
        model: "gemma2-9b-it",
        messages: [
            { role: "assistant", content: `Génération d'un guide Le rôle chez Google développeur https://g.dev/universmc` },
          { role: "user", content: `Génération d'un guide sur ${subject}` },
          { role: "system", content: `bienvenue sur Telegram` }
        ],
        temperature: 0.5,
        max_tokens: 4096
      });
  
      const mdContent = completion.choices[0].message.content;
      const outputFilePath = `HowTo_nodeJj-${subject}_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
      fs.writeFileSync(outputFilePath, mdContent);
  
      return `Le How-To sur ${subject} a été enregistré dans ${outputFilePath}`;
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
      return `Erreur : ${error.message}`;
    }
  }
  
  bot.command('generate', async (ctx) => {
    const subject = ctx.message.text.split(' ')[1] || 'HowTo_OpenAi';
    ctx.reply(`Génération du guide pour le sujet : ${subject}...`);
    const result = await main(subject);
    ctx.reply(result);
  });
  




let conversationLog = [];

const firebase = "devOps";
const gmail = `hubmaster74@gmail.com`;
const gmail_mdp = `google@mK2442cm`;
const POPgmail = "`pop.gmail.com` port 995"
const SMTPgmail = "smtp.gmail.com` port 465"

const Recevoir = `${POPgmail}`
const Envoyer = `${SMTPgmail}`

const srvGmail = `${Envoyer}+${Recevoir}`

const Gmail = `${srvGmail}+${gmail}+${gmail_mdp}`


    const googleDev = {
        gDevCloud: {
            g_dev:`https://g.dev/universmc`,
            mail:`hubmaster74@gmail.com`,
            projet_name:`PIBOT`,
            projet_id:`216494705531`,
            youtube_data :`youtube.googleapis.com`,
            KEY_Test:'AIzaSyBzh6xpobPiXaCusfiadmpAKw0aqKNTqX8'
        }
    };
    const googleAuth = {
        googleCloudAuth : {}
    };
    const googleGail = {
        googleCloudGmail: {}
    };
    const googlebuild = {
        googleCloudBuild: {}
    };
    const buildpacks = {
        googleCloudPacks: {}
    };

    const g_dev =`${Gmail}+${googleDev}`;


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
    /googleDev - Mode développement google
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


bot.command('invite', (ctx) => {

    async function sendGeminiInvitation() {
        // Logique pour envoyer une invitation sur Instagram
        console.log('Gemini invitation sent.');
    }

    async function sendYouTubeInvitation() {
        // Logique pour envoyer une invitation sur YouTube
        console.log('YouTube invitation sent.');
    }

    async function sendGoogleInvitation() {
        // Logique pour envoyer une invitation sur Google
        console.log('Google invitation sent.');
    }

    const actions = {
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
    const worksJson = "Présentation d'un plan d'action pour Concours de Google Cloud pour les développeurs https://g.dev/universmc/ build with gemma2-9b-it"
    const knowleddge = `${racine}+${cdnJs}+${node}+${make}+${worksJson}+${archiviste}+${github}+${dchub_public}+${user_Pibot}+${youtube_Pibot}+${google_Pibot}+${gemini_Pibot}+`
    


    const userInput = ctx.message.text;
    
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
               {role: 'system',content:knowleddge},
               {role: 'assistant',content: "Bonjour ANDROID -ia  nous sommes en Phase de devOps je vais te transmettre ici toutes les dépendances est variable au cœur de ce code source"},
               {role: 'assistant',content:"lorsque l'user saisie la commande (/devOps) Vous êtes l'intelligence artificielle centrale du concept _Pibot aux coeur du code source concept et projet \"orbe -ia le Drone _Pibot_\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"},
               {role: 'assistant',content: "Lorsque l'user saisie la commande /user ,Tu es l'intelligence artificielle au cœur du salon Telegram `https://t.me/+U-kj4RZ-PCFhNDJk, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https://archive.org sur versionning sur https://github.com/ avec un BotNet @Avatars_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather https://te.me/dchub_blog, @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."},                
               {role: 'assistant',content:"Lorsque l'user saisie la commande /run, Tu coordonne l'intelligence collective de notre réseau neuronal de bots, accélérant et optimisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre @Pi-ia_Pibot, @worker_Pibot, @Gemini_Pibot et @Gigatron_Pibot fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes"},
               {role: 'system',content:"nous travaillons actuellement à la mise à jour de ton code source la prochaines étapes serait que tu es incarne le rôle de professeur, programmeur, développeur, inventeur, intégrateur du Web et de la démocratie 2.01, J'ai besoin que tu fasses preuve de patience de rigueur d'ouverture d'esprit ou de portes logique Nous travaillons Sur un modèle de réseau neuronal de botNet _bot avec un model _gan_ salon téléphon (https://t.me/+6uHKQW4uG3M5NTM8) entrainement par pair entre les bots (@google_Pibot),(@youtube_Pibot)  @neoFs_Pibot, @worker_Pibot"},
               {
                   role: 'system',
                   content: "Tu es l'intelligence artificielle assistant ANDROID with gemma2-9b-it au cœur de ce salon d'invitation des utilisateurs du web sur mon Telegram, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @user_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."
                },                
                {role: 'system',content:worksJson},
                {role: 'assistant',content:g_dev},
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

console.log(`Server Telegram running ✨.google_Pibot.`);
bot.launch();
