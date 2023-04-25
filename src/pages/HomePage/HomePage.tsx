import { Box, Container, Paper, Grid } from "@mui/material";
import styles from "../Pages.module.css";
import Chilenitos from "../../assets/shield/chilenitos.png";
import Orompello from "../../assets/shield/orompello.png";
import Berlin from "../../assets/shield/villaberlin.png";
import styles_page from "./HomePage.module.css";

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
      <Container fixed>
        <Box className={styles.container}>
          <Box className={styles_page.containerTable}>
            <Box className={styles_page.full}></Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box className={styles.sectionTitle}>
                  <></>
                </Box>
              </Grid>
              <Grid className={styles.sectionNews} item xs={6}>
                
              </Grid>
              <Grid className={styles.sectionNews} item xs={6}>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
