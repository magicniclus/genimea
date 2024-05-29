/* eslint-disable import/no-anonymous-default-export */
import sgMail from "@sendgrid/mail";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import ReactDOMServer from "react-dom/server"; // Assurez-vous d'avoir react-dom installé
import { EmailTemplateIdentifiant } from "../../src/components/email/EmailTemplateIdentifiant";

// Configurez SendGrid avec votre clé API
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    const { email, motDePasse } = req.body;
    const currentDate = format(new Date(), "dd/MM/yyyy HH:mm", { locale: fr });

    const emailContent = ReactDOMServer.renderToString(
      <EmailTemplateIdentifiant
        email={email}
        motDePasse={motDePasse}
        currentDate={currentDate}
      />
    );

    const msg = {
      to: email, // Assurez-vous que cette adresse est valide
      from: "nouveaucontact@prospect-manager.fr",
      subject:
        "Important: Your login details for accessing your personal space",
      html: emailContent,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Email envoyé avec succès" });
    } catch (error) {
      console.error("Erreur SendGrid:", error.response?.body);
      res.status(400).json({
        message: "Erreur lors de l'envoi de l'email.",
        details: error.response?.body,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message, stack: error.stack });
  }
};
