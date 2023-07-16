'use client';
import { Typography } from '@mui/material';
import * as React from 'react';
import "./styles.css";


export default function CompaniesDescTabPage() {

    return (
        <div className="des-container">
            <div className="des-grid1">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Website: </Typography>      
            <Typography variant="subtitle1" gutterBottom className='valueAlign'>www.amazon.com </Typography>            
            </div>

            <div className="des-grid2">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Headquarters: </Typography>
            <Typography variant="subtitle1" gutterBottom className='valueAlign'> USA </Typography>            
            </div>

            <div className="des-grid3">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Org Size: </Typography>
            <Typography variant="subtitle1" gutterBottom className='valueAlign'> 10000+ Employees </Typography>            
            </div>

            <div className="des-grid4">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Founded: </Typography>
            <Typography variant="subtitle1" gutterBottom className='valueAlign'> 1994 </Typography>            
            </div>

            <div className="des-grid5">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Type: </Typography>
            <Typography variant="subtitle1" gutterBottom className='valueAlign'> Company - public </Typography>            
            </div>

            <div className="des-grid6">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Industry: </Typography>
            <Typography variant="subtitle1" gutterBottom className='valueAlign'> XYZ </Typography>            
            </div>

            <div className="des-grid7">
            <Typography variant="h6" gutterBottom sx = {{ minWidth:200, fontWeight:'bold'  }}>Revenue: </Typography>
            <Typography variant="subtitle1" gutterBottom className='valueAlign'> $10+ billion </Typography>            
            </div>

            <div className="des-grid8">

            </div>
            <div className="des-grid9">
            des-grid9

            </div>
            <div className="des-grid10">
            des-grid10

            </div>
            <div className="overview-title-grid">
            <Typography variant="h5" gutterBottom>Overview: </Typography>
            </div>
            <div className="overview-desc-grid">
            overview-desc-grid
            </div>
        </div>
    );

}