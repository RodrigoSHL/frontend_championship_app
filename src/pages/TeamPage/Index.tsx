import React from "react";
import { Container } from "@mui/material";
import TeamPage from "./TeamPage";
import { images } from "../NewsPage/NewsPage";

interface Contact {
  address: string;
  email: string;
  phone: string;
  social: string;
}

interface Management {
  id: string;
  name: string;
  position: string;
}

interface GalleryImage {
  id: number;
  src: string;
}

export interface Team {
  name: string;
  shield: string;
  history: string[];
  contact: Contact;
  management: Management[];
  gallery: GalleryImage[];
}

const Team: Team = {
  name: "Orompello",
  shield: "sjsjsj",
  history: [
    "Enclavado en plena avenida Barros Arana del Cerro Esperanza, se levanta orgulloso, enhiesto y con los ojos fijos en el mar, el Club Social y Deportivo Orompello. Han transcurrido 87 años desde que un puñado de visionarios jóvenes porteños decidió formar una agrupación que los cobijara en la práctica de su deporte favorito para, a través de los años, llegar a convertirse en una institución seria, prestigiosa y con muchas páginas de historia.",
    "Aquel grupo de amigos que se juntó en una salita de la escuela de hombres n° 29, jamás imaginó la trascendencia que se lograría con la puesta en marcha de la rama de fútbol, que actualmente cuenta con mas de 200 jugadores. A partir del año 1984, las damas comenzaron a tener una participación mucho mas activa en lo que a deporte se refiere, ya que hasta ése año su participación sólo se limitaba a lo social.",
    "Actualmente contamos con la participación de más de 80 niñas y mujeres basquetbolistas que representan a nuestra Institución.",
    "Desde el año 2016 nuestra Institución da la bienvenida a una nueva rama, el futsal femenino, que prontamente comenzará a competir defendiendo los colores del club.",
  ],
  contact: {
    address: "Barros Arana 275 Cerro Esperanza, Valparaíso",
    email: "clubsocialydeportivoorompello@gmail.com",
    phone: "323207968",
    social: "ClubSocialyDeportivoOrpmpello",
  },
  management: [
    {
      id: "1",
      name: "PAULINA PINOCHET DIAZ",
      position: "Presidente",
    },
    {
      id: "2",
      name: "MARCELA PINOCHET DIAZ",
      position: "Secretaria",
    },
    {
      id: "3",
      name: "FRANCISCA MONTECINO BEHRENDSEN",
      position: "Tesorera",
    },
    {
      id: "4",
      name: "GABRIEL MONTENCINO FUENTES",
      position: "Prosecretaria",
    },
    {
      id: "5",
      name: "LORENA TORO CANELO",
      position: "Protesorero",
    },
    {
      id: "6",
      name: "HERNÁN PIÑA",
      position: "Relacionador Público",
    },
    {
      id: "7",
      name: "RENZO REVECO LETELIER",
      position: "Director",
    },
    {
      id: "8",
      name: "SEBASTIAN MONTENCINO BEHRENDSEN",
      position: "Director",
    },
  ],
  gallery: images
};

const IndexTeamPage = () => {
  return (
    <>
      <Container maxWidth="xl">
        <TeamPage team={Team} />
      </Container>
    </>
  );
};

export default IndexTeamPage;
