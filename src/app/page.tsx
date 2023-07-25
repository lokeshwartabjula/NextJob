"use client";
import { Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cover from "./home/Cover";
import JobSteps from "./home/JobSteps";
import RecrutingOption from "./home/RecrutingOption";

export default function MyApp() {
// const MainComponent = () => {
  return (
    <Grid container rowSpacing={3}>
      <Grid item marginLeft={{ xs: 0, md: 4, lg:10, xl:16 }}>
        <Cover />
      </Grid>
      <Grid item>
        <JobSteps />
      </Grid>
      <Grid item>
        <RecrutingOption />
      </Grid>
    </Grid>
  );
}

// export default function MyApp() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainComponent />} />

//       </Routes>
//     </Router>
//   );
// }
