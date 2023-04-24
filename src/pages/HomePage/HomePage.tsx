import { Box, Container, Paper, Grid } from "@mui/material";
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

const HomePage = () => {
  return (
    <>
      <Container>
        <Box className={styles.container}>
          <Box component="main" className={styles.containerTable}>
            <>
              <Grid container spacing={2}>
               HOLO
              </Grid>
            </>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
