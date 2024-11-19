import { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import Positions from "./Positions";
import styles from "../Pages.module.css";
import { PositionsRowTable } from "../../interfaces/IPositionRowTable.interface";
import { teamShields } from "./shields";

const PositionsTablePage = () => {
  const [positions, setPositions] = useState<PositionsRowTable[]>([]);

  useEffect(() => {
    // Simulación de una llamada al backend
    const fetchPositions = async () => {
      const response = await fetch("http://localhost:3001/api/matches/championship/9d299ea6-66bc-4210-b65f-a68cb94a362a/standings"); // URL del backend
      const data: PositionsRowTable[] = await response.json();
      const mappedData = mapShieldsToTeams(data); // Asignar escudos
      setPositions(mappedData);
    };

    fetchPositions();
  }, []);


const mapShieldsToTeams = (data: PositionsRowTable[]): PositionsRowTable[] => {
  return data.map((team) => ({
    ...team,
    shield: teamShields[team.shield] || "", // Escudo o vacío si no existe
  }));
};


  return (
    <Container maxWidth="lg">
      <Box className={styles.container}>
        <Box component="main" className={styles.containerTable}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Positions ligue={"General"} table={positions} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default PositionsTablePage;
