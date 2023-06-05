import { Container, Grid } from "@mui/material";
import React from "react";
import ChampionsPage from "./ChampionsPage";

const champions = [
    {
        team: "Chilenitos",
        league: "Honor",
        image: "asdasdsad",
        year: "2023"
    },

]

const ChampionsIndex = () => {
  return (
    <Container maxWidth="lg">
      <Grid item xs={6} sx={{ mt: 5 }}>
        <ChampionsPage />
      </Grid>
    </Container>
  );
};

export default ChampionsIndex;
