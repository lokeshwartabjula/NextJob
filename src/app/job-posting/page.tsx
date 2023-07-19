"use client";

import * as React from "react";
import { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Button,
  Chip,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import "./styles.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputField from "./input-field";
import SelectField from "./select-field";
import CustomAutoComplete from "./CustomAutoComplete";

const JOB_TYPES: string[] = ["Full Time", "Part Time", "Intern", "Contract"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const skillsSet = [
  "Communication Skills",
  "Problem Solving",
  "Critical Thinking",
  "Adaptability",
  "Leadership",
  "Project Management",
  "Collaboration",
  "Digital Literacy",
  "Data Analysis",
  "Emotional Intelligence",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type locationInfoType = {
  name: string;
  place_id: string;
  lat: string;
  lng: string;
};

export default function JobPosting() {
  const [jobType, setJobType] = useState("Full Time");
  const [jobPosition, setJobPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [location, setLocation] = useState("");

  const handleChange = (event: SelectChangeEvent<typeof selectedSkills>) => {
    const {
      target: { value },
    } = event;
    setSelectedSkills(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleJobTypeChange = (event: SelectChangeEvent) => {
    setJobType(event.target.value as string);
  };

  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      setSalary(value);
    }
  };

  const onPlaceChange = (place: any) => {
    let locationInfo: locationInfoType = {
      name: place.name,
      place_id: place.place_id,
      lat: place.geometry?.location?.lat(),
      lng: place.geometry?.location?.lng(),
    };
    setLocation(JSON.stringify(locationInfo));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`
      Job Position: ${jobPosition}
      Company Name: ${companyName}
      Location: ${location}
      Job Type: ${jobType}
      Job Description: ${jobDescription}
      Salary: ${salary}
      Skills: ${selectedSkills}
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
                label="Job Title"
                setValue={setJobPosition}
                placeHolder="Enter Job Position..."
              ></InputField>
              <InputField
                id="outlined-multiline-flexible-2"
                label="Company Name"
                setValue={setCompanyName}
                placeHolder="Enter Company Name..."
              ></InputField>
              <Box width={isTablet ? 250 : 350} mx={2}>
                <Box display="flex" flexDirection="row" marginTop={2}>
                  <Typography>Location</Typography>
                  <Typography color="red">*</Typography>
                </Box>
                <CustomAutoComplete onPlaceChanged={onPlaceChange} />
              </Box>
            </Box>
            <Box>
              <Box width={isTablet ? 250 : 350} mx={2}>
                <Box
                  display="flex"
                  flexDirection="row"
                  marginTop={2}
                  marginBottom={0.6}
                >
                  <Typography>Skills</Typography>
                  <Typography color="red">*</Typography>
                </Box>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={selectedSkills}
                  onChange={handleChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Chip"
                      fullWidth
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {skillsSet.map((skill) => (
                    <MenuItem
                      key={skill}
                      value={skill}
                      style={getStyles(skill, selectedSkills, theme)}
                    >
                      {skill}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              <Box width={isTablet ? 250 : 350} mx={2}>
                <Box display="flex" flexDirection={"row"} marginTop={2.5}>
                  <Typography>Salary</Typography>
                  <Typography color={"red"}>*</Typography>
                </Box>
                <TextField
                  className="text-field"
                  id="outlined-multiline-flexible-5"
                  placeholder="Enter Salary..."
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
              placeholder="Enter Job Description..."
              style={{
                height: 200,
                width: isMobile ? 250 : isTablet ? 533 : 733,
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
