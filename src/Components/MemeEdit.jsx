import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import { MemeContext } from "../Contexts/MemeContext";
import { useParams } from "react-router-dom";
const MemeEdit = () => {
  const { memeData } = useContext(MemeContext);
  const { id } = useParams();

  console.log(memeData);

  const memeImage = memeData.find((item) => {
    return item.id == parseInt(id);
  });

  console.log(memeImage);

  return (
    <Container>
      {memeImage ? (
        <div sx={{display: "flex" , justifyContent: "space-between"}}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 500,
                height: 500,
              },
            }}
          >
            <img src={memeImage.url} alt="" />
          </Box>
          <Box
           sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 500,
              height: 500,
              backgroundColor: 'red'
            },
          }}
          >
            <h2>hello</h2>
          </Box>
        </div>
      ) : (
        <h2>Go to Starting</h2>
      )}
    </Container>
  );
};

export default MemeEdit;
