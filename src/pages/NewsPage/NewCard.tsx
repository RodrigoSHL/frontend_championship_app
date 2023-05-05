import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { News } from "../../interfaces/INews.interface";

interface Props {
  news: News;
}
export default function NewCard({news}: Props) {
  return (
    <Card sx={{ maxWidth: 345, margin:2 }}>
      <CardMedia
        sx={{ height: 140 }}
        title="green iguana"
        image={news.images[0].src}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {news.title}
        </Typography>
        <Typography gutterBottom variant="overline" component="div">
          {news.date}
        </Typography>
        <Typography align="justify" variant="body2" color="text.secondary">
          {news.description.substring(0,280) + '...'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Leer más</Button>
      </CardActions>
    </Card>
  );
}
