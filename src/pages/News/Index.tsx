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
    src: "https://picsum.photos/id/1020/400/400",
  },
];
const IndexNewsPage = () => {
  return (
    <>
      <Box className={styles.container}>
         <NewCard/>
         <ImageGallery images={images}/>

      </Box>
    </>
  );
};

export default IndexNewsPage;
