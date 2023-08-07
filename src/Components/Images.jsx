import Card from "@mui/material/Card";
import { useEffect, useState, useContext } from "react";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import memeimg from "./memetempinfo";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { memeActions } from "../Store/store";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import {MemeContext} from "../Contexts/MemeContext";

function Images() {
  const theme = useTheme();
  // const dispatch = useDispatch();
  // const memeSelectHandle = (_id) => {
  //   dispatch(memeActions.setId(_id));
  // };

  // const [imgs, setImgs] = useState([]);

  const {memeData} = useContext(MemeContext);

  const {id, url, name} = memeData;
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={2}>
          {memeData.map((meme) => (
            <Grid
              item
              key={meme.id}
              xs={12}
              sm={6}
              md={4}
            >
              <Link to={`/memes/${meme.id}`}>
                <Card
                  sx={{
                    maxWidth: 345,
                    ":hover": {
                      boxShadow: 20, // theme.shadows[20]
                    },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={meme.url}
                      alt={meme.name}
                    />
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Images;

