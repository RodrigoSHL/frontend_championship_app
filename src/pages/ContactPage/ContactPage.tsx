import React, { useState } from "react";
import { TextField, TextareaAutosize, Button } from "@mui/material";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(
      `Nombre: ${name}, Email: ${email}, Teléfono: ${phone}, Mensaje: ${message}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <TextareaAutosize
        placeholder="Mensaje"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        minRows={3}

      />
      <Button type="submit" variant="contained">
        Enviar
      </Button>
    </form>
  );
};

export default ContactForm;
