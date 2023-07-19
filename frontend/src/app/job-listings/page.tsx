"use client";

import JobListingsSearchBar from "../../../components/JobListingsSearchBar/JobListingsSearchBar";
import JobListingsItems from "../../../components/JobListingsItems/JobListingsItems";
import { Grid } from "@mui/material";
import { useState } from "react";
import { jobData } from "../../../components/JobListingsItems/jobData";
import { JobData } from "./types";

export default function JobListings() {
  const [searchValue, setSearchValue] = useState("");
  const [dataArr, setDataArr] = useState(jobData);
  const [detailsChecked, setDetailsChecked] = useState(false);

  function applySearch(val: string) {
    console.log(val);
    var tempArr = jobData.filter((item: JobData) => {
      return (
        item.jobTitle.toLowerCase().includes(val.toLowerCase()) ||
        item.jobCompany.toLowerCase().includes(val.toLowerCase()) ||
        item.jobLocation.toLowerCase().includes(val.toLowerCase()) ||
        item.jobType.toLowerCase().includes(val.toLowerCase())
      );
    });
    setDataArr(tempArr);
    setSearchValue(val);
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <JobListingsSearchBar
          searchValue={searchValue}
          applySearch={applySearch}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <JobListingsItems jobData={dataArr} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
