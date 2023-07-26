'use client';
import * as React from 'react';
import "./companies-list.css";
import { Box, Grid, Typography, useTheme, useMediaQuery, Container, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline, AppBar, IconButton, Drawer, FormGroup, FormControlLabel, Checkbox, FormLabel} from '@mui/material';
import Button from '@mui/material/Button';
import CompanyCard from '../CompanyCard/CompanyCard';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const drawerWidth = 240;

interface CompanyData {
  id: string;
  jobTitle: string;
  phone: string;
  companyName: string;
  industry: string;
  foundedYear: string;
  companySize: string;
  companyType: string;
  description: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}





export default function CompaniesList(props: any) {
    const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const container = window !== undefined ? () => window().document.body : undefined;

  const [companyData, setCompanyData] = useState<CompanyData[]>([]);

  const fetchCompanyData = async () => {
    try {
      const response = await fetch('http://localhost:8080/getEmployers');
      const data = await response.json();
      setCompanyData(data.employers);
    } catch (error) {
      console.error('Error fetching company data:', error);
      setCompanyData([]);
    }
  };

  useEffect(() => {
    fetchCompanyData();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

    // State variables for filters
    const [mediumSize, setMediumSize] = React.useState(false);
    const [largeSize, setLargeSize] = React.useState(false);
    const [halifaxLocation, setHalifaxLocation] = React.useState(false);
    const [newYorkLocation, setNewYorkLocation] = React.useState(false);

    // // Function to filter companies based on selected filters
    // const filterCompanies = () => {
    //   return companyData.filter((company) => {
    //     return (
    //       (!mediumSize || company.companySize === 'Medium') &&
    //       (!largeSize || company.companySize === 'Large') &&
    //       (!halifaxLocation || company.companyLocation === 'Halifax') &&
    //       (!newYorkLocation || company.companyLocation === 'New York')
    //     );
    //   });
    // };

    const handleMediumSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMediumSize(event.target.checked);
      };
    
      const handleLargeSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLargeSize(event.target.checked);
      };
    
      const handleHalifaxLocationChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        setHalifaxLocation(event.target.checked);
      };
    
      const handleNewYorkLocationChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        setNewYorkLocation(event.target.checked);
      };


    const theme = useTheme();
    const captionSize = useMediaQuery(theme.breakpoints.down('sm'));

    //companydata to be fetched here

     
       const drawer = (
        <div className="indentation">
        <FormLabel component="legend">Apply Filter</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={mediumSize} onChange={handleMediumSizeChange} />}
            label="Medium size company"
          />
          <FormControlLabel
            control={<Checkbox checked={largeSize} onChange={handleLargeSizeChange} />}
            label="Large Size Company"
          />
          <FormControlLabel
            control={<Checkbox checked={halifaxLocation} onChange={handleHalifaxLocationChange} />}
            label="Halifax Based Companies"
          />
          <FormControlLabel
            control={<Checkbox checked={newYorkLocation} onChange={handleNewYorkLocationChange} />}
            label="New York Based Companies"
          />
        </FormGroup>
      </div>
       );

       // State variable to hold the selected companyId
        const [selectedCompanyId, setSelectedCompanyId] = useState('');

        const router = useRouter();

       const handleViewButtonClick = (companyId: string) => {
        setSelectedCompanyId(companyId);
        router.push(`/companies/${companyId}`);
      };
        
     

    return (

      <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width:drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top:'94px' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> */}
        <Box sx={{
            backgroundColor: '#F0F4FC',
        }}>
            <Box
                sx = {{
                    textAlign: 'left',  
                    padding: '3% 0%',      
                    width: '100%',
                }}
            >  
                <Typography component="div" gutterBottom
                    sx={ captionSize ? { fontFamily: 'Arial', fontWeight: '500', letterSpacing: '1.2px', fontSize: '28px', color: '#003060', textAlign:'center' }: {
                        fontFamily: 'Arial', fontWeight: '500', letterSpacing: '1.5px', fontSize: '34px', color: '#003060', textAlign:'center'
                    }}
                >
                    Companies
                </Typography>
            </Box> 
            
        </Box>
        <Box sx={{ display:'flex', mr: 2 
        // , justifyContent:'center'
        }}>
              <div>
               

                <Button 
                  variant="outlined"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}>Apply Filter</Button>
              </div>

            </Box>
        <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>
       

      {companyData.map((company) => (
        <CompanyCard
          companyId={company.id}
          key={company.id} // Make sure to provide a unique key for each companyCard
          companyDate={company.foundedYear}
          companyTitle={company.jobTitle}
          companyCompany={company.companyName}
          companyType={company.companyType}
          salary={company.description}
          companyLocation={company.city}
          companyLogo={company.companyName}
          onViewButtonClick={() => { handleViewButtonClick(company.id); }}
        />
      ))}
        </Box>
       
      </Box>
    </Box>
        
        
           
        
    );

}