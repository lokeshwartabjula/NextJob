import React from 'react';
import './JobCard.css';

interface JobCardProps {
    jobDate: string,
    jobTitle: string,
    jobCompany: string,
    jobType: string,
    salary: number,
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
                    <text className='salary'>${props.salary}/Month</text>
                    <text className='location'>{props.jobLocation}</text>
                </div>

                <div className='bttn'>
                    <button className='details'>
                        Details
                    </button>
                </div>
            </div>

        </div>
    )
}

export default JobCard;