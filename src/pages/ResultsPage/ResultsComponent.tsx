import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styles from "./ResultPage.module.css";

interface Team {
  name: string;
  shield: string;
}

interface Results {
  category: string;
  localTeam: Team;
  visitTeam: Team;
  localTeamScore?: number;
  visitTeamScore?: number;
  dateGame: string;
}

interface Props {
  championshipDate: string;
  results: Results[];
}

const ResultsComponent = ({ championshipDate, results }: Props) => {
  return (
    <>
      <Grid item xs={12} sx={{ padding: 2 }}>
        <Typography align="center" variant="h5">
          {"FECHA"} - {championshipDate}
        </Typography>
        <br />
      </Grid>
      {results.map((result, key) => (
        <Grid key={key} item xs={12} md={6} lg={3} sx={{ padding: 2 }}>
          <Paper sx={{ padding: 2, backgroundColor: "#003366" }}>
            <Typography align="center" color="white" variant="subtitle1">
              {result.category.toUpperCase()}
            </Typography>
            <Box className={styles.container_results}>
              <Box>
                <img
                  src={result.localTeam.shield}
                  alt={`${result.localTeam.name}shield`}
                  className={styles.shield}
                />
                <Typography align="center" color="white" variant="subtitle1">
                  {result.localTeam.name}
                </Typography>
              </Box>
              <Box sx={{marginTop:2}}>
                <Typography align="center" color="white" variant="h5">
                  {result.localTeamScore} - {result.visitTeamScore}
                </Typography>
              </Box>
              <Box>
                <img
                  src={result.visitTeam.shield}
                  alt={`${result.visitTeam.name}shield`}
                  className={styles.shield}
                />
                <Typography align="center" color="white" variant="subtitle1">
                  {result.visitTeam.name}
                </Typography>
              </Box>{" "}
            </Box>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default ResultsComponent;
