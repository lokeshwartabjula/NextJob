"use client";
import JobDetails from "../../../components/JobDetails/JobDetails";

const JobPage: React.FC = () => {
  const jobData = {
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png",
    companyName: "OpenAI",
    jobPosition: "Frontend Developer",
    location: "San Francisco, CA",
    overview:
      "We are looking for an experienced front-end developer who is proficient with React.js.",
    requirements:
      "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model. Experience with popular React.js workflows (such as Flux or Redux)",
    responsibilities:
      "Developing new user-facing features using React.js. Building reusable components and front-end libraries for future use.",
  };

  return (
    <div>
      <JobDetails
        logo={jobData.logo}
        companyName={jobData.companyName}
        jobPosition={jobData.jobPosition}
        location={jobData.location}
        overview={jobData.overview}
        requirements={jobData.requirements}
        responsibilities={jobData.responsibilities}
      />
    </div>
  );
};

export default JobPage;
