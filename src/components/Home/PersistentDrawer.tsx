import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Navigation from "../../routes/Navigation";
import Snackbar from "../Middleware/Snackbar";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";
import Footer from "../Footer/Footer";
import NestedList from "./NestedList";
import { ListSubheader } from "@mui/material";
import styles from "./Home.module.css";
import CircleOptions from "./CircleOptions";
import ToggleSwitch from "./ToggleSwitch";
import logo from '../../assets/logof.png';

const drawerWidth = 350;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  backgroundColor: "#e6e6e6",
}));

export default function PersistentDrawerLeft() {
  const { status, isAdmin, checkAuthToken } = useAuthStore();

  let navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const itemsAdminList = [
    {
      text: "Counter",
      icon: <InboxIcon />,
      onClick: () => navigate("/counter"),
    },
    {
      text: "Test",
      icon: <InboxIcon />,
      onClick: () => navigate("/test"),
    },
    {
      text: "Pokeapi",
      icon: <InboxIcon />,
      onClick: () => navigate("/pokeapi"),
    },
    {
      text: "Crud",
      icon: <InboxIcon />,
      onClick: () => navigate("/crud"),
    },
    {
      text: "Calendar",
      icon: <InboxIcon />,
      onClick: () => navigate("/calendar"),
    },
  ];

  const itemsInternalUserList = [
    {
      text: "Calendar",
      icon: <InboxIcon />,
      onClick: () => navigate("/calendar"),
    },
  ];

  const itemsExternalUserList = [
    {
      text: "INICIO",
      icon: <InboxIcon />,
      onClick: () => navigate("/home"),
    },
    {
      text: "QUIENES SOMOS",
      icon: <InboxIcon />,
      onClick: () => navigate("/us"),
    },
    {
      text: "RESULTADOS",
      icon: <InboxIcon />,
      onClick: () => navigate("/results"),
    },
    {
      text: "FIXTURE",
      icon: <InboxIcon />,
      onClick: () => navigate("/fixture"),
    },
    {
      text: "TABLA DE POSICIONES",
      icon: <InboxIcon />,
      onClick: () => navigate("/positionsTable"),
    },
    {
      text: "TABLA DE GOLEADORES",
      icon: <InboxIcon />,
      onClick: () => navigate("/scorers"),
    },
    {
      text: "MEDIA",
      icon: <InboxIcon />,
      onClick: () => navigate("/media"),
    },
    {
      text: "NOTICIAS",
      icon: <InboxIcon />,
      onClick: () => navigate("/news"),
    },
    {
      text: "CONTACTO",
      icon: <InboxIcon />,
      onClick: () => navigate("/contact"),
    },
    {
      text: "EQUIPO",
      icon: <InboxIcon />,
      onClick: () => navigate("/teams"),
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" className={styles.logo} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, marginLeft: 1 }}
          >
            Asociación de Fútbol de Valparíso
          </Typography>
          <ToggleSwitch />
          <CircleOptions />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {status === "authenticated" ? (
          isAdmin ? (
            <List>
              {itemsAdminList.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                  <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <List>
              {itemsInternalUserList.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                  <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
          )
        ) : (
          <List>
            {itemsExternalUserList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
            <NestedList />
          </List>
        )}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Navigation />
        <Snackbar />
        <Footer />
      </Main>
    </Box>
  );
}
