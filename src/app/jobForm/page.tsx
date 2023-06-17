"use client";

import { NodeNextRequest } from "next/dist/server/base-http/node";
import React, { useState, FormEvent } from "react";
import Navbar from "../navBar/page";

const JobForm = ({ initialData, onSubmit }: any) => {
  const [data, setData] = useState<any>(
    initialData || {
      jobPostName: "",
      companyName: "",
      location: "",
      payRate: 0,
      jobType: "",
      jobCategory: "",
      description: "",
      experienceLevel: "",
      educationLevel: "",
      language: "",
    }
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Job form data submitted: ", data);
    // Put your logic here to handle the submitted job form data
  };

  const jobTypes = ["Full-time", "Part-time", "Internship"];
  const jobCategories = [
    "Engineering",
    "Marketing",
    "Sales",
    "HR",
    "Management",
  ];
  const experienceLevels = ["Entry Level", "Mid Level", "Senior Level"];
  const educationLevels = ["High School", "Bachelor's", "Master's", "Ph.D"];
  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payRate = parseInt(e.target.value);
    if (payRate >= 0) {
      setData({
        ...data,
        payRate,
      });
    }
  };

  const formStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    width: "100%",
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    boxSizing: "border-box",
    marginTop: "10px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const inputStyles = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #007BFF",
    backgroundColor: "white",
    color: "black",
  };

  const buttonStyles = {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  const labelStyles = {
    color: "black",
  };

  return (
    <div
      style={{ width: "100%", minHeight: "100vh", backgroundColor: "#FAF9F6" }}
    >
      <Navbar links={["Home", "About", "Contact", "Jobs"]} />
      <h1 style={{ color: "Black", marginTop: "1%", textAlign: "center" }}>
        Post a Job
      </h1>
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          console.log("Job form data submitted: ", data);
        }}
        style={formStyles}
        id="job-post-form"
      >
        <label style={labelStyles} htmlFor="job-post-name">
          Job Post Name:
        </label>
        <input
          id="job-post-name"
          type="text"
          name="jobPostName"
          value={data.jobPostName || ""}
          onChange={handleChange}
          required
          style={inputStyles}
        />

        <label style={labelStyles} htmlFor="company-name">
          Company Name:
        </label>
        <input
          id="company-name"
          type="text"
          name="companyName"
          value={data.companyName || ""}
          onChange={handleChange}
          required
          style={inputStyles}
        />

        <label style={labelStyles} htmlFor="location">
          Location:
        </label>
        <input
          id="location"
          type="text"
          name="location"
          value={data.location || ""}
          onChange={handleChange}
          required
          style={inputStyles}
        />

        <label style={labelStyles} htmlFor="pay-rate">
          Pay Rate:
        </label>
        <input
          id="pay-rate"
          type="text" // Changed to text input type
          name="payRate"
          value={data.payRate || ""}
          onChange={handlePayRateChange}
          required
          style={inputStyles}
        />

        <label style={labelStyles} htmlFor="job-type">
          Job Type:
        </label>
        <select
          id="job-type"
          name="jobType"
          value={data.jobType}
          onChange={handleChange}
          required
          style={inputStyles}
        >
          {jobTypes.map((type, index) => (
            <option value={type} key={index}>
              {type}
            </option>
          ))}
        </select>

        <label style={labelStyles} htmlFor="job-category">
          Job Category:
        </label>
        <select
          id="job-category"
          name="jobCategory"
          value={data.jobCategory}
          onChange={handleChange}
          required
          style={inputStyles}
        >
          {jobCategories.map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>

        <label style={labelStyles} htmlFor="experience-level">
          Experience Level:
        </label>
        <select
          id="experience-level"
          name="experienceLevel"
          value={data.experienceLevel}
          onChange={handleChange}
          required
          style={inputStyles}
        >
          {experienceLevels.map((level, index) => (
            <option value={level} key={index}>
              {level}
            </option>
          ))}
        </select>

        <label style={labelStyles} htmlFor="education-level">
          Education Level:
        </label>
        <select
          id="education-level"
          name="educationLevel"
          value={data.educationLevel}
          onChange={handleChange}
          required
          style={inputStyles}
        >
          {educationLevels.map((level, index) => (
            <option value={level} key={index}>
              {level}
            </option>
          ))}
        </select>

        <label style={labelStyles} htmlFor="language">
          Language:
        </label>
        <select
          id="language"
          name="language"
          value={data.language}
          onChange={handleChange}
          required
          style={inputStyles}
        >
          {languages.map((language, index) => (
            <option value={language} key={index}>
              {language}
            </option>
          ))}
        </select>

        <label
          style={{ gridColumn: "span 2", ...labelStyles }}
          htmlFor="description"
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={data.description || ""}
          onChange={handleChange}
          required
          style={{
            ...inputStyles,
            gridColumn: "span 2",
            width: "100%",
            resize: "none",
            height: "150px",
          }}
        />

        <div style={{ gridColumn: "span 2", textAlign: "center" }}>
          <button type="submit" style={buttonStyles}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
