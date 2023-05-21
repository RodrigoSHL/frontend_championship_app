import React from "react";
import { AlianzaRecreo, Orompello } from "../ResultsPage/data";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styles from "./HomePage.module.css";

interface Team {
    name: string;
    shield: string;
}

interface IPenalized {
    name: string;
    team: Team;
    division: string;
    penalization: string;
}

const penalizedPlayers: IPenalized[] = [
  {
    name: "Jorge Honores. M",
    team: AlianzaRecreo,
    division: "Senior",
    penalization: "1 Año",
  },
];

const Penalized = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={5}>
              <b>{"Tabla de Sancionados 2023"}</b>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">N°</TableCell>
            <TableCell align="center" colSpan={2}>
              Club
            </TableCell>
            <TableCell align="center">División</TableCell>
            <TableCell align="center">Tiempo de Sanción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {penalizedPlayers.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="right">
                <img
                  src={row.team.shield}
                  alt="Descripción de la imagen"
                  className={styles.shield}
                />
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="center">{row.division}</TableCell>
              <TableCell align="center">{row.penalization}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Penalized;
