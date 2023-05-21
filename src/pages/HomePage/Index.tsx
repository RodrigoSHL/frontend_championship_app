import { Container, Grid, Typography } from "@mui/material";
import HomePage from "./HomePage";
import Penalized from "./Penalized";

const IndexHomePage = () => {
  return (
    <>
      <HomePage />
      <Container maxWidth="md">
        <Grid item xs={12}>
          <Penalized />
        </Grid>
      </Container>
    </>
  );
};

export default IndexHomePage;
