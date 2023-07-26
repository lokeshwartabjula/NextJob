

'use client';
import * as React from 'react';
import "../styles.css";
import Button from '@mui/material/Button';
import { Box, Tab, Tabs } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { useState, useEffect } from 'react';
import { useRouter} from 'next/navigation';



import CompaniesDescTabPage from '../../CompaniesDescTabPage/page';
import ActiveJobsTabPage from '../../ActiveJobsTabPage/page';

interface EmployerData {
    id: string;
    jobTitle: string;
    phone: string;
    companyName: string;
    industry: string;
    foundedYear: string;
    companySize: string;
    companyType: string;
    description: string;
    websiteURL: string;
    streetAddress: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }


  

export default function CompanyDescriptionPage({ params }: { params: { companyId: string } }) {
    const { companyId } = params;
    const [value, setValue] = useState('1');
    const [employerData, setEmployerData] = useState<EmployerData | null>(null);
  
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
    useEffect(() => {
      fetchEmployerData();
    }, []);
  
    const fetchEmployerData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/employer/${companyId}`);
        const data = await response.json();
        console.log("data", data);
        if (data.employers && data.employers.length > 0) {
          setEmployerData(data.employers[0]); // Assuming there's only one employer in the response
        } else {
          setEmployerData(null);
        }
      } catch (error) {
        console.error('Error fetching employer data:', error);
        setEmployerData(null);
      }
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
        
          {employerData && (
          <div className="mainContentContainer">
            <CompaniesDescTabPage
              companyId={employerData.id}
              website={employerData.websiteURL}
              hq={employerData.city}
              orgSize={employerData.companySize}
              type={employerData.companyType}
              industry={employerData.industry}
              foundedYear={employerData.foundedYear}
            
            />
          </div>
          )}
  
        </TabPanel>

        <TabPanel value="2">
          <div className="mainContentContainer">
            Page under construction by Jeet
          </div>
        </TabPanel>

        <TabPanel value="3">
          <div className="mainContentContainer">
            <ActiveJobsTabPage employerName={employerData?.companyName}/>
          </div>
        </TabPanel>

        </TabContext>
        </Box>

    </div>
  </div>
  </div>
  );
}

