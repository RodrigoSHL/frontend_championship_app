import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import honor from "./honor.jpg";

export default function ActionAreaCard() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={honor}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Chilenitos
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Campeón Honor Apertura Adulto 2019
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, mt: 2 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Matias Mora (Villa Berlín)
            </Typography>
            
            <Typography variant="body1" color="text.secondary">
              Goleador Honor Apertura Adulto 2019
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
