import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./FixturePage.module.css";
import { Orompello, VillaBerlin } from "../ResultsPage/data";
import ResultsComponent from "../ResultsPage/ResultsComponent";

const championshipDate = [
  {
    championshipDate: "2",
    dateCreation: "23-23-2023",
    results: [
      {
        category: "senior",
        localTeam: Orompello,
        visitTeam: VillaBerlin,
        dateGame: "23-23-2023",
      },
      {
        category: "senior",
        localTeam: Orompello,
        visitTeam: VillaBerlin,
        dateGame: "23-23-2023",
      },
    ],
  },
];

const FixturePage = () => {
  return (
    <Grid container>
      <Typography align="center" variant="h5" sx={{ marginBottom: 2 }}>
        <b>FIXTURE CAMPEONATO OFICIAL {new Date().getFullYear()}</b>
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

export default FixturePage;
