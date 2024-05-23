import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "genimea-e82de.firebaseapp.com",
  databaseURL:
    "https://genimea-e82de-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "genimea-e82de",
  storageBucket: "genimea-e82de.appspot.com",
  messagingSenderId: "504612996339",
  appId: "1:504612996339:web:60aecb6b4571604d762386",
};

// Vérifier si Firebase a déjà été initialisé
let app: FirebaseApp; // Typage explicite de `app`
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, auth, database, storage };
