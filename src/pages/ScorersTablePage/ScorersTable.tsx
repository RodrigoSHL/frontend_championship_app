import { Box, Container, Grid } from "@mui/material";
import Scorers from "./Scorers";
import styles from "../Pages.module.css";
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

const ScorersTablePage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box component="main" className={styles.containerTable}>
            <>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Scorers ligue={"Honor"} table={rowTables} />
                </Grid>
                <Grid item xs={6}>
                  <Scorers ligue={"Honor"} table={rowTables} />
                </Grid>
              </Grid>
            </>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ScorersTablePage;
