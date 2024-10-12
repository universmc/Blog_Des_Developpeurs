const { ipcRenderer } = require('electron');


// Naviguer vers la page 'about'
document.getElementById('about-button').addEventListener('click', () => {
  window.location.href = 'about.html';
});
