async function promptLoopStep(steps) {
    for (let step of steps) {
      console.log(`Traitement de l'étape: ${step.Identifiant} - ${step.Étape}`);
  
      // Exécution des tâches frontend, si spécifiées
      if (step.ÉtatFrontend) {
        await handleFrontendTasks(step.ÉtatFrontend);
      }
  
      // Exécution des tâches backend, si spécifiées
      if (step.ÉtatBackend) {
        await handleBackendTasks(step.ÉtatBackend);
      }
  
      // Exécution du prompt API REST pour l'étape en cours
      if (step.Prompt) {
        await executeApiRequest(step.Prompt);
      }
  
      console.log(`Étape ${step.Identifiant} terminée.`);
    }
  }
  
  async function handleFrontendTasks(frontendState) {
    // Logique pour gérer les tâches frontend
    console.log("Gestion des tâches frontend...");
    // ... Votre logique ici
  }
  
  async function handleBackendTasks(backendState) {
    // Logique pour gérer les tâches backend
    console.log("Gestion des tâches backend...");
    // ... Votre logique ici
  }
  
  async function executeApiRequest(prompt) {
    // Logique pour exécuter une requête API REST basée sur le prompt
    console.log(`Exécution de la requête API pour le prompt: ${prompt}`);
    // ... Votre logique de requête API ici
  }
  
  // Exemple d'utilisation avec un tableau d'étapes (à remplacer par vos données JSON)
  const steps = [
    // ... Vos étapes JSON ici
  ];
  
  promptLoopStep(steps).then(() => {
    console.log("Toutes les étapes ont été traitées.");
  });
  