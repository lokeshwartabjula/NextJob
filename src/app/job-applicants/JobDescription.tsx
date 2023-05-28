import { Card, CardContent, Typography } from "@mui/material";

export const JobDescription: React.FC = () => {
  return (
    <Card sx={{ marginBottom: 2, padding: 2 }}>
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: "bold", marginBottom: 2 }}
        >
          Job Description
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Position: Software Engineer
        </Typography>
        <Typography variant="body2">Location: New York, USA</Typography>
        <Typography variant="body2">Type: Full-Time</Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", marginTop: 2 }}
        >
          Responsibilities:
        </Typography>
        <Typography variant="body2">- Develop software</Typography>
        <Typography variant="body2">- Collaborate with team</Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", marginTop: 2 }}
        >
          Qualifications:
        </Typography>
        <Typography variant="body2">- Experience with JavaScript</Typography>
        <Typography variant="body2">- Strong problem solving skills</Typography>
      </CardContent>
    </Card>
  );
};
