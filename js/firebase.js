/********************************************** 
* Renomeie este arquivo para firebase.js!
***********************************************/

// Cole as informações do seu RealTime Database do Firebase abaixo:
const firebaseConfig = {
  apiKey: "AIzaSyBQp63xgyOZLOFo_tD3gUYdlODB5WCYQ8U",
  authDomain: "prg-int.firebaseapp.com",
  projectId: "prg-int",
  storageBucket: "prg-int.appspot.com",
  messagingSenderId: "117536656081",
  appId: "1:117536656081:web:e6535cd9d260a5bc07d3f0",
  measurementId: "G-TW923XXRPJ"
};

// Iniciando o Firebase //
firebase.initializeApp(firebaseConfig)
var database=firebase.database


/*
* Nas regras do Realtime Database, informe:
* {
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
*/

