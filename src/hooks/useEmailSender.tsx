import React, { useState } from "react";
//import nodemailer, { Transporter } from "nodemailer";

interface EmailSender {
  sendEmail: (to: string, subject: string, text: string) => void;
  isSending: boolean;
  error: Error | null;
  success: boolean;
}

export const useEmailSender = (): EmailSender => {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (to: string, subject: string, text: string) => {
    setIsSending(true);
    setError(null);
    setSuccess(false);

    try {
      // Configurar el transporte de Nodemailer
      // Configura el transporte de Nodemailer con las credenciales de Mailtrap
    //   const transporter: Transporter = nodemailer.createTransport({
    //     host: "sandbox.smtp.mailtrap.io",
    //     port: 587,
    //     auth: {
    //       user: "6b10f45dc7b17a",
    //       pass: "880bc8a64b7368",
    //     },
    //   });

      // Configurar el mensaje de correo electrónico
      const mailOptions = {
        from: "tu@email.com",
        to,
        subject,
        text,
      };

    //   // Enviar el correo electrónico
    //   await transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //       console.log("Error al enviar el correo electrónico:", error);
    //     } else {
    //       console.log("Correo electrónico enviado:", info.response);
    //     }
    //   });

      setSuccess(true);
    } catch (error: any) {
      setError(error);
    }

    setIsSending(false);
  };

  return { sendEmail, isSending, error, success };
};
