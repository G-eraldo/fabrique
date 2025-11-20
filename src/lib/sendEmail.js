"use server";

import { resend } from "./resend";

export async function submitForm(prevState, formData) {
  try {
    const nom = formData.get("name");
    const email = formData.get("email");
    const project = formData.get("projectType");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Vérification de la longueur minimale du message
    if (message && message.trim().length < 2) {
      return {
        success: false,
        message:
          "Votre message est trop court. Veuillez écrire un message plus détaillé.",
      };
    }

    await resend.emails.send({
      from: "contact@lafabriqueducode.fr",
      to: `contact@lafabriqueducode.fr`,
      subject: "Nouveau formulaire de contact",
      text: `Bonjour Gérald, tu as une nouvelle demande de contact de ${nom}.\n\nVoici son message:\n${message}\n\nTu peux la recontacter à l'adresse suivante: ${email} ou au ${phone} pour un projet de type: ${project}.\n\nCordialement,\nLa Fabrique du code`,
    });
    console.log(`Nouvelle demande reçue de ${nom} (${email})`);

    return {
      success: true,
      message: `Merci ${nom} ! Votre message a été enovoyé avec succès. Nous vous contacterons bientôt sur ${email}.`,
    };
  } catch (error) {
    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
    };
  }
}
