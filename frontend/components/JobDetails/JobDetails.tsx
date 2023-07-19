import {
  Box,
  Container,
  Paper,
  Grid,
  Card,
  Button,
  Typography,
} from "@mui/material";

interface JobDetailsProps {
  logo: string;
  companyName: string;
  jobPosition: string;
  location: string;
  overview: string;
  requirements: string;
  responsibilities: string;
}

const JobDetails: React.FC<JobDetailsProps> = ({
  logo,
  companyName,
  jobPosition,
  location,
  overview,
  requirements,
  responsibilities,
}) => (
  <Container>
    <Box textAlign="center" mb={2}>
      <img
        src={logo}
        alt={`${companyName} logo`}
        width="45px"
        height="45px"
        border-radius="50px"
        overflow="hidden"
        margin="10px"
      />
      <Typography variant="h4">{companyName}</Typography>
    </Box>

    <Box textAlign="left" mb={2}>
      <Typography variant="h5">{jobPosition}</Typography>
      <Typography variant="subtitle1">{location}</Typography>
    </Box>

    <Grid container spacing={2} mb={2}>
      <Grid item xs={12}>
        <Card>
          <Box p={2}>
            <Typography variant="h6">Overview</Typography>
            <Typography variant="body1">{overview}</Typography>
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <Box p={2}>
            <Typography variant="h6">Requirements</Typography>
            <Typography variant="body1">{requirements}</Typography>
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <Box p={2}>
            <Typography variant="h6">Responsibilities</Typography>
            <Typography variant="body1">{responsibilities}</Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>

    <Box textAlign="center">
      <Button variant="contained" color="primary">
        Apply Now
      </Button>
    </Box>
  </Container>
);

export default JobDetails;
