'use client';
import * as React from 'react';
import "./styles.css";
import Button from '@mui/material/Button';
import { Box, Tab, Tabs } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';



import CompaniesDescTabPage from '../CompaniesDescTabPage/page';
import ActiveJobsTabPage from '../ActiveJobsTabPage/page';



export default function companiesPage() {


  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="mainContainer">
    <div className="parentContainer"></div>
    <div className="container">
      <div className="content">
        <div className="coverImage">
          
        </div>
        <div className="logoDiv">
        <div className="logoContainer">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
          className="logoImage"
          alt="Google" />
        </div>
        </div>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <TabContext value={value}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Description" value="1" />
          <Tab label="Reviews" value="2" />
          <Tab label="Active Jobs" value="3" />
        </Tabs>

        <TabPanel value="1" >
        <div className="mainContentContainer">
          <CompaniesDescTabPage/>
        </div>
        </TabPanel>

        <TabPanel value="2">
          <div className="mainContentContainer">
            Page under construction by Jeet
          </div>
        </TabPanel>

        <TabPanel value="3">
          <div className="mainContentContainer">
            <ActiveJobsTabPage/>
          </div>
        </TabPanel>

        </TabContext>
        </Box>

    </div>
  </div>
  </div>
  );
}