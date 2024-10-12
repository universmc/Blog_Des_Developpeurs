const chatCompletion = {
    "chat.completion.create": {
      "messages": [
        {
          "role": "assistant",
          "content": "Bonjour ! En quoi puis-je vous aider aujourd'hui ?"
        },
        {
          "role": "user",
          "content": "Je voudrais des informations sur les meilleures pratiques de conception de sites web."
        },
      ]
    }
  };
  
  const newSystemMessage = {
    "role": "system",
    "content": "Phase 1: Entraînement du modèle IA"
  };
  
  chatCompletion["chat.completion.create"].messages.push(newSystemMessage);