"use client";

import { jobData } from "./jobData";
import { Grid } from "@mui/material";
import JobCard from "../JobCard/JobCard";
import { JobListingsItemsProps } from "@/app/job-listings/types";

const JobListingsItems: React.FC<JobListingsItemsProps> = ({ jobData }) => {
  return (
    <Grid container>
      {jobData?.map((card, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <JobCard
              key={index}
              jobTitle={card.jobTitle}
              jobCompany={card.jobCompany}
              jobType={card.jobType}
              salary={card.salary}
              jobLocation={card.jobLocation}
              companyLogo={card.companyLogo}
              jobDate={card.jobDate}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default JobListingsItems;
