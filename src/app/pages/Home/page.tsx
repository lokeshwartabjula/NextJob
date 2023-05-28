"use client";

import { Container, Grid, Paper } from "@mui/material";
import JobCard from "@/app/components/JobCard/page";
import { jobsArray } from "../../../../data/jobs.js";
import Header from "@/app/components/Header/page";
import SearchBar from "@/app/components/SearchBar/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Paper>
        <SearchBar />
        <Container maxWidth="xl">
          <Grid container spacing={2} columnSpacing={2}>
            {jobsArray.map((job: any, index: any) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <JobCard jobData={job} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Paper>
    </div>
  );
}
