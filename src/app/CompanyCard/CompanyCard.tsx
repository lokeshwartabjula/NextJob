"use client";
import React from 'react';
import './company-card.css';
import { Button } from '@mui/material';

interface CompanyCardProps {
    companyDate: string,
    companyTitle: string,
    companyCompany: string,
    companyType: string,
    salary: string,
    companyLocation: string,
    companyLogo: string
}

const CompanyCard = (props: CompanyCardProps) => {
    return (
        <div className='card'>
            <div className='job-content'>
                <div className='company-desc'>
                    <div className='comp-div'>
                        <text className='title'>{props.companyTitle}</text>
                    </div>

                    <div className='company-logo'>
                        <img src={props.companyLogo} className='company-logo-img' />
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div>
                    <Button className='details-bttn' style={{
                        backgroundColor: 'rgba(140, 226, 112, 0.859)',
                        color: '#000',
                        borderRadius: '24px',
                        paddingLeft: '1.3rem',
                        paddingRight: '1.3rem',
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
                    }} onClick={() => { }}>
                        View
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default CompanyCard;
