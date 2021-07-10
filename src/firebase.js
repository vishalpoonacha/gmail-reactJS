import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiALI1n_tKcMBp6bGlkU7hsH0lL5hLDps",
  authDomain: "clone-670cc.firebaseapp.com",
  projectId: "clone-670cc",
  storageBucket: "clone-670cc.appspot.com",
  messagingSenderId: "371144524903",
  appId: "1:371144524903:web:519dca5138fc53275700c2",
  measurementId: "G-0YB37KCJW1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
