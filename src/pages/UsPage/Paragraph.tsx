import { Typography } from "@mui/material";
import React from "react";
import styles from "./UsPage.module.css";

interface Props {
  text: string;
}
const Paragraph = ({ text }: Props) => {
  return (
    <Typography align="justify" variant="body2">
      {text}
    </Typography>
  );
};

export default Paragraph;
