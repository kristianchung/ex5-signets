/*
  Ce fichier contient les variables de configuration
  reliées à Firebase et ses produits.
*/

// Configuration Firebase (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyBIF5K08DzKaALLSoCx7vogyL78YJSs4GU",
  authDomain: "pvt-kc-h21.firebaseapp.com",
  databaseURL: "https://pvt-kc-h21-default-rtdb.firebaseio.com",
  projectId: "pvt-kc-h21",
  storageBucket: "pvt-kc-h21.appspot.com",
  messagingSenderId: "625754499706",
  appId: "1:625754499706:web:fc88dd537e64b60a8ea9c3"
};

export default firebaseConfig;

// Nom de la collection principale
export const utilRef = "utilisateurs-ex5";
// Nom de la sous-collection
export const dossRef = "dossiers";