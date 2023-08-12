import Card from "@mui/material/Card";
import { useEffect, useState, useContext } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import { MemeContext } from "../Contexts/MemeContext";
import { Link } from "react-router-dom";


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Images() {
  const theme = useTheme();
  const { memeData } = useContext(MemeContext);

  const { id, url, name } = memeData;
  return (
    <ImageList
    variant="masonry" cols={3} gap={8}
    >
      {memeData.map((item) => (
        <Link to={`/memes/${item.id}`}>
       <ImageListItem key={item.img}>
      <img
        src={`${item.url}?w=248&fit=crop&auto=format`}
        srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
      />
    </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}

export default Images;

{
  /* <Grid container spacing={2}>
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
                </Grid>*/
}
