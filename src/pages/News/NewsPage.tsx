import React from "react";
import { Box } from "@mui/material";
import styles from "./NewsPage.module.css";

const NewsPage = () => {
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.box}>1</Box>
        <Box className={styles.box}>2</Box>
        <Box className={styles.box}>3</Box>
      </Box>
    </>
  );
};

export default NewsPage;
