import * as React from "react";
import { Grid, GridSpacing, Theme } from "@mui/material";
import styles from "./NewsPage.module.css";

interface Image {
  id: number;
  src: string;
}

interface Props {
  images: Image[];
  spacing?: GridSpacing;
}

export const ImageGallery: React.FC<Props> = ({ images, spacing = 2 }) => {

  return (
    <Grid container spacing={spacing} className={styles.img_container}>
      {images.map((image) => (
        <Grid className={styles.root} key={image.id} item xs={12} sm={6} md={4} lg={3}>
          <img className={styles.image} src={image.src} alt="" />
        </Grid>
      ))}
    </Grid>
  );
};
