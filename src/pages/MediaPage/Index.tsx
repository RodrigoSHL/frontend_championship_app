import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./MediaPage.module.css";

const IndexMediaPage = () => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography align="center" variant="h4" className={styles.subtitle}>
              Galeria Multimedia
            </Typography>
          </Grid>
          <Grid item xs={12} className={styles.news_container}>
            
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default IndexMediaPage;
