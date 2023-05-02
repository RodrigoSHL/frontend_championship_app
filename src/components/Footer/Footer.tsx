import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "./Footer.module.css";
import Chilenitos from "../../assets/shield/chilenitos.png";
import Orompello from "../../assets/shield/orompello.png";
import Berlin from "../../assets/shield/villaberlin.png";

const arrShield = [
  {
    shield: Chilenitos,
    name: "Chilenitos",
  },
  {
    shield: Orompello,
    name: "Orompello",
  },
  {
    shield: Berlin,
    name: "Villa Berlín",
  },
  {
    shield: Chilenitos,
    name: "Chilenitos",
  },
  {
    shield: Orompello,
    name: "Orompello",
  },
  {
    shield: Berlin,
    name: "Villa Berlín",
  },
  {
    shield: Chilenitos,
    name: "Chilenitos",
  },
  {
    shield: Orompello,
    name: "Orompello",
  },
  {
    shield: Berlin,
    name: "Villa Berlín",
  },
];

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="xl">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5" sx={{ margin: 3}}>
              Clubes pertenecientes a la Asociación
            </Typography>
          </Grid>
          <Grid item xs={12} className={styles.container}>
            {arrShield.map((row, key) => (
              <Box key={key} className={styles.containerShield}>
                <img
                  src={row.shield}
                  alt={`${row.name}shield`}
                  className={styles.shield}
                />
                <Typography align="center" color="white" variant="subtitle1">
                  {row.name}
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" color="white" variant="caption">
              {`ASOCIACIÓN DE FUTBOL VALPARAÍSO, ${new Date().getFullYear()} - FUNDADO EL 16/06/1894 | DIRECCIÓN: Frankfurt 116, Los Placeres, Valparaíso  | FONO: 32 - 2619179 | MAIL: asocfutbolvalpo@gmail.com`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
