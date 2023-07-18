"use client";

import { useState } from "react";
import { Box, 
         Card, 
         CardContent, 
         Grid, 
         TextField, 
         InputAdornment, 
         FormControl, 
         MenuItem, 
         InputLabel, 
         Select, 
         Typography, 
         Button,
         ListItemIcon,
         ListItemText,
         Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper
        } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import JobInformationData  from "../(constants)/jobListings";
import styles from '../(constants)/joblisting.module.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function JobListings() {

    const [jobs, setJobs] = useState(JobInformationData);
    
    const handleChange = (event: any, id: String) => {
        const status = event.target.value;
        console.log(status);
        console.log(id)
        const updatedJobs = jobs.map((job) => {
            if (job.id === id) {
                return {...job, jobStatus: status};
            }
            return job;
        });
        setJobs(updatedJobs);;
        console.log(updatedJobs[1].id);
        console.log(updatedJobs[1].jobStatus);
        // in future, you can make an API call to update the job status in your backend.
    };

    return(
        <>
        <Box>
            <Grid container sx={{ margin: '0px'}}>
                <Grid item xs={12} sm={12} md={3} lg={3} >
                    <Card sx={{
                        margin: '0% 10%',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        border: '1px solid #D4D2D0',
                        boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
                        borderRadius: '5px',
                        // padding: '5% 0%',
                    }}
                     >
                        <CardContent >
                            <TextField id="outlined-basic" variant="outlined" 
                                sx={{
                                    fontWeight: 'bold',
                                    borderRadius: '10px',
                                    width: '100%',
                                    bgcolor: '#FFFFFF', 
                                    margin : '5% 0%'
                                }}
                                placeholder="Searh for Job Title"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                        />
                        <TextField id="outlined-basic" variant="outlined" 
                            sx={{
                                    fontWeight: 'bold',
                                    borderRadius: '10px',
                                    width: '100%',
                                    bgcolor: '#FFFFFF', 
                                    margin : '5% 0%'
                            }}
                            placeholder="Search By Location"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}

                       />
                       <FormControl fullWidth sx={{
                            margin: '5% 0%'
                       }}>
                            <InputLabel id="demo-simple-select-label">Sort By: Job status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                sx={{
                                    fontWeight: 'bold',
                                    borderRadius: '5px',
                                    width: '100%',
                                    bgcolor: '#FFFFFF', 
                                }}
                                id="demo-simple-select"
                                // value={jobStatus}
                                label="Sort By: Job status"
                                // onChange={handleChange}
                            >
                                <MenuItem value={ "Active" }>Active</MenuItem>
                                <MenuItem value={ "Paused" }>Paused</MenuItem>
                                <MenuItem value={ "Closed" }>Closed</MenuItem>
                            </Select>
                        </FormControl>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8.8} xl={8.8}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                            <TableRow>
                                <TableCell className={styles.titles}>Job Title</TableCell>
                                <TableCell className={styles.titles}>Location</TableCell>
                                <TableCell className={styles.titles}>Openings</TableCell>
                                <TableCell className={styles.titles}>Job Status</TableCell>
                                <TableCell className={styles.titles}>Candidates</TableCell>
                                <TableCell className={styles.titles}>Actions</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {jobs.map((job) => (
                                <TableRow key={job.id} className={styles.description}>
                                    <TableCell className={styles.description}>{job.jobTitle}</TableCell>
                                    <TableCell className={styles.description}>{job.Location}</TableCell>
                                    <TableCell className={styles.description}>{job.NoOfPosition}</TableCell>
                                    <TableCell className={styles.description}>
                                    <Select defaultValue=""
                                                value={job.jobStatus}
                                                onChange={(e) => handleChange(e, job.id)}
                                                displayEmpty
                                                sx= {{
                                                    width: '100%',
                                                    height: '40px',
                                                }}
                                            >
                                                <MenuItem value="Active">
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <FiberManualRecordIcon style={{ color: "green" }} />
                                                        <ListItemText primary="Active" />
                                                    </div>
                                                </MenuItem>
                                                <MenuItem value="Closed">
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <FiberManualRecordIcon style={{ color: "red" }} />
                                                        <ListItemText primary="Closed" />
                                                    </div>
                                                </MenuItem>
                                                <MenuItem value={"Paused"}>
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <FiberManualRecordIcon style={{ color: "yellow" }} />
                                                        <ListItemText primary="Paused" />
                                                    </div>
                                                </MenuItem>
                                            </Select>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="contained" className={styles.buttonApplicants}>
                                                Applicants
                                        </Button>
                                        </TableCell>
                                    <TableCell>
                                    <Button variant="outlined">Edit Profile</Button>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>                        
                </Grid>
            </Grid>
        </Box>
        </>
    );
}