import { Box, Grid, Typography } from "@mui/material";
import styles from "./HomePage.module.css";
import Swiper from "../../components/Swiper/Swiper";
import { SwiperItemType } from "../../components/Swiper/types";
import Penalized from "./Penalized";

export const images: SwiperItemType[] = [
  {
    imageAlt: "1",
    imageSrc: "https://picsum.photos/id/1018/400/400",
  },
  {
    imageAlt: "2",
    imageSrc: "https://picsum.photos/id/1019/400/400",
  },
  {
    imageAlt: "3",
    imageSrc: "https://picsum.photos/id/1020/400/400",
  },
  {
    imageAlt: "4",
    imageSrc: "https://picsum.photos/id/1018/400/400",
  },
  {
    imageAlt: "5",
    imageSrc: "https://picsum.photos/id/1019/400/400",
  },
  {
    imageAlt: "6",
    imageSrc: "https://okdiario.com/img/2019/08/10/origen-del-futbol.jpg",
  },
];

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={7}>
        <Typography variant="h4">jjjsjsjs</Typography>
      </Grid>
      <Grid item xs={5}>
        <Typography variant="h4">jjjsjsjs</Typography>
      </Grid>
    </Grid>
  );
};

export default HomePage;
