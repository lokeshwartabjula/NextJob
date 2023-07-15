"use client";
import React from 'react';
import './JobCard.css';
import { Button } from '@mui/material';

interface JobCardProps {
    jobDate: string,
    jobTitle: string,
    jobCompany: string,
    jobType: string,
    salary: string,
    jobLocation: string,
    companyLogo: string
}

const JobCard = (props: JobCardProps) => {
    return (
        <div className='card'>
            <div className='job-content'>
                <div className='job-date'>
                    <text>{props.jobDate}</text>
                </div>

                <div className='company-desc'>
                    <div className='comp-div'>
                        <text className='company'>{props.jobCompany}</text>
                        <text className='title'>{props.jobTitle}</text>
                    </div>

                    <div className='company-logo'>
                        <img src={props.companyLogo} />
                    </div>
                </div>

                <div className='job-type'>
                    <text>{props.jobType}</text>
                </div>
            </div>

            <div className='footer'>
                <div className='salary-div'>
                    <text className='sal'>${props.salary}/Month</text>
                    <text className='location'>{props.jobLocation}</text>
                </div>

                <div className='bttn'>
                    <Button className='details' onClick={() => { }}>
                        Details
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default JobCard;