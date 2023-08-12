import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import Images from "./Images";
import { Link } from "react-router-dom";

function Main() {
  const theme = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h1"
                align="center"
                color="text.primary"
                gutterBottom
                sx={{
                  fontSize: "40px",
                  fontWeight: 400,
                }}
              >
                Meme Maker 🤣
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                The most sweetest meme maker app you ever came across.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">
                  <Link to="/selectmemes">Choose Photos</Link>
                </Button>
                <Button variant="outlined">Upload Photo</Button>
              </Stack>
            </Container>
          </Box>
        </main>
      </ThemeProvider>
    </>
  );
}

export default Main;
