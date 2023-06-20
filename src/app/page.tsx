"use client";
import ResponsiveAppBar from "./header/Header";
import Cover from "./home/Cover";
import JobSteps from "./home/JobSteps";
import RecrutingOption from "./home/RecrutingOption";

export default function MyApp() {
  return (
    <div>
      <Cover />
      <JobSteps />
      <RecrutingOption />
    </div>
  );
}
