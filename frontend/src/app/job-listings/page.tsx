"use client";

import JobListingsSearchBar from "../../../components/JobListingsSearchBar/JobListingsSearchBar";
import JobListingsItems from "../../../components/JobListingsItems/JobListingsItems";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
// import { jobData } from "../../../components/JobListingsItems/jobData";
import { JobData } from "./types";
import Filter from "../../../components/JobFilter/JobFilter";
import axios from "axios";

export default function JobListings() {
  const [searchValue, setSearchValue] = useState("");
  const [detailsChecked, setDetailsChecked] = useState(false);
  const [jobDataArr, setJobDataArr] = useState([]);
  const [displayedJobDataArr, setDisplayedJobDataArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getJobs");
        setJobDataArr(response.data.jobs);
        setDisplayedJobDataArr(response.data.jobs);
      } catch (error) {
        console.error("An error occurred while fetching job data: ", error);
      }
    };

    fetchData();
  }, []);

  function applySearch(val: string) {
    var tempArr = jobDataArr.filter((item: JobData) => {
      return (
        item.jobTitle.toLowerCase().includes(val.toLowerCase()) ||
        // item.jobCompany.toLowerCase().includes(val.toLowerCase()) ||
        item.location.placeName.toLowerCase().includes(val.toLowerCase()) ||
        item.jobType.toLowerCase().includes(val.toLowerCase())
      );
    });
    setDisplayedJobDataArr(tempArr);
    setSearchValue(val);
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Filter />
          </Grid>
          <Grid item xs={9}>
            <JobListingsSearchBar
              searchValue={searchValue}
              applySearch={applySearch}
            />
            <JobListingsItems jobData={displayedJobDataArr} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
