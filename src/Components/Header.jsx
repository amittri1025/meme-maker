import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import MemeEdit from "../Components/MemeEdit";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Link className="link" to="/">
            <Typography variant="h6">Meme Maker</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
