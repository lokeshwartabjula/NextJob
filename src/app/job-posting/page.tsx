"use client";

import * as React from "react";
import { useState } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import "./styles.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputField from "./input-field";
import SelectField from "./select-field";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";

const JOB_LOCATIONS: string[] = ["Banglore", "Mumbai", "Delhi"];
const JOB_TYPES: string[] = ["Full Time", "Part Time", "Intern", "Contract"];

export default function JobPosting() {
  const [location, setLocation] = useState("Banglore");
  const [jobType, setJobType] = useState("Full Time");
  const [jobPosition, setJobPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [closingDate, setClosingDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [salary, setSalary] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  const handleJobTypeChange = (event: SelectChangeEvent) => {
    setJobType(event.target.value as string);
  };

  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      setSalary(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`
      Job Position: ${jobPosition}
      Company Name: ${companyName}
      Location: ${location}
      Job Type: ${jobType}
      Roles Description: ${jobDescription}
      Closing Date: ${closingDate}
      Salary: ${salary}
    `);
  };

  return (
    <div className="box-parent">
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexWrap="wrap"
          boxShadow={3}
          marginLeft={isTablet ? 2 : 9}
          marginRight={isTablet ? 2 : 9}
          marginTop={isTablet ? 2 : 5}
          borderRadius={5}
          marginBottom={isTablet ? 2 : 5}
          alignItems={"center"}
          flexDirection={"column"}
          bgcolor={"#fff"}
        >
          {isMobile ? (
            <h3>POST A JOB ON PORTAL</h3>
          ) : (
            <h2>POST A JOB ON PORTAL</h2>
          )}
          <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
            <Box>
              <InputField
                id="outlined-multiline-flexible-1"
                label="Job Position"
                setValue={setJobPosition}
              ></InputField>
              <InputField
                id="outlined-multiline-flexible-2"
                label="Company Name"
                setValue={setCompanyName}
              ></InputField>
              <Box width={isTablet ? 250 : 350} mx={2}>
                <Box display="flex" flexDirection="row" marginTop={2}>
                  <Typography>Location</Typography>
                  <Typography color="red">*</Typography>
                </Box>
                <TextField
                  className="text-field"
                  id="Location"
                  required={true}
                  fullWidth
                  // onChange={}
                />
              </Box>
            </Box>
            <Box>
              <Box width={isTablet ? 250 : 350} mx={2}>
                <Box display="flex" flexDirection={"row"} marginTop={2}>
                  <Typography>Closing Date</Typography>
                  <Typography color={"red"}>*</Typography>
                </Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={closingDate}
                    onChange={(newValue: dayjs.Dayjs | null) => {
                      if (newValue !== null) {
                        setClosingDate(newValue);
                      }
                    }}
                    className="date-selector"
                  />
                </LocalizationProvider>
              </Box>
              <Box width={isTablet ? 250 : 350} mx={2}>
                <Box display="flex" flexDirection={"row"} marginTop={2.5}>
                  <Typography>Salary</Typography>
                  <Typography color={"red"}>*</Typography>
                </Box>
                <TextField
                  className="text-field"
                  id="outlined-multiline-flexible-5"
                  required={true}
                  fullWidth
                  value={salary}
                  onChange={handleSalaryChange}
                />
              </Box>
              <SelectField
                id="jobType"
                label="Job Type"
                value={jobType}
                options={JOB_TYPES}
                setValue={setJobType}
              />
            </Box>
          </Box>
          <Box mx={2}>
            <Box display="flex" flexDirection={"row"} marginTop={2}>
              <Typography>Job Description</Typography>
              <Typography color={"red"}>*</Typography>
            </Box>
            <Textarea
              className="text-field"
              id="outlined-multiline-flexible-3"
              required={true}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              style={{
                height: 200,
                width: isMobile ? 250 : isTablet ? 500 : 733,
                marginTop: 2,
              }}
            ></Textarea>
          </Box>
          <Button
            type="submit"
            className="submit-button large-button"
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
}
