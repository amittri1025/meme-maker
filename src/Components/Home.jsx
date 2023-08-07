import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import Main from "./Main";
import MemeEdit from "./MemeEdit";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// icons

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function Home() {
  const theme = useTheme();

  const colorMode = React.useContext(ColorModeContext);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6">
            {/* <Link to="home"></Link> */}
            Meme Maker
          </Typography>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/memes/:id" element={<MemeEdit />} />
        </Routes>
      </BrowserRouter>
      {/* Main app */}

      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}
