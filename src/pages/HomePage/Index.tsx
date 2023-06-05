import { Container, Grid, Typography } from "@mui/material";
import HomePage from "./HomePage";
import Penalized from "./Penalized";
import ChampionsPage from "./ChampionsPage";
import ChampionsIndex from "./ChampionsIndex";

const IndexHomePage = () => {
  return (
    <>
      <HomePage />
      <Container maxWidth="md">
        <Grid item xs={12}  sx={{mt:5}}>
          <Penalized />
        </Grid>
      </Container>
      <ChampionsIndex/>
    </>
  );
};

export default IndexHomePage;
