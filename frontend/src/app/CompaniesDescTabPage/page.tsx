/*
  Author: Lokeshwar Kumar Tabjula
  Banner Id: B00936909
  email id: lk544219@dal.ca
*/
'use client';
import { Typography } from '@mui/material';
import * as React from 'react';
import "./styles.css";

interface CompanyData {
    companyId: string;
    website: string;
    hq: string;
    orgSize: string;
    type: string;
    industry: string;
    revenue: string;
  }

export default function CompaniesDescTabPage( props: any) {

    const {companyId, website, hq, orgSize, type, industry, foundedYear, description} = props;

    return (
        <div className="des-container">
            <div className="des-grid1">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Website: </Typography>      
            <Typography variant="subtitle1" gutterBottom className='valueAlign'>
                <a href={website} target="_blank" rel="noreferrer"> {website} </a>
                {/* {website}  */}
                </Typography>            
            </div>

            <div className="des-grid2">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Headquarters: </Typography>
            <Typography variant="subtitle1" gutterBottom className='valueAlign'> {hq} </Typography>            
            </div>

            <div className="des-grid3">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Org Size: </Typography>
            <Typography variant="subtitle1" gutterBottom className='valueAlign'> {orgSize} </Typography>            
            </div>

            <div className="des-grid4">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Founded: </Typography>
            <Typography variant="subtitle1" gutterBottom className='valueAlign'> {foundedYear} </Typography>            
            </div>

            <div className="des-grid5">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Type: </Typography>
            <Typography variant="subtitle1" gutterBottom className='valueAlign'> {type} </Typography>            
            </div>

            <div className="des-grid6">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Industry: </Typography>
            <Typography variant="subtitle1" gutterBottom className='valueAlign'> {industry} </Typography>            
            </div>

            <div className="des-grid7">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Revenue: </Typography>
            <Typography variant="subtitle1" gutterBottom className='valueAlign'> {foundedYear} </Typography>            
            </div>

            <div className="des-grid8">

            </div>
            {/* <div className="des-grid9">
            des-grid9

            </div>
            <div className="des-grid10">
            des-grid10

            </div> */}
            <div className="overview-title-grid">
            <Typography variant="h5" gutterBottom>Overview: </Typography>
            </div>
            <div className="overview-desc-grid">
            {description}
            </div>
        </div>
    );

}