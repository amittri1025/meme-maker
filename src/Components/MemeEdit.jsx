import React, { useState, useEffect } from "react";
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
import meme1 from "../images/4.jpg";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import DownloadIcon from "@mui/icons-material/Download";
import memetempinfo from "./memetempinfo";
import { useSelector } from "react-redux";

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
  const [txt1, setTxt1] = useState("");
  const [txt2, setTxt2] = useState("");
  const [img, setImg] = useState();
  const memeId = useSelector((store) => store.meme._id);
  useEffect(() => {
    memetempinfo.map((meme) => {
      if (meme.id == memeId) {
        setImg(meme.src);
      }
    });
  }, [img]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange1 = (event) => {
    setTxt1(event.target.value);
  };

  const handleChange2 = (event) => {
    setTxt2(event.target.value);
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

  //Add local image
  const handleUpload = (event) => {
    console.log("hello");
    event.preventDefault();
    const { files } = event.target;
    const uploadFile = URL.createObjectURL(files[0]);
    setImg(uploadFile);
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
              height: 500,
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Draggable theme={theme}>
              <h1
                sx={{
                  color: "#fff",
                  textDecoration: "underline",
                }}
              >
                {txt1}
              </h1>
            </Draggable>
            <Draggable theme={theme}>
              <h1
                sx={{
                  color: "#fff",
                }}
              >
                {txt2}
              </h1>
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
                onChange={handleChange1}
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Second Text"
                onChange={handleChange2}
              />
              <Button
                className="custom-file"
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  my: 2,
                }}
              >
                <input
                  onChange={handleUpload}
                  type="file"
                  accept="image/x-png,image/gif,image/jpeg"
                />
                <label
                  className="custom-file-label border-info"
                  for="inputGroupFile04"
                >
                  Choose local image
                </label>
              </Button>

              <Button
                onClick={handleJpeg}
                type="submit"
                fullWidth
                variant="contained"
                color="Download"
                endIcon={<DownloadIcon />}
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
