import React, { useState, useEffect } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import * as htmlToImage from "html-to-image";
import DownloadIcon from "@mui/icons-material/Download";
import { useSelector } from "react-redux";
import styled from 'styled-components';


export default function MemeEdit() {
  const theme = useTheme();
  const [imgs, setImgs] = useState([]);

  const [inputTexts, setInputTexts] = useState([""]); // Array of input texts
  const [memeTexts, setMemeTexts] = useState([""]); // Array of meme texts
  const [textColor, setTextColor] = useState('#fff');

  const handleInputChange = (index, event) => {
    const newInputTexts = [...inputTexts];
    newInputTexts[index] = event.target.value;
    setInputTexts(newInputTexts);
  };

  const handleMemeTextChange = () => {
    setMemeTexts(inputTexts);
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


  const url = "https://api.imgflip.com/get_memes";

  const fetchInfo = async () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setImgs(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const memeId = useSelector((store) => store.meme._id);

  useEffect(() => {
    imgs.data?.memes.map((meme) => {
      if (meme.id == memeId) {
        setImgs(meme.url);
      }
    });
  }, [imgs]);

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

  const MemeText = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.color};
  text-shadow: 2px 2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, -2px -2px 0 #000, 2px 0px 0 #000, 0px 2px 0 #000, -2px 0px 0 #000, 0px -2px 0 #000, 2px 2px 2px rgba(206,103,103,0);

`;


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
              height: "70%",
              width: "70%",
              backgroundImage: `url(${imgs})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              border: "2px solid black",
              backgroundPosition: "center",
            }}
          >
            {memeTexts.map((memeText, index) => (
              <Draggable theme={theme}>
                <MemeText color={textColor} key={index}>{memeText}</MemeText>
              </Draggable>
            ))}
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
                  margin="normal"
                  fullWidth
                  name="2"
                  label="Add Some Text"
                  key={index}
                  type="text"
                  value={inputText}
                  onChange={(event) => handleInputChange(index, event)}
                >
                 
                </TextField>
                 
              ))} 

              <input type="color" value={textColor} onChange={handleColorChange}/>
              <button onClick={handleMemeTextChange}>Apply Text</button>
              <button onClick={addTextInput}>Add Text</button>

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


