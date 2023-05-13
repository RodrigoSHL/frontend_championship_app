import { Container, Grid, Typography, Paper } from "@mui/material";
import { ImageGallery } from "./ImageGallery";
import styles from "./NewsPage.module.css";

export const images = [
  {
    id: 1,
    src: "https://picsum.photos/id/1018/400/400",
  },
  {
    id: 2,
    src: "https://picsum.photos/id/1019/400/400",
  },
  {
    id: 3,
    src: "https://picsum.photos/id/1020/400/400",
  },
  {
    id: 4,
    src: "https://picsum.photos/id/1018/400/400",
  },
  {
    id: 5,
    src: "https://picsum.photos/id/1019/400/400",
  },
  {
    id: 6,
    src: "https://okdiario.com/img/2019/08/10/origen-del-futbol.jpg",
  },
];

const news = {
  title: "Jornada de Premiación Apertura 2019",
  date: "Wednesday, May 3, 2023",
  description:
    "El Día sábado 25 de Abril, se llevó a cabo la premiación del torneo de Apertura 2019, esta actividad se realizó durante la tarde donde todos los clubes de la Asociación participaron en partidos amistosos con sus diferentes divisiones, donde partició Tercera Infantil, Segunda Infantil, Primera Infantil, Fútbol Femenino, Además se invitó a participar en estos partidos amistosos a la escuela de Fútbol Santiago Wanderers.  ",
  images: images,
};

const NewsPage = () => {
  return (
    <>
      <Paper sx={{ padding: 5 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className={styles.title}>
              {news.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" className={styles.subtitle}>
              {news.date}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">{news.description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <ImageGallery images={news.images} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default NewsPage;
