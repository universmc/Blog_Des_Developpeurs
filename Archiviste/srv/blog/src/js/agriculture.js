const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();


const norm_W3C = `https://validator.w3.org`;
const Archive = `https://archive.org`

const database = `${norm_W3C}+${Archive}`

const github = 'https://github.com/universmc/telegram'
const widgets = `https://core.telegram.org/widgets`
const universmc = `https://t.me/+-CukoBUWXL84N2Vk`
const Pibot = `@PyArcade_bot`
const Telegram = `${github}+${widgets}+${universmc}+${Pibot}`


const bootstrapCSS = "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>";
const header = `<header><nav><div id='navBar'></div></nav></header>`
const mainContent = `<main><div id='telegram'><section class='Telegram'><article><h3>Telegram-widgets</h3><figure><div id='bootstap card'></div></figure></article></section></main>`
const footer = `<footer><div id='road_map></div></div>cc by univers-mc</div></footer>`
const bootstrapJS = "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>";

const HTMLresponse = `${bootstrapCSS}+${header}+${mainContent}+${footer}+${bootstrapJS}`;

const context = "/dev"

async function main() {
    groq.chat.completions.create({
        //
        // Required parameters
        
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            {role: "system", content: `${database}+${Telegram}` },
            // how it should behave throughout the conversation.
            {
                role: "assistant",
                content: "/dev code source HTML d'une page d'index complete pour le develloppement du blog avec bootstrap:"
            },
            
            {role: "assistant", content: `${HTMLresponse}+${widgets}+${Telegram}` },
        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 4096,
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
        const outputFilePath = "agriculture_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
        fs.writeFileSync(outputFilePath, htmlContent);
        console.log("Code HTML généré et enregistré dans " + outputFilePath);
    });

}
main();
