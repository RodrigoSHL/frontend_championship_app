import { Box, Container, Grid } from "@mui/material";
import styles_core from "../Pages.module.css";
import styles from "./HomePage.module.css";
import NewCard from "../News/NewCard";

const HomePage = () => {
  return (
    <>
      <Container>
        <Box className={styles_core.container}>
          <Box className={styles.containerTable}>
            <Box className={styles.full}></Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box className={styles.sectionTitle}></Box>
              </Grid>
              <Grid className={styles.sectionNew} item xs={6}></Grid>
              <Grid className={styles.sectionPhotosNew} item xs={6}>
                <NewCard />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
