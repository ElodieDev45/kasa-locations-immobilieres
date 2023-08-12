import React from 'react';
//import fonctions spéciales React (hook)
import {createRoot} from 'react-dom/client';
//import lien vers App
import App from './App.js'
//import fichier styles
import '../src/styles/styles.scss';

//création de la racine de l'application dans le DOM
const root = createRoot(document.getElementById('root'));

//rendu du composant App dans le strictMode react pour affichage des erreurs ou conflits possibles
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
