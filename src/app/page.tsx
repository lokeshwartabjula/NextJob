"use client";
import { Grid } from "@mui/material";
import Cover from "./home/Cover";
import JobSteps from "./home/JobSteps";
import RecrutingOption from "./home/RecrutingOption";

export default function MyApp() {
  return (
    <Grid container rowSpacing={3}>
      <Grid item>
        <Cover />
      </Grid>
      <Grid item>
        <JobSteps />
      </Grid>
      <Grid item>
        <RecrutingOption />
      </Grid>
    </Grid>
  );
}
