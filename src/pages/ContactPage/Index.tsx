import React from "react";
import ContactForm from "./ContactPage";
import { Container, Grid, Typography } from "@mui/material";
const IndexContactPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container maxWidth="xs" spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" variant="h4" sx={{ margin: 3 }}>
              CONTACTO
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} >
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3329.2529039297824!2d-70.670397!3d-33.44271700000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c45345f5329f%3A0x7b7403dfd59d9f3c!2sGral.%20Bulnes%20216%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1sen!2sus!4v1683088564845!5m2!1sen!2sus"
              width="600"
              height="400"
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default IndexContactPage;
