import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#003366',
    },
    background: {
      default: "#e6e6e6",
      paper: "#e6e6e6",
    },
    text: {
      primary: "#11111",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#222",
    },
    text: {
      primary: "#fff",
    },
  },
});