import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.config";

// Fonction pour s'authentifier avec l'email et le mot de passe
export const signInWithEmailPassword = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Connexion réussie
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        // Une erreur s'est produite lors de la connexion
        const errorCode = error.code;
        const errorMessage = error.message;
        reject({ errorCode, errorMessage });
      });
  });
};

// Fonction pour se déconnecter
export const signOutUser = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        // Déconnexion réussie
        resolve();
      })
      .catch((error) => {
        // Une erreur s'est produite lors de la déconnexion
        reject(error);
      });
  });
};

// Fonction pour envoyer un email de réinitialisation de mot de passe
export const sendPasswordReset = (email: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Email de réinitialisation envoyé avec succès
        resolve();
      })
      .catch((error) => {
        // Une erreur s'est produite lors de l'envoi de l'email de réinitialisation
        const errorCode = error.code;
        const errorMessage = error.message;
        reject({ errorCode, errorMessage });
      });
  });
};
