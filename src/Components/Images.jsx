import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import memeimg from "./memetempinfo";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { memeActions } from "../Store/store";
import { useTheme, ThemeProvider } from "@mui/material/styles";

function Images() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const memeSelectHandle = (_id) => {
    dispatch(memeActions.setId(_id));
  }

  const [imgs, setImgs] = useState([]);

  const url = "https://api.imgflip.com/get_memes";

  const fetchInfo = async () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setImgs(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={2}>
          {imgs.data?.memes.map((card) => (
            <Grid onClick={() => memeSelectHandle(card.id)} item key={card.id} xs={12} sm={6} md={4}>
              <Link to="memes">
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
                      image={card.url}
                      alt={card.name}
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


// {memeimg.map((card) => (
//   <Grid onClick={() => memeSelectHandle(card.id)} item key={card.id} xs={12} sm={6} md={4}>
//     <Link to="memes">
//       <Card
//         sx={{
//           maxWidth: 345,
//           ":hover": {
//             boxShadow: 20, // theme.shadows[20]
//           },
//         }}
//       >
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="200"
//             image={card.src}
//             alt="green iguana"
//           />
//         </CardActionArea>
//       </Card>
//     </Link>
//   </Grid>
// ))}