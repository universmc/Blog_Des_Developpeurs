const fs = require('fs');
const path = require('path');

async function chatCompletion(messages) {
    try {
        const conversation = await pi.chat.conversations.list().then(data => data[0]);
        const modelId = conversation.model;
        const model = await pi.models.read(modelId);

        const chatCompletionData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'chatCompletion.json')));

        const chatCompletion = await pi.chat.completions.create({
            model,
            messages: [...messages, chatCompletionData],
        });

        const response = chatCompletion.choices[0].message.content;
        return response;
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        return 'Une erreur est survenue.';
    }
}
async function chatCompletion(messages, model) {
    let chatResponse = '';

    while (chatResponse === '') {
        try {
            const chatCompletion = await pi.chat.completions.create({
                messages,
                model,
            });

            chatResponse = chatCompletion.choices[0].message.content;
        } catch (error) {
            console.error('Failed to generate chat completion:', error);
            await sleep(1000); // Pause de 1 seconde avant de réessayer
        }
    }

    return chatResponse;
}
module.exports = { chatCompletion };
