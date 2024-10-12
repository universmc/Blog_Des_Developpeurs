const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const subject = process.argv[2] || 'Blog-des-Developpers';

async function main() {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "assistant", content: `Génération d'un How-To pour ${subject} avec des étapes détaillées...` },
        { role: "user", content: `/how-to ${subject}` }
      ],
      model: "gemma2-9b-it",
      temperature: 0.5,
      max_tokens: 4096,
    });

    const mdContent = completion.choices[0]?.message?.content;
    const outputFilePath = `how-to_${subject}_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log(`How-To documentation for ${subject} saved as ${outputFilePath}`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
