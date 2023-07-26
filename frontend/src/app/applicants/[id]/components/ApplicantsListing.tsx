"use client";

import { useState, useEffect } from "react";
import { axiosInstance } from "../../../../../api";
import { useRouter } from 'next/navigation';
import { ApplicantsType } from "../(constants)/ApplicantInformation";
import ApplicantDetails from "./ApplicantDetails";

import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  InputAdornment,
  Table,
  Typography,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  useTheme,
  useMediaQuery
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../(constants)/applicants.module.css";

export default function ApplicantsListing(props:{ id: string}) {
    const jobId = props.id;
    const [loading, setLoading] = useState(true);
    var router = useRouter();
    const theme = useTheme();
    const captionSize = useMediaQuery(theme.breakpoints.down('md'));
  
    const [ applicants, setApplicants] = useState([]);
    const [ seekersData, setSeekersData] = useState<ApplicantsType[]>([]);
    const [ filteredSeekers, setFilteredSeekers] = useState<ApplicantsType[]>([]);
    const [ searchRecentExperience, setSearchRecentExperince] = useState("");
    const [ searchFieldOfStudy, setSearchFieldOfStudy] = useState("");
    const [ searchDegree, setSearchDegree] = useState("");
    const [ applicantDetailsOpen, setJobDetailsOpen ] = useState(false);
    const [ applicantDetails, setJobDetails ] = useState<ApplicantsType>();

    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const response = await axiosInstance.get(`getJobApplicantIdsByJobId/${jobId}`);
                setApplicants(response.data.applicants);
            } catch (error) {
                console.error('Error fetching applicant data:', error);
            }
        }

        fetchApplicants();
    }, []);
  
    useEffect(() => {
        const fetchSeekers = async () => {
            let seekers = [];
            for(let i=0; i<applicants.length; i++) {
                try {
                    const response = await axiosInstance.get(`seeker/${applicants[i]}`);
                    seekers.push(response.data.seekers[0]);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching seeker data:', error);
                }
            }
            setSeekersData(seekers);
        }

        if (applicants.length > 0) {
            fetchSeekers();
        }
    }, [applicants]);

    useEffect(() => {
        let result = [...seekersData];
        
        if (searchRecentExperience) {
          result = result.filter(seeker => seeker.experiences[0].title.toLowerCase().includes(searchRecentExperience.toLowerCase()));
        }
        
        if (searchFieldOfStudy) {
          result = result.filter(seeker => seeker.educations[0].fieldOfStudy.toLowerCase().includes(searchFieldOfStudy.toLowerCase()));
        }
        
        if (searchDegree) {
          result = result.filter( seeker => seeker.educations[0].degree.toLowerCase().includes(searchDegree.toLowerCase()));
        }
    
        setFilteredSeekers(result);
      }, [searchRecentExperience, searchFieldOfStudy, searchDegree, seekersData]);

      const handleClickOpen = (event: any, applicant: ApplicantsType) => {
        setJobDetails(applicant);
        setJobDetailsOpen(true);
      };
    
      const handleClose = () => {
        setJobDetailsOpen(false);
      };

  console.log("applicantDetails",applicantDetails);
  
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
                    borderRadius: "5px"
                } 
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
                  Filter for Applicants
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
                  value={searchRecentExperience}
                  onChange={(e) => setSearchRecentExperince(e.target.value)}
                  placeholder="Search from recent experience"
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
                  value={searchFieldOfStudy}
                  onChange={(e) => setSearchFieldOfStudy(e.target.value)}
                  placeholder="Search By field of study"
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
                  value={ searchDegree}
                  onChange={(e) => setSearchDegree(e.target.value)}
                  placeholder="Search By degree"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8.8} xl={8.8}>
             <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ height: "80px" }}>
                  <TableRow>
                    <TableCell className={styles.titles}>Name</TableCell>
                    <TableCell className={styles.titles}>Recent Experience</TableCell>
                    <TableCell className={styles.titles}>Field of study</TableCell>
                    <TableCell className={styles.titles}>Degree</TableCell>
                    <TableCell className={styles.titles}>View Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!loading &&
                    filteredSeekers.map((seeker) => (
                      <TableRow
                        key={seeker.id}
                        className={styles.description}
                        sx={{ height: "100px" }}
                      >
                        <TableCell className={styles.description}>
                          {seeker.email}
                        </TableCell>
                        <TableCell className={styles.description}>
                          {seeker.experiences[0].title}
                        </TableCell>
                        <TableCell className={styles.description} >
                            {seeker.educations[0].fieldOfStudy}
                        </TableCell>
                        <TableCell>
                            {seeker.educations[0].degree}
                        </TableCell>
                        <TableCell>
                            <Button
                                variant="contained"
                                className={styles.buttonApplicants}
                                onClick={(event) => handleClickOpen(event, seeker)}
                            >
                                View Details
                            </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>  
          </Grid>
        </Grid>
        { applicantDetails &&       
            <ApplicantDetails
            applicantDataOpen={applicantDetailsOpen}
              handleClose={handleClose}
              applicantData={applicantDetails}
            />
        }
      </Box>
    </>
  );
}