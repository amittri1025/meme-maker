import React, { useContext, useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { MemeContext } from "../Contexts/MemeContext";
import { useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import * as htmlToImage from "html-to-image";
import DownloadIcon from "@mui/icons-material/Download";
import "./MemeEdit.css";
import sampleimg from '../images/sampleimage.png'
// TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

export default function MemeEdit() {
  const { memeData } = useContext(MemeContext);
  const theme = useTheme();
  console.log(memeData);

  const { id } = useParams();
  const [memeimg, setMemeImg] = useState(sampleimg);
  const getMeme = memeData.find((meme) => meme.id == id);

  console.log(getMeme?.url);

  const [inputTexts, setInputTexts] = useState([""]); // Array of input texts
  const [memeTexts, setMemeTexts] = useState([""]); // Array of meme texts
  const [textColor, setTextColor] = useState("#fff");
  const [fontSize, setFontSize] = useState(1.5);

  const handleInputChange = (index, event) => {
    const newInputTexts = [...inputTexts];
    newInputTexts[index] = event.target.value;
    setInputTexts(newInputTexts);
  };

  const handleMemeTextChange = () => {
    setMemeTexts(inputTexts);
  };

  const handleMemeTextSize = (action) => {
    setFontSize((prevSize) => {
      let newSize = prevSize;

      if (action === "increase") {
        newSize += .5;
      } else if (action === "decrease") {
        newSize -= .3;
      }

      return newSize;
    });
  };

  const addTextInput = () => {
    setInputTexts([...inputTexts, ""]);
    setMemeTexts([...memeTexts, ""]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleColorChange = (event) => {
    setTextColor(event.target.value);
  };

  // Download JPEG image
  const handleJpeg = () => {
    htmlToImage
      .toJpeg(document.getElementById("meme-component"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "text-img.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  //Add local image
  const handleUpload = (event) => {
    event.preventDefault();
    const { files } = event.target;
    const uploadFile = URL.createObjectURL(files[0]);
    setMemeImg(uploadFile);
  };

  const MemeText = styled.h1`
    font-size: ${fontSize}em;
    font-family: "Arial";
    font-weight: bolder;
    text-align: center;
    color: ${(props) => props.color};
    text-shadow: ${fontSize * 1.5}px ${fontSize * 1.5}px 0px #111,
      ${fontSize * 1.5}px -${fontSize * 1.5}px 0px #111,
      -${fontSize * 1.5}px ${fontSize * 1.5}px 0px #111,
      -${fontSize * 1.5}px -${fontSize * 1.5}px 0px #111,
      ${fontSize * 1.5}px 0px 0px #111, 0px ${fontSize * 1.5}px 0px #111,
      -${fontSize * 1.5}px 0px 0px #111, 0px -${fontSize * 1.5}px 0px #111;
  `;


  const params = useParams();

  console.log(params)
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            id="meme-component"
            sx={{
              width: "700px",
              height: "700px",
              padding: "50px",
            }}
          >
            {/* // meme and image both */}
            <Box
              component="img"
              src={getMeme?(getMeme?.url):memeimg}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
            {memeTexts.map((memeText, index) => (
              <Draggable theme={theme}>
                <MemeText color={textColor} key={index}>
                  {memeText}
                </MemeText>
              </Draggable>
            ))}
            {/* // meme and image both */}
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
              {inputTexts.map((inputText, index) => (
                <TextField
                  id="outlined-multiline-flexible"
                  multiline
                  maxRows={4}
                  margin="normal"
                  fullWidth
                  name="2"
                  label="Add Some Text"
                  key={index}
                  type="text"
                  value={inputText}
                  onChange={(event) => handleInputChange(index, event)}
                ></TextField>
              ))}

              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
              >
                {/* <input
                 
                /> */}
                <input
                  type="color"
                  value="#43da86"
                  id="style1"
                  onChange={handleColorChange}
                />
                <Button onClick={addTextInput}>
                  <AddCircleIcon />
                </Button>
                <Button onClick={handleMemeTextChange}>
                  <CheckCircleIcon />
                </Button>
                <Button onClick={() => handleMemeTextSize("increase")}>
                  <TextIncreaseIcon />
                </Button>
                <Button onClick={() => handleMemeTextSize("decrease")}>
                  <TextDecreaseIcon />
                </Button>
              </Stack>

              {/* Choosing Custom Image */}
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
