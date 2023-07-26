type JobInformation = {
    id: string;
    jobTitle: string;
    jobDescription: string;
    skills: string[];
    jobStatus: string;
    NoOfPosition: string;
    HiredPeople: string;
    jobType: string;
    Location: string;
    salary: string;
    openDate: string;
    closeDate: string;
  };
  
  const JobInformationData: JobInformation[] = [
    {
      id: "1",
      jobTitle: "Software Engineer",
      jobDescription:
        "We are seeking a skilled software engineer to join our development team...",
      skills: ["Java", "Spring", "SQL"],
      jobStatus: "Active",
      NoOfPosition: "2",
      HiredPeople: "0",
      jobType: "Full-time",
      Location: "San Francisco, CA",
      salary: "90000",
      openDate: "2023-07-15",
      closeDate: "2023-08-15",
    },
    {
      id: "2",
      jobTitle: "Marketing Manager",
      jobDescription:
        "We are looking for an experienced marketing manager to lead our marketing efforts...",
      skills: ["Digital Marketing", "SEO", "Social Media"],
      jobStatus: "Paused",
      NoOfPosition: "1",
      HiredPeople: "0",
      jobType: "Full-time",
      Location: "New York, NY",
      salary: "80000",
      openDate: "2023-07-10",
      closeDate: "2023-08-10",
    },
    {
      id: "3",
      jobTitle: "Graphic Designer",
      jobDescription:
        "Join our creative team as a graphic designer and bring visual ideas to life...",
      skills: ["Adobe Photoshop", "Illustrator", "Typography"],
      jobStatus: "Closed",
      NoOfPosition: "2",
      HiredPeople: "0",
      jobType: "Part-time",
      Location: "Los Angeles, CA",
      salary: "50000",
      openDate: "2023-07-05",
      closeDate: "2023-08-05",
    },
    {
      id: "4",
      jobTitle: "Data Analyst",
      jobDescription:
        "We are hiring a data analyst to extract and analyze business data for insights...",
      skills: ["SQL", "Data Visualization", "Excel"],
      jobStatus: "Active",
      NoOfPosition: "1",
      HiredPeople: "0",
      jobType: "Contract",
      Location: "Chicago, IL",
      salary: "70000",
      openDate: "2023-07-01",
      closeDate: "2023-08-01",
    },
    {
      id: "5",
      jobTitle: "Frontend Developer",
      jobDescription:
        "Join our team as a frontend developer and create interactive user interfaces...",
      skills: ["HTML", "CSS", "JavaScript"],
      jobStatus: "Active",
      NoOfPosition: "3",
      HiredPeople: "0",
      jobType: "Full-time",
      Location: "Seattle, WA",
      salary: "85000",
      openDate: "2023-06-28",
      closeDate: "2023-07-28",
    },
    {
      id: "6",
      jobTitle: "Product Manager",
      jobDescription:
        "We are seeking a talented product manager to lead our product development...",
      skills: ["Product Strategy", "Agile Methodology", "Market Research"],
      jobStatus: "Paused",
      NoOfPosition: "1",
      HiredPeople: "0",
      jobType: "Full-time",
      Location: "Austin, TX",
      salary: "100000",
      openDate: "2023-06-25",
      closeDate: "2023-07-25",
    },
    {
      id: "7",
      jobTitle: "Sales Representative",
      jobDescription:
        "Join our sales team and drive business growth through effective sales strategies...",
      skills: ["Negotiation", "Relationship Building", "CRM"],
      jobStatus: "Active",
      NoOfPosition: "2",
      HiredPeople: "0",
      jobType: "Full-time",
      Location: "Boston, MA",
      salary: "75000",
      openDate: "2023-06-20",
      closeDate: "2023-07-20",
    },
    {
      id: "8",
      jobTitle: "HR Manager",
      jobDescription:
        "We are looking for an experienced HR manager to oversee our human resources...",
      skills: ["Recruitment", "Employee Relations", "HR Policies"],
      jobStatus: "Closed",
      NoOfPosition: "1",
      HiredPeople: "0",
      jobType: "Full-time",
      Location: "Denver, CO",
      salary: "90000",
      openDate: "2023-06-15",
      closeDate: "2023-07-15",
    },
    {
      id: "9",
      jobTitle: "Content Writer",
      jobDescription:
        "Join our content team and create engaging written content for various platforms...",
      skills: ["Copywriting", "Content Marketing", "SEO"],
      jobStatus: "Active",
      NoOfPosition: "2",
      HiredPeople: "0",
      jobType: "Part-time",
      Location: "San Diego, CA",
      salary: "55000",
      openDate: "2023-06-10",
      closeDate: "2023-07-10",
    },
    {
      id: "10",
      jobTitle: "IT Support Specialist",
      jobDescription:
        "We are hiring an IT support specialist to provide technical assistance to our employees...",
      skills: ["Troubleshooting", "Networking", "Hardware"],
      jobStatus: "Closed",
      NoOfPosition: "1",
      HiredPeople: "0",
      jobType: "Contract",
      Location: "Washington, D.C.",
      salary: "65000",
      openDate: "2023-06-05",
      closeDate: "2023-07-05",
    },
    {
      id: "11",
      jobTitle: "Business Analyst",
      jobDescription:
        "Join our business analysis team and analyze data to drive strategic decision-making...",
      skills: ["Data Analysis", "Business Intelligence", "Requirements Gathering"],
      jobStatus: "Active",
      NoOfPosition: "1",
      HiredPeople: "0",
      jobType: "Full-time",
      Location: "Houston, TX",
      salary: "85000",
      openDate: "2023-06-01",
      closeDate: "2023-07-01",
    },
    {
      id: "12",
      jobTitle: "Quality Assurance Engineer",
      jobDescription:
        "We are seeking a QA engineer to ensure the quality of our software products...",
      skills: ["Testing", "Test Automation", "Bug Tracking"],
      jobStatus: "Active",
      NoOfPosition: "2",
      HiredPeople: "0",
      jobType: "Full-time",
      Location: "Atlanta, GA",
      salary: "80000",
      openDate: "2023-05-28",
      closeDate: "2023-06-28",
    },
    {
      id: "13",
      jobTitle: "Financial Analyst",
      jobDescription:
        "Join our finance team and analyze financial data to support business decisions...",
      skills: ["Financial Modeling", "Forecasting", "Financial Reporting"],
      jobStatus: "Active",
      NoOfPosition: "1",
      HiredPeople: "0",
      jobType: "Full-time",
      Location: "Miami, FL",
      salary: "95000",
      openDate: "2023-05-25",
      closeDate: "2023-06-25",
    },
    {
      id: "14",
      jobTitle: "Project Manager",
      jobDescription:
        "We are looking for a skilled project manager to oversee our projects and ensure success...",
      skills: ["Project Planning", "Team Management", "Risk Assessment"],
      jobStatus: "Active",
      NoOfPosition: "1",
      HiredPeople: "0",
      jobType: "Full-time",
      Location: "Dallas, TX",
      salary: "100000",
      openDate: "2023-05-20",
      closeDate: "2023-06-20",
    },
    {
      id: "15",
      jobTitle: "UX Researcher",
      jobDescription:
        "Join our UX research team and conduct user research to improve our products...",
      skills: ["User Interviews", "Usability Testing", "Persona Creation"],
      jobStatus: "Active",
      NoOfPosition: "2",
      HiredPeople: "0",
      jobType: "Part-time",
      Location: "Philadelphia, PA",
      salary: "60000",
      openDate: "2023-05-15",
      closeDate: "2023-06-15",
    },
  ];
  
  export default JobInformationData;
  