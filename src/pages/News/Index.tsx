import React from "react";
import { Box } from "@mui/material";
import styles from "./NewsPage.module.css";
import NewCard from "./NewCard";
import { ImageGallery } from "./ImageGallery";
const images = [
  {
    id: 1,
    src: "https://picsum.photos/id/1018/400/400",
  },
  {
    id: 2,
    src: "https://picsum.photos/id/1019/400/400",
  },
  {
    id: 3,
    src: "https://picsum.photos/id/1020/400/400",
  },
  {
    id: 1,
    src: "https://picsum.photos/id/1018/400/400",
  },
  {
    id: 2,
    src: "https://picsum.photos/id/1019/400/400",
  },
  {
    id: 3,
    src: "https://okdiario.com/img/2019/08/10/origen-del-futbol.jpg",
  },
];
const IndexNewsPage = () => {
  return (
    <>
      <Box className={styles.container}>
        <Box sx={{ flex: 1 }}>
          <NewCard />
        </Box>
        <Box sx={{ flex: 1}}>
          <ImageGallery images={images} />
        </Box>
      </Box>
    </>
  );
};

export default IndexNewsPage;
