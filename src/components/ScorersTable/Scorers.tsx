import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./ScorersTable.module.css";

interface ScorersRowTable {
  shield: string;
  team: string;
  name: string;
  goals: number;
}

interface Props {
  ligue: string;
  table: ScorersRowTable[];
}

const Scorers = ({ ligue = "HONOR", table }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={5}>
              <b>{ligue}</b>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Pos</TableCell>
            <TableCell align="center" colSpan={2}>
              Club
            </TableCell>
            <TableCell align="center">Nombre Jugador</TableCell>
            <TableCell align="center">Goles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="right">
                <img
                  src={row.shield}
                  alt="Descripción de la imagen"
                  className={styles.shield}
                />
              </TableCell>
              <TableCell align="left">{row.team}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.goals}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Scorers;
