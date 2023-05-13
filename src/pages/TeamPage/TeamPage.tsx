import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Team } from "./Index";

interface Props {
  team: Team
}

const TeamPage = ({team}:Props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography align="center" variant="h4">
          Noticias
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={{display:'flex', flexDirection: 'column'}}>
        <Box> info </Box>
        <Box> historia</Box>

      </Grid>
      <Grid item xs={12} md={6}>
      <Box> dirigentes</Box>

      </Grid>
      <Grid item xs={12}>
        <Box>Galeria</Box>
      </Grid>
    </Grid>
  );
};

export default TeamPage;
