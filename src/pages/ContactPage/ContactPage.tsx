import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./ContactPage.module.css";
import { useEmailSender } from "../../hooks/useEmailSender";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { sendEmail, isSending, error, success } = useEmailSender();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(
      `Nombre: ${name}, Email: ${email}, Teléfono: ${phone}, Mensaje: ${message}`
    );
    sendEmail('shl.catalan@gmail.com', '[contacto desde pagina web]', message);
  };

  return (
    <form className={styles.containerMargin} onSubmit={handleSubmit}>
      <TextField
        label="Nombre"
        value={name}
        onChange={(event) => setName(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Teléfono"
        type="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Mensaje"
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        fullWidth
        margin="normal"
      />
      <br />
      <br />

      <Button fullWidth type="submit" variant="contained">
        Enviar
      </Button>
      {success && <p>¡Correo electrónico enviado con éxito!</p>}
      {error && <p>Error al enviar el correo electrónico: {error.message}</p>}
    </form>
  );
};

export default ContactForm;
