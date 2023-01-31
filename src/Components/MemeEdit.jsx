import React, { useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import meme1 from "../images/2.jpg";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

let txt = "adf";

export default function MemeEdit() {
  const theme = useTheme();

  const [txt, setTxt] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setTxt(event.target.value);
  };

  // Download JPEG image
  const handleJpeg = () => {
    htmlToImage
      .toJpeg(document.getElementById("my-img"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "text-img.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  // upload Images
  const handleUpload = (event) => {
    event.preventDefault();
    const { files } = event.target;
    const uploadFile = URL.createObjectURL(files[0]);
    this.setState({
      randomImg: uploadFile,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
        // id="my-img"
          item
          xs={false}
          sm={4}
          md={7}
          container 
          direction="column"
          alignItems="center"
          justifyContent="center"
          // sx={{

          // }}  

        >
          <Box
              id="my-img"
            sx={{
              width: 500,
              height:500,
            backgroundImage: `url(${meme1})`,
            backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
          >
            <Draggable>
            <Typography
              component="h1"
              variant="h5"
              xs={{
                color: "secondary.main",
              }}
            >
              {txt}
            </Typography>
          </Draggable>
          </Box>
          
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Change Text
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                label="First Text"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Second Text"
              />
              <Button
                onClick={handleUpload}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update
              </Button>
              <Button
                onClick={handleJpeg}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Download
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
