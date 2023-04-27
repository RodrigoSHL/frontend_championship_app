import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, GridSpacing, Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

interface Image {
  id: number;
  src: string;
}

interface Props {
  images: Image[];
  spacing?: GridSpacing;
}

export const ImageGallery: React.FC<Props> = ({ images, spacing = 2 }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={spacing}>
      {images.map((image) => (
        <Grid key={image.id} item xs={12} sm={6} md={4} lg={3}>
          <img className={classes.image} src={image.src} alt="" />
        </Grid>
      ))}
    </Grid>
  );
};
