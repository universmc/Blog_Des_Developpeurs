const { chatCompletion } = require('./chatCompletion');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function interactiveChat(
) {
    while (true) {
        const userInput = await readline.question('Vous: ');
        const response = await chatCompletion([userInput]);
        console.log(response);
        console.log('\n');
    }
}

interactiveChat();
