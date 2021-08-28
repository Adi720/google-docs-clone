import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAYVvIZp1IrxLwfJCicVb0ggsvUmyP-CJU",
    authDomain: "docs-9577a.firebaseapp.com",
    projectId: "docs-9577a",
    storageBucket: "docs-9577a.appspot.com",
    messagingSenderId: "121754501146",
    appId: "1:121754501146:web:7b19adb10dadc0896911a3"
};

// as nextjs has server side rendering then in case if app is already initialized
const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export { db };