import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./PositionsTable.module.css";
import { PositionsRowTable } from "../../interfaces/IPositionRowTable.interface";

interface Props {
  ligue: string;
  table: PositionsRowTable[];
}

const Positions = ({ ligue = "HONOR", table }: Props) => {
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
            <TableCell align="center">PJ</TableCell>
            <TableCell align="center">GF</TableCell>
            <TableCell align="center">GC</TableCell>
            <TableCell align="center">DIF</TableCell>
            <TableCell align="center">PTS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((row, index) => (
            <TableRow
              key={row.teamId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="right">
                {row.shield && (
                  <img
                    src={row.shield}
                    alt={row.teamName}
                    className={styles.shield}
                  />
                )}
              </TableCell>
              <TableCell align="left">{row.teamName}</TableCell>
              <TableCell align="center">{row.matchesPlayed}</TableCell>
              <TableCell align="center">{row.goalsFor}</TableCell>
              <TableCell align="center">{row.goalsAgainst}</TableCell>
              <TableCell align="center">{row.goalDifference}</TableCell>
              <TableCell align="center">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Positions;
