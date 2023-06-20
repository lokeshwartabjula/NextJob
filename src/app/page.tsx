"use client";
import ResponsiveAppBar from "./demo";
import Cover from "./components/Cover";
import JobSteps from "./components/JobSteps";
import RecrutingOption from "./components/RecrutingOption";

export default function MyApp() {
  return (
    <div>
      <ResponsiveAppBar />
      <Cover />
      <JobSteps />
      <RecrutingOption />
    </div>
  );
}
