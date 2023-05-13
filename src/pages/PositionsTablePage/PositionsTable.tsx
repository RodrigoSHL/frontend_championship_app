import { Box, Container, Grid } from "@mui/material";
import Positions from "./Positions";
import styles from "../Pages.module.css";
import Chilenitos from "../../assets/shield/chilenitos.png";
import Orompello from "../../assets/shield/orompello.png";
import Berlin from "../../assets/shield/villaberlin.png";

export interface PositionsRowTable {
  shield: string;
  team: string;
  pj: number;
  gf: number;
  gc: number;
  dif: number;
  pts: number;
}

const rowTables: PositionsRowTable[] = [
  {
    shield: Chilenitos,
    team: "Chilenitos",
    pj: 3,
    gf: 3,
    gc: 3,
    dif: 3,
    pts: 3,
  },
  {
    shield: Chilenitos,
    team: "Chilenitos",
    pj: 3,
    gf: 3,
    gc: 3,
    dif: 3,
    pts: 3,
  },
  {
    shield: Chilenitos,
    team: "Chilenitos",
    pj: 3,
    gf: 3,
    gc: 3,
    dif: 3,
    pts: 3,
  },
  {
    shield: Chilenitos,
    team: "Chilenitos",
    pj: 3,
    gf: 3,
    gc: 3,
    dif: 3,
    pts: 3,
  },
  {
    shield: Chilenitos,
    team: "Chilenitos",
    pj: 3,
    gf: 3,
    gc: 3,
    dif: 3,
    pts: 3,
  },
];

const PositionsTablePage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box component="main" className={styles.containerTable}>
            <>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Positions ligue={"General"} table={rowTables} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Positions ligue={"Honor"} table={rowTables} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Positions ligue={"Honor"} table={rowTables} />
                </Grid>
              </Grid>
            </>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PositionsTablePage;
