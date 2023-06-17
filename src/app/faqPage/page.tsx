"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

const faqData: any[] = [
  {
    question: "How can I create an account on the job search website?",
    answer:
      "To create an account, click on the 'Sign Up' button located at the top right corner of our homepage. You will be prompted to provide your personal information such as your full name, email address, and a password.",
  },
  {
    question: "How can I apply for a job?",
    answer:
      "After logging into your account, you can search for available jobs using the search bar or filters. Once you find a job that interests you, click on the job title to view more details. There should be an 'Apply Now' button which you can click to submit your application.",
  },
  {
    question: "What types of jobs are available?",
    answer:
      "We host a wide range of jobs across numerous industries. This includes roles in finance, technology, healthcare, retail, education, and more. You can filter by industry in the search function.",
  },
  {
    question: "Can I save jobs to apply later?",
    answer:
      "Yes, you can. If you find a job you're interested in but aren't ready to apply, you can save the job by clicking the 'Save Job' button on the job posting page.",
  },
  {
    question: "How can I update my resume or cover letter?",
    answer:
      "To update your resume or cover letter, go to your profile and click on the 'Documents' section. Here, you can upload new versions of your resume or cover letter or edit the existing ones.",
  },
  {
    question: "How will I know if a job is still open?",
    answer:
      "Job postings that are no longer accepting applications are marked as 'Closed.' You can also filter your search results to only show jobs that are currently open.",
  },
  {
    question: "Can I set up job alerts?",
    answer:
      "Yes, you can set up job alerts by navigating to your account settings and selecting the 'Job Alerts' option. Here, you can specify the types of jobs you're interested in, and we will send you email notifications when new job postings match your criteria.",
  },
  {
    question: "What if I forget my password?",
    answer:
      "If you forget your password, click on the 'Forgot Password?' link on the login page. You will be asked to enter the email address associated with your account, and a link to reset your password will be sent to that email.",
  },
  {
    question: "How do I deactivate my account?",
    answer:
      "To deactivate your account, please go to the account settings and click on the 'Deactivate Account' button. Please note that this action is irreversible.",
  },
  {
    question: "Is there a fee to use the job search website?",
    answer:
      "Our job search platform is free for job seekers. We believe in providing free access to job opportunities. Some additional features may carry a fee, but basic job searching and application is free.",
  },
  {
    question: "How can I report a suspicious job posting?",
    answer:
      "If you see a job posting that looks suspicious or fraudulent, please report it by clicking on the 'Report' button on the job posting page. Please provide as many details as possible in your report to help us investigate.",
  },
  {
    question: "What do I do if I have more questions?",
    answer:
      "If you have more questions, please visit our 'Contact Us' page. You can reach out to us via email or phone. We are here to help!",
  },
];

export default function SimpleAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div style={{ padding: 30 }}>
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          margin={2}
          marginTop={10}
          color={"#515151"}
        >
          FAQs
        </Typography>
        <Typography variant="h4" fontWeight="bold" margin={2}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body2" margin={2} marginBottom={4}>
          Have questions? We're here to help.
        </Typography>
        <input
          style={{
            marginBottom: 30,
            width: "37vw",
            height: 20,
          }}
          type="text"
          placeholder="Search Questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="container">
        {faqData
          .filter(
            (faq) =>
              faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                "&:before": {
                  display: "none",
                },
                background: "#F4F4F4",
                padding: 2,
              }}
              style={{
                margin: 8,
                borderRadius: 15,
              }}
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ background: "#FFFFFF", padding: 2, borderRadius: 2 }}
              >
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
    </div>
  );
}
