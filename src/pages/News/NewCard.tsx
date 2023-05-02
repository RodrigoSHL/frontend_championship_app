import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function NewCard() {
  return (
    <Card sx={{ width: "auto", margin: "24px" }}>
      <CardMedia
        sx={{ height: "auto" }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Saludamos a Jaime Zapata Rodríguez, entrenador de las selecciones Sub
          15 y Sub 45 de la Asociación de Fútbol Valparaíso, quién fue premiado
          el sábado por el Club de Deportes Everton por ser estar considerado
          entre los jugadores más destacados de esta prestigiosa institución. Un
          saludo y abrazo para nuestro profesor por su destacada trayectoria en
          el fútbol profesional chileno.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Leer más</Button>
      </CardActions>
    </Card>
  );
}
