type ApplicantType = {
    id: string;
    name: string;
    email: string;
    phone: string;
    experience: string;
    education: string;
    skills: string[];
    resumeURL: string;
    coverLetter: string;
    status: string;
    notes: string;
    interviewDate?: string;
  };

  const jobApplicants: ApplicantType[] = [
    {
      id: "1",
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      experience: "5 years",
      education: "Bachelor's Degree",
      skills: ["JavaScript", "HTML", "CSS", "React"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Pending",
      notes: "Seems like a strong candidate.",
      interviewDate: "2023-07-25"
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
      experience: "3 years",
      education: "Master's Degree",
      skills: ["Python", "Java", "SQL"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Rejected",
      notes: "Lacks required experience.",
      interviewDate: "2023-07-20"
    },
    {
      id: "3",
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      phone: "456-789-0123",
      experience: "2 years",
      education: "Associate's Degree",
      skills: ["C++", "Ruby", "Git"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Accepted",
      notes: "Impressive skillset.",
      interviewDate: "2023-07-18"
    },
    {
      id: "4",
      name: "Bob Williams",
      email: "bobwilliams@example.com",
      phone: "789-012-3456",
      experience: "4 years",
      education: "Bachelor's Degree",
      skills: ["JavaScript", "Node.js", "MongoDB"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Pending",
      notes: "Needs more experience in backend development.",
      interviewDate: "2023-07-24"
    },
    {
      id: "5",
      name: "Emily Davis",
      email: "emilydavis@example.com",
      phone: "234-567-8901",
      experience: "1 year",
      education: "Bachelor's Degree",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Pending",
      notes: "Strong front-end skills.",
      interviewDate: "2023-07-26"
    },
    {
      id: "6",
      name: "Michael Brown",
      email: "michaelbrown@example.com",
      phone: "890-123-4567",
      experience: "6 years",
      education: "Master's Degree",
      skills: ["Python", "Django", "SQL", "AWS"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Rejected",
      notes: "Overqualified for the position.",
      interviewDate: "2023-07-19"
    },
    {
      id: "7",
      name: "Olivia Taylor",
      email: "oliviataylor@example.com",
      phone: "567-890-1234",
      experience: "3 years",
      education: "Bachelor's Degree",
      skills: ["Java", "Spring Boot", "MySQL"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Pending",
      notes: "Good communication skills.",
      interviewDate: "2023-07-28"
    },
    {
      id: "8",
      name: "William Anderson",
      email: "williamanderson@example.com",
      phone: "012-345-6789",
      experience: "2 years",
      education: "Associate's Degree",
      skills: ["C#", ".NET", "SQL Server"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Accepted",
      notes: "Showed strong problem-solving abilities.",
      interviewDate: "2023-07-23"
    },
    {
      id: "9",
      name: "Sophia Martin",
      email: "sophiamartin@example.com",
      phone: "345-678-9012",
      experience: "4 years",
      education: "Bachelor's Degree",
      skills: ["JavaScript", "React", "Redux"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Pending",
      notes: "Experience in building responsive web applications.",
      interviewDate: "2023-07-30"
    },
    {
      id: "10",
      name: "James Rodriguez",
      email: "jamesrodriguez@example.com",
      phone: "678-901-2345",
      experience: "3 years",
      education: "Bachelor's Degree",
      skills: ["Python", "Flask", "PostgreSQL"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Rejected",
      notes: "Lacked experience in working with large-scale systems.",
      interviewDate: "2023-07-21"
    },
    {
      id: "11",
      name: "Ava Wilson",
      email: "avawilson@example.com",
      phone: "901-234-5678",
      experience: "2 years",
      education: "Associate's Degree",
      skills: ["Java", "Spring", "Hibernate"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Pending",
      notes: "Internship experience at a well-known tech company.",
      interviewDate: "2023-07-27"
    },
    {
      id: "12",
      name: "Alexander Lee",
      email: "alexanderlee@example.com",
      phone: "123-456-7890",
      experience: "4 years",
      education: "Bachelor's Degree",
      skills: ["JavaScript", "TypeScript", "Angular"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Pending",
      notes: "Certifications in frontend development.",
      interviewDate: "2023-07-22"
    },
    {
      id: "13",
      name: "Mia Thompson",
      email: "miathompson@example.com",
      phone: "987-654-3210",
      experience: "1 year",
      education: "Bachelor's Degree",
      skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Accepted",
      notes: "Displayed a good understanding of modern web technologies.",
      interviewDate: "2023-07-29"
    },
    {
      id: "14",
      name: "Henry Harris",
      email: "henryharris@example.com",
      phone: "456-789-0123",
      experience: "3 years",
      education: "Master's Degree",
      skills: ["Python", "Django", "PostgreSQL"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Rejected",
      notes: "Insufficient experience in frontend development.",
      interviewDate: "2023-07-20"
    },
    {
      id: "15",
      name: "Charlotte Walker",
      email: "charlottewalker@example.com",
      phone: "789-012-3456",
      experience: "2 years",
      education: "Bachelor's Degree",
      skills: ["Java", "Spring Boot", "MySQL"],
      resumeURL: "https://example.com/resume",
      coverLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "Pending",
      notes: "Internship experience at a startup.",
      interviewDate: "2023-07-31"
    }
   
  ];

  export default jobApplicants;
  