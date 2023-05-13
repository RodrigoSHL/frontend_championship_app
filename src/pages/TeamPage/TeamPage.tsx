import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Team } from "./Index";
import InboxIcon from "@mui/icons-material/Inbox";
import PersonIcon from "@mui/icons-material/Person";

interface Props {
  team: Team;
}

const TeamPage = ({ team }: Props) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            {"Club " + team.name}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Paper sx={{ padding: 2, my: 3 }}>
            <Box>
              <Typography align="justify" variant="h6">
                Datos de contacto:
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={team.contact.address} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={team.contact.email} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={team.contact.phone} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={team.contact.social} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Paper>

          <Box>
            <Typography align="justify" variant="h6">
              Breve Reseña
            </Typography>
            {team.history.map((row, index) => (
              <>
                <Typography key={index} align="justify" variant="body2">
                  {row}
                </Typography>
                <br />
              </>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", justifyContent: 'center' }}
        >
          <Paper sx={{ padding: 2, my: 3, ml: 2, width: 'auto' }}>
            <Box>
              <Typography align="justify" variant="h6">
                {"Dirigentes del Club " + `(${new Date().getFullYear()})`}
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {team.management.map((person, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar>
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={person.name} secondary={person.position} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Box>Galeria</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TeamPage;
