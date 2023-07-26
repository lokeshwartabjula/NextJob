"use client";

import { useState, useEffect } from "react";
import { axiosInstance } from "../../../../api";
import { useRouter } from 'next/navigation';
import JobDetails from "../../../../components/JobDetails/JobDetails";

import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  InputAdornment,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Table,
  Typography,
  ListItemText,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { JobInformation } from "../(constants)/jobListings";
import styles from "../(constants)/joblisting.module.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function JobListings() {
    const theme = useTheme();
    const captionSize = useMediaQuery(theme.breakpoints.down('md'));
    const [jobs, setJobs] = useState<JobInformation[]>([]);
    const [filteredJobs, setFilteredJobs] = useState<JobInformation[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTitle, setSearchTitle] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [jobStatus, setJobStatus] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const [ jobDetailsOpen, setJobDetailsOpen ] = useState(false);
    const [ jobDetails, setJobDetails ] = useState<JobInformation>();
    var router = useRouter();
  
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axiosInstance.get("pub/getJobs");
        setJobs(res.data.jobs);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      }
    };

    fetchJobs();
  },[]);

  useEffect(() => {
    
    setIsMounted(true);
  }, []);

  const handleEdit = (job: JobInformation) => {
    if (isMounted) {
      router.push(`/update-job-posting/${job.id}`,
      );
    }
  };

  useEffect(() => {
    let result = [...jobs];
    
    if (searchTitle) {
      result = result.filter(job => job.jobTitle.toLowerCase().includes(searchTitle.toLowerCase()));
    }
    
    if (searchLocation) {
      result = result.filter(job => job.location.placeName.toLowerCase().includes(searchLocation.toLowerCase()));
    }
    
    if (jobStatus) {
      result = result.filter(job => job.jobStatus.toLowerCase() === jobStatus.toLowerCase());
    }

    setFilteredJobs(result);
  }, [searchTitle, searchLocation, jobStatus, jobs]);

  const handleDelete = async (id: string) => {
    try {
        console.log("Id: "+id);
        const response = await axiosInstance.delete(`pub/deleteJob/${id}`);
        console.log(response.data);
        const updatedJobs = jobs.filter(job => job.id !== id);
        setJobs(updatedJobs);
    } catch (err) {
        console.error(err);
    }
}

const handleChange = async (event: any, id: String) => {
    const status = event.target.value;
    const jobToUpdate = jobs.find((job) => job.id === id);
    const updatedJobs = jobs.map((job) => {
        if(job.id === id){
            return {...job, jobStatus: status}
        }
        return job;
    });
    if (jobToUpdate) {
      const updatedJob = { ...jobToUpdate, jobStatus: status };
      try {
        const response = await axiosInstance.put(`pub/updateJob`, updatedJob);
        setJobs(updatedJobs);
      } catch (error) {
        console.error('API request failed', error);
      }
    } else {
      console.error(`No job found with id ${id}`);
    }
  };

  const handleClickOpen = (event: any, job: JobInformation) => {
    setJobDetailsOpen(true);
    console.log("job details bro:");
    setJobDetails(job);
  };

  const handleClose = () => {
    setJobDetailsOpen(false);
  };


  return (
    <>
      <Box>
        <Grid container sx={{ margin: "0px" }}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card
              sx={ captionSize ?{ margin: "0% 5% 5% 5%",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    alignContent: "center",
                    alignItems: "center",
                    border: "1px solid #D4D2D0",
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                    borderRadius: "5px"} 
                  : {
                    margin: "0% 5%",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    alignContent: "center",
                    alignItems: "center",
                    border: "1px solid #D4D2D0",
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                    borderRadius: "5px"
              }}
            >
              <CardContent>
                <Typography
                  component="div"
                  gutterBottom
                  className={styles.cardTitle}
                >
                  Filter for Jobs
                </Typography>
                <hr className={styles.hr} />
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{
                    fontWeight: "bold",
                    borderRadius: "10px",
                    width: "100%",
                    bgcolor: "#FFFFFF",
                    margin: "5% 0%",
                  }}
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                  placeholder="Search for Job Title"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{
                    fontWeight: "bold",
                    borderRadius: "10px",
                    width: "100%",
                    bgcolor: "#FFFFFF",
                    margin: "5% 0%",
                  }}
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="Search By Location"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControl
                  fullWidth
                  sx={{
                    margin: "5% 0%",
                  }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Sort By: Job status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    sx={{
                      fontWeight: "bold",
                      borderRadius: "5px",
                      width: "100%",
                      bgcolor: "#FFFFFF",
                    }}
                    id="demo-simple-select"
                    label="Sort By: Job status"
                    value={jobStatus}
                    onChange={(e) => setJobStatus(e.target.value)}
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value={"Active"}>Active</MenuItem>
                    <MenuItem value={"Paused"}>Paused</MenuItem>
                    <MenuItem value={"Closed"}>Closed</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8.8} xl={8.8}>
             <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ height: "80px" }}>
                  <TableRow>
                    <TableCell className={styles.titles}>Job Title</TableCell>
                    <TableCell className={styles.titles}>Location</TableCell>
                    <TableCell className={styles.titles}>Openings</TableCell>
                    <TableCell className={styles.titles}>Job Status</TableCell>
                    <TableCell className={styles.titles}>Candidates</TableCell>
                    <TableCell className={styles.titles} >Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!loading &&
                    filteredJobs.map((job) => (
                      <TableRow
                        key={job.id}
                        className={styles.description}
                        sx={{ height: "100px" }}
                      >
                        <TableCell className={styles.titleDescription} onClick={(event) => handleClickOpen(event, job)}>
                          {job.jobTitle}
                        </TableCell>
                        <TableCell className={styles.description}>
                          {job.location.placeName}
                        </TableCell>
                        <TableCell className={styles.description} sx={{ width: "30px", textAlign:"center" }}>
                          {job.noOfPositions}
                        </TableCell>
                        <TableCell className={styles.description} sx={{ width: "70px" }}>
                          <Select
                            defaultValue=""
                            value={job.jobStatus}
                            onChange={(e) => handleChange(e, job.id)}
                            displayEmpty
                            sx={{
                              width: "115px",
                              height: "40px",
                            }}
                          >
                            <MenuItem value="Active">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{ color: "green" }}
                                  sx={{ fontSize: "15px", paddingRight: "5px" }}
                                />
                                <ListItemText primary="Active" />
                              </div>
                            </MenuItem>
                            <MenuItem value="Closed">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{ color: "red" }}
                                  sx={{ fontSize: "15px", paddingRight: "5px" }}
                                />
                                <ListItemText primary="Closed" />
                              </div>
                            </MenuItem>
                            <MenuItem value={"Paused"}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <FiberManualRecordIcon
                                  style={{ color: "yellow" }}
                                  sx={{ fontSize: "15px", paddingRight: "5px" }}
                                />
                                <ListItemText primary="Paused" />
                              </div>
                            </MenuItem>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            className={styles.buttonApplicants}
                            onClick={() => router.push(`/applicants/${job.id}`)}
                          >
                            Applicants
                          </Button>
                        </TableCell>
                        <TableCell>
                            <Grid container direction="row">
                                <Grid item xs={4} lg={3} sx={{marginRight: '10px'}}>
                                    <Button>
                                        <EditIcon sx={{ color: "#008001"}} onClick={() => handleEdit(job)}/>
                                    </Button>
                                </Grid>
                                <Grid item xs={6} lg={3}>
                                    <Button>
                                        <DeleteIcon sx={{ color: "red" }} onClick={() => handleDelete(job.id)}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </TableCell>

                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>  
          </Grid>
        </Grid>
        {  jobDetails &&       
            <JobDetails
              jobDetailsOpen={jobDetailsOpen}
              handleClose={handleClose}
              jobData={jobDetails}
              isClickedByEmployer = {true}
            />
        }
      </Box>
      
    </>
  );
}
