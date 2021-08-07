import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBduZUrcPu8fNBdbcOTGu6spKwOAU1qN7I",
    authDomain: "discord-8b9b8.firebaseapp.com",
    projectId: "discord-8b9b8",
    storageBucket: "discord-8b9b8.appspot.com",
    messagingSenderId: "113634100229",
    appId: "1:113634100229:web:bd0c7d1d434997738d486c",
    measurementId: "G-0JNT1EFPBD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider };
  export default db;