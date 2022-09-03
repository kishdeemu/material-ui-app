import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://linktr.ee/kishendeemud">
        Kishen Deemud
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
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
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Kishen's Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Hi... This is the Photo Album of Kishen Deemud
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">SEE MY PHOTOS</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="data:image/jpeg;base64,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"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      I'm Kishen Deemud. 4th year Undergraduate at SLIIT.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Kishen Deemud
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          When you have a dream, you've got to grab it and never let go.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
