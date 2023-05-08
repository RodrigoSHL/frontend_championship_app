import { Container, Grid, Paper, Typography } from "@mui/material";
import styles from "./UsPage.module.css";

const IndexUsPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Typography align="center" variant="h4" className={styles.subtitle}>
              Quiénes Somos
            </Typography>
          </Grid>

          <Paper className={styles.paper_container}>
            <Grid item xs={12}>
              <Typography
                align="justify"
                variant="body2"
                className={styles.body_text}
              >
                El 19 de junio de 1894, en la Casa de Botes de Valparaíso, se
                juntaron los representantes de los clubes Valparaíso Football
                Club, Mackay and Sutherland Football Club, Chilian Football
                Club, National Football Club y el Colegio San Luis, para formar
                el Comitee of Sports, con el objetivo de fomentar la práctica
                deportiva en el puerto.
              </Typography>

              <Typography
                align="justify"
                variant="body2"
                className={styles.body_text}
              >
                Al año siguiente, en el Café Pacífico de la Calle del Cabo en
                Valparaíso, los miembros del Comitee of Sports decidieron
                juntarse, el 19 de junio de 1895 a las 20:30 horas, para dar
                forma a la primera asociación de clubes de fútbol del país: la
                Football Association of Chile (FAC). En dicha reunión
                participaron seis clubes: Valparaíso, Mackay and Sutherland,
                Chilian, Victoria Rangers, National y Valparaíso Wanderers [nota
                1]. Como estímulo para futuras competencias, la casa Tolson &
                Osborne ofreció una copa de plata. Si un club la ganaba en dos
                años consecutivos o en tres alternados, se la adjudicaba y
                pasaba a ser de su absoluta propiedad.
              </Typography>

              <Typography
                align="justify"
                variant="body2"
                className={styles.body_text}
              >
                La primera reunión de la entidad fue dirigida por R. W. Bailey,
                de quien se dice que fue la primera persona en importar a Chile
                un balón de fútbol desde Inglaterra [6]. La primera directiva
                estuvo formada por: David N. Scott (presidente), Andrés Gemmell
                (secretario) y Robert H. Reid (tesorero), periodista del diario
                The Chilian Times de Valparaíso. Se acordó, además, que cada
                club debía pagarse una cuota anual de $5.
              </Typography>

              <Typography
                align="justify"
                variant="body2"
                className={styles.body_text}
              >
                En sus primeros años, la Football Association of Chile sólo
                tenía injerencia sobre los clubes de Valparaíso y mantenía
                buenas relaciones con clubes y federaciones de Santiago,
                Concepción, Coquimbo y Antofagasta, pero su influencia no iba
                más allá.
              </Typography>
              <Typography
                align="justify"
                variant="body2"
                className={styles.body_text}
              >
                Bajo su organización se disputó la Challenge Cup [7] y con
                posterioridad, tres competiciones oficiales: la Copa Sporting,
                la Copa Mac Clelland y la League [8]. Sin embargo, hay versiones
                que plantean que la Copa Mac Clelland y la League constituyen el
                mismo torneo, documentado de maneras distintas por la prensa de
                la época. En estas competiciones participaban equipo tales como:
                Valparaíso, Santiago Wanderers, Badminton, Chilian, Mackay and
                Sutherland, Victoria Rangers, Gold Cross, Williamson, National,
                Unión Edwards, Jorge VI, Valparaíso Wanderers y La Cruz.
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default IndexUsPage;
