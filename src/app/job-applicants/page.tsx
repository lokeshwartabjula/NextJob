"use client";

import { Container, Grid, Hidden } from "@mui/material";
import { ApplicantList } from "./ApplicantList";
import { JobDescription } from "./JobDescription";
import { applicants } from "./constants";

export default function abc() {
  return (
    <Container>
      <Grid container spacing={4}>
          <Grid item xs={12} md={3} lg={4}>
            <JobDescription />
          </Grid>
        <Grid item xs={12} md={8}>
          {applicants.map((applicant, index) => (
            <ApplicantList key={index} applicant={applicant} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
