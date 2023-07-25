'use client';
import * as React from 'react';
import "./companies-list.css";
import { Box, Grid, Typography, useTheme, useMediaQuery, Container, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline, AppBar, IconButton, Drawer, FormGroup, FormControlLabel, Checkbox, FormLabel} from '@mui/material';
import Button from '@mui/material/Button';
import CompanyCard from '../CompanyCard/CompanyCard';

const drawerWidth = 240;


export default function CompaniesList(props: any) {
    const { window } = props;

    // State variables for filters
    const [mediumSize, setMediumSize] = React.useState(false);
    const [largeSize, setLargeSize] = React.useState(false);
    const [halifaxLocation, setHalifaxLocation] = React.useState(false);
    const [newYorkLocation, setNewYorkLocation] = React.useState(false);

    // Function to filter companies based on selected filters
    const filterCompanies = () => {
      return companyData.filter((company) => {
        return (
          (!mediumSize || company.companySize === 'Medium') &&
          (!largeSize || company.companySize === 'Large') &&
          (!halifaxLocation || company.companyLocation === 'Halifax') &&
          (!newYorkLocation || company.companyLocation === 'New York')
        );
      });
    };

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

    const companyData = [
        {
         companyDate: '2023-07-19',
         companyTitle: 'Company 1 Large New York',
         companyCompany: 'Example Company',
         companyType: 'Full-Time',
         salary: '5000',
         companyLocation: 'New York',
         companySize: 'Large',
         companyLogo: 'https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png', // Replace with the actual image path
       },
       {
         companyDate: '2023-07-19',
         companyTitle: 'Company 2 Large Halifax',
         companyCompany: 'Example Company2',
         companyType: 'Full-Time 2',
         salary: '5000',
         companyLocation: 'Halifax',
         companySize: 'Large',
         companyLogo: 'https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png', // Replace with the actual image path
       },
       {
         companyDate: '2023-07-19',
         companyTitle: 'Company 3 Large Halifax',
         companyCompany: 'Example Company 3',
         companyType: 'Full-Time 3',
         salary: '50003',
         companyLocation: 'Halifax',
         companySize: 'Large',
         companyLogo: 'https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png', // Replace with the actual image path
       },
       {
         companyDate: '2023-07-19',
         companyTitle: 'Company 4 Medium Halifax',
         companyCompany: 'Example Company 4',
         companyType: 'Full-Time 4',
         salary: '5000 4',
         companyLocation: 'Halifax',
         companySize: 'Medium',
         companyLogo: 'https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png', // Replace with the actual image path
       },
       {
         companyDate: '2023-07-19',
         companyTitle: 'Company 5 Medium New York',
         companyCompany: 'Example Company 5',
         companyType: 'Full-Time 5',
         salary: '50005',
         companyLocation: 'New York',
         companySize: 'Medium',
         companyLogo: 'https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png', // Replace with the actual image path
       },
      {
        companyDate: '2023-07-19',
        companyTitle: 'Company 6 Medium New York',
        companyCompany: 'Example Company 4',
        companyType: 'Full-Time 4',
        salary: '5000 4',
        companyLocation: 'New York',
        companySize: 'Medium',
        companyLogo: 'https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png', // Replace with the actual image path
      },
      {
        companyDate: '2023-07-19',
        companyTitle: 'Company 7 Medium Toronto',
        companyCompany: 'Example Company 5',
        companyType: 'Full-Time 5',
        salary: '50005',
        companyLocation: 'Toronto',
        companySize: 'Medium',
        companyLogo: 'https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png', // Replace with the actual image path
      },
      
       ];

       const [mobileOpen, setMobileOpen] = React.useState(false);

       const container = window !== undefined ? () => window().document.body : undefined;


       const handleDrawerToggle = () => {
         setMobileOpen(!mobileOpen);
       };
     
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
        {filterCompanies().map((company) => (
          <CompanyCard
            key={company.companyTitle} // Make sure to provide a unique key for each companyCard
            companyDate={company.companyDate}
            companyTitle={company.companyTitle}
            companyCompany={company.companyCompany}
            companyType={company.companyType}
            salary={company.salary}
            companyLocation={company.companyLocation}
            companyLogo={company.companyLogo}
          />
        ))}
        </Box>
       
      </Box>
    </Box>
        
        
           
        
    );

}