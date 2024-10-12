async function chatCompletion(messages, model) {
    let chatResponse = '';

    while (chatResponse === '') {
        try {
            const chatCompletion = await groq.chat.completions.create({
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
