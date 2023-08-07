import * as React from "react";
import "./App.css";
import Home from "./Components/Home.jsx";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const headfont = "'Pacifico', sans-serif";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#222",
    },
    secondary: {
      main: "#fff",
    },
    blue: {
      main: "#00A5E3",
    },
    greenblue: {
      main: "#00CDAC",
    },
    green: {
      main: "#00A5E3",
    },
    red: {
      main: "#FC6230",
    },
    Download: {
      main: "#4DD091",
    },
  },
  typography: {
    h1: {
      fontFamily: headfont,
      fontWeight: 200,
    },
    h2: {
      fontWeight: 800,
      color: "#FFFFF",
      fontFamily: "Consolas",
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 200,
    },
    subtitle1: {
      fontSize: "1.1rem",
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
    },
  },
});

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
