import { Box, Container, Paper, Grid } from "@mui/material";
import Scorers from "./Scorers";
import styles from "./ScorersTable.module.css";
import Chilenitos from "../../assets/shield/chilenitos.png";
import Orompello from "../../assets/shield/orompello.png";
import Berlin from "../../assets/shield/villaberlin.png";

interface ScorersRowTable {
  shield: string;
  team: string;
  name: string;
  goals: number;
}

const rowTables: ScorersRowTable[] = [
  { shield: Chilenitos, team: "Chilenitos", name: "Alfonso Urbina", goals: 3 },
  { shield: Orompello, team: "Orompello", name: "Mauricio Ortiz", goals: 3 },
  { shield: Berlin, team: "Villa Berlín", name: "Benjamin Correa", goals: 3 },
];

const ScorersTable = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box component="main" className={styles.containerTable}>
            <Paper>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Scorers ligue={"Honor"} table={rowTables} />
                </Grid>
                <Grid item xs={6}>
                  <Scorers ligue={"Honor"} table={rowTables} />
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ScorersTable;
