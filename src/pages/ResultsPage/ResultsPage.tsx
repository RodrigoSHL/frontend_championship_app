import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Orompello, VillaBerlin } from "./data";
import styles from "./ResultPage.module.css";
import ResultsComponent from "./ResultsComponent";
const championshipDate = [
  {
    championshipDate: "1",
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
    championshipDate: "2",
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
        {championshipDate.map((date, key) => (
          <ResultsComponent
            key={key}
            championshipDate={date.championshipDate}
            results={date.results}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default ResultsPage;
