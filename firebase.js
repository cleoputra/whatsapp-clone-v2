import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDLkI7q-WguqleLrZQSSp9DKMUIfg5TiGE",
    authDomain: "whatsapp-2-clone-7259a.firebaseapp.com",
    projectId: "whatsapp-2-clone-7259a",
    storageBucket: "whatsapp-2-clone-7259a.appspot.com",
    messagingSenderId: "138721992158",
    appId: "1:138721992158:web:63fd68b731630b2e3ad14f"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };