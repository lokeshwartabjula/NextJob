'use client';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import JobCard from '../JobCard/JobCard';
import "./styles.css";


export default function ActiveJobsTabPage() {

    //generate more job data with different values for each field


  const jobData = [
   {
    jobDate: '2023-07-19',
    jobTitle: 'Software Engineer',
    jobCompany: 'Example Company',
    jobType: 'Full-Time',
    salary: '5000',
    jobLocation: 'New York',
    companyLogo: 'path/to/companyLogo.png', // Replace with the actual image path
  },
  {
    jobDate: '2023-07-19',
    jobTitle: 'Software Engineer2',
    jobCompany: 'Example Company2',
    jobType: 'Full-Time 2',
    salary: '5000',
    jobLocation: 'New York',
    companyLogo: 'path/to/companyLogo.png', // Replace with the actual image path
  },
  {
    jobDate: '2023-07-19',
    jobTitle: 'Software Engineer 3',
    jobCompany: 'Example Company 3',
    jobType: 'Full-Time 3',
    salary: '50003',
    jobLocation: 'New York',
    companyLogo: 'path/to/companyLogo.png', // Replace with the actual image path
  },
  {
    jobDate: '2023-07-19',
    jobTitle: 'Software Engineer4',
    jobCompany: 'Example Company 4',
    jobType: 'Full-Time 4',
    salary: '5000 4',
    jobLocation: 'New York 4',
    companyLogo: 'path/to/companyLogo.png', // Replace with the actual image path
  },
  {
    jobDate: '2023-07-19',
    jobTitle: 'Software Engineer 5',
    jobCompany: 'Example Company 5',
    jobType: 'Full-Time 5',
    salary: '50005',
    jobLocation: 'New York 5',
    companyLogo: 'path/to/companyLogo.png', // Replace with the actual image path
  },
  {
    jobDate: '2023-07-19',
    jobTitle: 'Software Engineer 6',
    jobCompany: 'Example Company 6',
    jobType: 'Full-Time 6',
    salary: '50006',
    jobLocation: 'New York',
    companyLogo: 'path/to/companyLogo.png', // Replace with the actual image path
  },
  ];
  

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    return (
        // <Container sx={{ py: 8 }} maxWidth="md">
        //   {/* End hero unit */}
        //   <Grid container spacing={4}>
        //     {cards.map((card) => (
        //       <Grid item key={card} xs={12} sm={6} md={4}>
        //         <Card
        //           sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        //         >
        //           <CardMedia
        //             component="div"
        //             sx={{
        //               // 16:9
        //               pt: '56.25%',
        //             }}
        //             image="https://source.unsplash.com/random?wallpapers"
        //           />
        //           <CardContent sx={{ flexGrow: 1 }}>
        //             <Typography gutterBottom variant="h5" component="h2">
        //               Heading
        //             </Typography>
        //             <Typography>
        //               This is a media card. You can use this section to describe the
        //               content.
        //             </Typography>
        //           </CardContent>
        //           <CardActions>
        //             <Button size="small">View</Button>
        //             <Button size="small">Edit</Button>
        //           </CardActions>
        //         </Card>
        //       </Grid>
        //     ))}
        //   </Grid>
        // </Container>
        <>
        {jobData.map((job) => (
          <JobCard
            key={job.jobTitle} // Make sure to provide a unique key for each JobCard
            jobDate={job.jobDate}
            jobTitle={job.jobTitle}
            jobCompany={job.jobCompany}
            jobType={job.jobType}
            salary={job.salary}
            jobLocation={job.jobLocation}
            companyLogo={job.companyLogo}
          />
        ))}
        </>
    );
}