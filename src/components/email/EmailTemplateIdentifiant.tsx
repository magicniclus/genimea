/* eslint-disable @next/next/no-img-element */
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import * as React from "react";

// Définition de l'interface pour les props
interface EmailTemplateProps {
  email: string;
  motDePasse: string;
}

// Ajout du formatage pour inclure l'heure
const currentDate = format(new Date(), "dd/MM/yyyy HH:mm", { locale: fr });

export const EmailTemplateIdentifiant: React.FC<EmailTemplateProps> = ({
  email,
  motDePasse,
}) => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      border: "1px solid #e3e3e3",
      maxWidth: "600px",
      margin: "20px auto",
    },
    header: {
      color: "#164e63",
      borderBottom: "2px solid #164e63",
      paddingBottom: "10px",
    },
    subHeader: {
      fontWeight: "bold",
      color: "#333",
    },
    paragraph: {
      color: "#666",
    },
    signature: {
      paddingTop: "20px",
      borderTop: "1px solid #ddd",
      marginTop: "20px",
      textAlign: "center",
    },
    signatureText: {
      color: "#444",
      fontSize: "12px",
      lineHeight: "18px",
    },
    logo: {
      height: "50px", // Hauteur du logo
      width: "auto",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        Hello, you will find in this email your login credentials to access your
        personal space.
      </h2>
      <p style={styles.paragraph}>Creation date: {currentDate}</p>
      <h3 style={styles.subHeader}>Credentials:</h3>
      <p style={styles.paragraph}>Email: {email}</p>
      <p style={styles.paragraph}>Password: {motDePasse}</p>

      {/* Signature Section */}
      <div style={styles.signature as React.CSSProperties}>
        <img src="@/public/logo.png" alt="Company Logo" style={styles.logo} />
        <p style={styles.signatureText}>
          Contact us: <br />
          Email:{" "}
          <a href="mailto:contact@info-autoentreprise.fr">
            contact@info-autoentreprise.fr
          </a>{" "}
          <br />
          {/* Phone: <a href="tel:0956342341">0956342341</a> */}
        </p>
      </div>
    </div>
  );
};
