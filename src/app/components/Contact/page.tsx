"use client";

import {
  Container,
  Grid,
  Paper,
  Typography,
  CardContent,
  Card,
  CardHeader,
  Avatar,
  TextField,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import Image from "next/image";
import contactPic from "/public/3.png";
import SendSharpIcon from "@mui/icons-material/SendSharp";
export default function Contact() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper
      style={{
        padding: matchesSm ? "2em 1em" : "4em 2em",
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={matchesSm ? 2 : 4}
          direction="column"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography
              variant={matchesSm ? "h4" : "h2"}
              align="center"
              color="primary"
              sx={{ mb: 5 }}
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} width={1}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card elevation={3} style={{ borderRadius: "10px" }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "#F94E09" }} sizes="large">
                        <MailOutlineIcon />
                      </Avatar>
                    }
                    title="Drop a line"
                    titleTypographyProps={{ fontSize: "0.98em" }}
                    subheader="Mail Us"
                    subheaderTypographyProps={{ fontSize: "0.75em" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      ks255715@dal.ca
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ml477880@dal.ca
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card elevation={3} style={{ borderRadius: "10px" }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "#56ae57" }}>
                        <CallOutlinedIcon />
                      </Avatar>
                    }
                    title="24/7 Service"
                    subheader="Call Us"
                    titleTypographyProps={{ fontSize: "0.98em" }}
                    subheaderTypographyProps={{ fontSize: "0.75em" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      +1 782 548 876
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      +1 782 548 876
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card elevation={3} style={{ borderRadius: "10px" }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "#FCBB06" }}>
                        <MyLocationOutlinedIcon />
                      </Avatar>
                    }
                    title="Location"
                    subheader="Visit Us"
                    titleTypographyProps={{ fontSize: "0.98em" }}
                    subheaderTypographyProps={{ fontSize: "0.75em" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      1135 1st Ave, New York,
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      NY 10065, USA
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              spacing={2}
              direction={matchesMd ? "column-reverse" : "row"}
            >
              <Grid item xs={12} sm={8}>
                <Grid container spacing={2} direction="column">
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      align="center"
                      color="primary"
                      fontFamily="arial"
                    >
                      Send Your Message
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          label="Name"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2} direction="row">
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          label="Mobile"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          label="Subject"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="outlined-multiline-static"
                      label="Send Message"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      endIcon={
                        <SendSharpIcon sx={{ mr: 1, color: "#ffffff" }} />
                      }
                      sx={{
                        backgroundColor: "#2557A7",
                        borderRadius: "100px",
                      }}
                      variant="contained"
                    >
                      <Typography color="#ffffff">Send</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              {!matchesMd && (
                <Grid item xs={12} sm={4}>
                  <Image
                    alt="ConactImage"
                    src={contactPic}
                    layout="responsive"
                    style={
                      matchesMd
                        ? { display: "none" }
                        : { height: "100%", width: "100%" }
                    }
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
