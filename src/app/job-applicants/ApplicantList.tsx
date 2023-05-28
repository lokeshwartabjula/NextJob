import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

interface ApplicantProps {
  applicant: {
    name: string;
    current_position: string;
    total_experience: string;
    field_of_expertise: string;
    address: string;
    age: number;
    email: string;
    phone: string;
    linkedin: string;
    applied_date: string;
    status: string;
    education: string;
    skills: string[];
    references: string[];
  };
}

export const ApplicantList: React.FC<ApplicantProps> = ({ applicant }) => {
  return (
    <Card sx={{ marginBottom: 2, padding: 2 }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", marginBottom: 2 }}
        >
          {applicant.name}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Current Position: {applicant.current_position}
            </Typography>
            <Typography variant="body2">
              Experience: {applicant.total_experience}
            </Typography>
            <Typography variant="body2">
              Field of Expertise: {applicant.field_of_expertise}
            </Typography>
            <Typography variant="body2">Email: {applicant.email}</Typography>
            <Typography variant="body2">Phone: {applicant.phone}</Typography>
            <Typography variant="body2">Status: {applicant.status}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              Address: {applicant.address}
            </Typography>
            <Typography variant="body2">Age: {applicant.age}</Typography>
            <Typography variant="body2">
              LinkedIn: {applicant.linkedin}
            </Typography>
            <Typography variant="body2">
              Applied Date: {applicant.applied_date}
            </Typography>
            <Typography variant="subtitle1">
              Education: {applicant.education}
            </Typography>
            <Typography variant="subtitle1">
              Skills: {applicant.skills.join(", ")}
            </Typography>
            <Typography variant="body2">
              References: {applicant.references.join(", ")}
            </Typography>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          View More
        </Button>
      </CardContent>
    </Card>
  );
};
