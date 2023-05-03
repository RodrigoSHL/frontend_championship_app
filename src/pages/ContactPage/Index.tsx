import React from "react";
import ContactForm from "./ContactPage";
import { Container, Grid, Typography } from "@mui/material";
const IndexContactPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container maxWidth="xs" spacing={2}>
        <Grid item xs={12}>
            <Typography align="center" variant="h4">
              CONTACTO
            </Typography>
        </Grid>

          <Grid item xs={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default IndexContactPage;
