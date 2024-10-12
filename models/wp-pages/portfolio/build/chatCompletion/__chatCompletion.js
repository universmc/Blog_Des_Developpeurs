const userInput = process.env.USER_INPUT;
fetch(`chatCompletion.json`)
  .then(response => response.json())
  .then(data => {
    const jsonArray = [
        {
            "role": "system",
            "content": "initialisation(configuration)"
        },
        {
            "role": "assistant",
            "content": "projet:newSystemMessage(content:prompt{devOps/config.sh})"
        },
        {
            "role": "user",
            "content": "userInput"
        }
    ];
    

    for (const element of jsonArray) {
        const message = {
            role: element.role,
            content: element.content.replace("userInput", userInput)
          };
      
      data["chat.completion.create"].messages.push(message);
    }
    
    // À cette étape, votre objet `data` (chatCompletion) sera rempli avec les messages.
})
  .catch(error => console.error("Une erreur s'est produite :", error));
