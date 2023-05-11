import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Orompello, VillaBerlin } from "./data";
import styles from "./ResultPage.module.css";
const championshipDate = [
  {
    championshipDate: 1,
    dateCreation: "23-23-2023",
    results: [
      {
        category: "senior",
        localTeam: Orompello,
        visitTeam: VillaBerlin,
        localTeamScore: 1,
        visitTeamScore: 1,
        dateGame: "23-23-2023",
      },
      {
        category: "senior",
        localTeam: Orompello,
        visitTeam: VillaBerlin,
        localTeamScore: 1,
        visitTeamScore: 1,
        dateGame: "23-23-2023",
      },
      {
        category: "senior",
        localTeam: Orompello,
        visitTeam: VillaBerlin,
        localTeamScore: 1,
        visitTeamScore: 1,
        dateGame: "23-23-2023",
      },
      {
        category: "senior",
        localTeam: Orompello,
        visitTeam: VillaBerlin,
        localTeamScore: 1,
        visitTeamScore: 1,
        dateGame: "23-23-2023",
      },
      {
        category: "senior",
        localTeam: Orompello,
        visitTeam: VillaBerlin,
        localTeamScore: 1,
        visitTeamScore: 1,
        dateGame: "23-23-2023",
      },
    ],
  },
  {
    championshipDate: 2,
    dateCreation: "23-23-2023",
    results: [
      {
        category: "2da infantil",
        localTeam: Orompello,
        visitTeam: VillaBerlin,
        localTeamScore: 1,
        visitTeamScore: 1,
        dateGame: "23-23-2023",
      },
    ],
  },
];

const ResultsPage = () => {
  return (
    <Grid container>
      <Typography align="center" variant="h5" sx={{ marginBottom: 2 }}>
        <b>RESULTADOS CAMPEONATO OFICIAL {new Date().getFullYear()}</b>
      </Typography>
      <Grid item xs={12} className={styles.container_results}>
        {championshipDate.map((date, key) =>
          date.results.map((result, key) => (
            <Grid key={key} item xs={12} md={6} lg={3} sx={{ padding: 2 }}>
              <Box sx={{ padding: 2, backgroundColor: "blue" }}>
                <Typography align="center" color="white" variant="subtitle1">
                  {result.category.toUpperCase()}
                </Typography>{" "}
                <Box className={styles.container_results}>
                  <Box>
                    <img
                      src={result.localTeam.shield}
                      alt={`${result.localTeam.name}shield`}
                      className={styles.shield}
                    />
                    <Typography
                      align="center"
                      color="white"
                      variant="subtitle1"
                    >
                      {result.localTeam.name}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      align="center"
                      color="white"
                      variant="subtitle1"
                    >
                      {result.localTeamScore} - {result.visitTeamScore}
                    </Typography>
                  </Box>
                  <Box>
                    <img
                      src={result.visitTeam.shield}
                      alt={`${result.visitTeam.name}shield`}
                      className={styles.shield}
                    />
                    <Typography
                      align="center"
                      color="white"
                      variant="subtitle1"
                    >
                      {result.visitTeam.name}
                    </Typography>
                  </Box>{" "}
                </Box>
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default ResultsPage;
