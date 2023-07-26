'use client';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import JobCard from '../JobCard/JobCard';
import "./styles.css";
import { useEffect, useState } from 'react';


interface JobData {
  id: string;
  jobTitle: string;
  jobDescription: string;
  skills: string[];
  jobStatus: string;
  noOfPositions: string;
  jobType: string;
  location: {
    type: string;
    coordinates: number[];
    placeId: string;
    placeName: string;
    city: string;
    state: string;
    country: string;
  };
  salary: string;
  experience: string;
  openDate: string;
  employerId: string;
  jobCompany: string;
  jobCompanyLogo: string;
}

interface ActiveJobsTabPageProps {
  employerName: string;
}


export default function ActiveJobsTabPage(props: any) {
  const { employerName } = props;
  const [jobData, setJobData] = useState<JobData[]>([]);

  useEffect(() => {
    fetchJobData();
  }, []);

  const fetchJobData = async () => {
    console.log("employerName", employerName);
    try {
      const response = await fetch(`http://localhost:8080/getJobsByCompany/${employerName}`);
      const data = await response.json();
      console.log("data", data);
      setJobData(data.jobs);
      console.log("jobData", jobData);
    } catch (error) {
      console.error('Error fetching job data:', error);
      setJobData([]);
    }
  };
    //generate more job data with different values for each field

    return (
      <>
        {jobData.map((job) => (
          <JobCard
            key={job.id}
            jobDate={job.openDate}
            jobTitle={job.jobTitle}
            jobCompany={job.jobCompany}
            jobType={job.jobType}
            salary={job.salary}
            jobLocation={job.location.placeName}
            companyLogo={job.jobCompanyLogo}
          />
        ))}
      </>
    );
  }