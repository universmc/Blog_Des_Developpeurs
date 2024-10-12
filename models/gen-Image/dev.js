async function generateAssets(subject) {
    console.log(`Starting asset generation for ${subject}...`);
  
    // Générer une image
    await generateImage(0); // Par exemple, le prompt 0 lié au sujet
  
    // Générer une documentation
    await generateHowTo(subject);
  }
  
  async function generateHowTo(subject) {
    // Utilisation du script Groq précédent pour générer des documents markdown
    // ...
  }
  
  // Lancer le processus pour un sujet donné
  generateAssets("intelligence-artificielle");
  