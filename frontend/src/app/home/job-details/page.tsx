"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react"
import "./styles.css"
import { Button } from "@mui/material";
import { JobCard } from "../../../../components/JobCard/types";

const JobDetailsPage = () => {
    const data: any = useSearchParams()
    const [job, setJob] = useState<JobCard>()

    useEffect(() => {
        if (data) {
            setJob(JSON.parse(data.get('data')))
        }
    }, [])

    return (
        <div className="jeet-job-detail">
            <div className="inner-div-job-detail">
                <div className="job-detail-content">
                    <h1 className="job-detail-header-title">Job Detail</h1>
                    <div className="job-detail-header-section">
                        <img src="https://images.pexels.com/photos/176382/pexels-photo-176382.jpeg" className="job-detail-company-logo-img" />

                        <div className="job-detail-header-content">
                            <p className="job-detail-title">{job?.jobTitle}</p>
                            <p className="job-detail-company">{job?.jobCompany}</p>
                            <p className="job-detail-company-location">{job?.location?.placeName}</p>
                        </div>
                    </div>

                    <div className="job-detail-description-div">
                        <p className="job-detail-company-salary">Salary</p>
                        <p className="job-detail-company-salary-txt">${job?.salary} per annum</p>

                        <p className="job-detail-company-jobType-title">Job Type</p>
                        <p className="job-detail-company-jobType">{job?.jobType}</p>

                        <p className="job-detail-company-skills-required">Skills Required</p>
                        {job?.skills.map((values, index) => <p>{values}{index !== job?.skills?.length - 1 ? ',' : ''}</p>)}

                        <p className="job-detail-description-title">Job Description</p>

                        <p className="job-detail-description-tag">{job?.jobDescription}</p>
                    </div>

                    <div className="job-detail-apply-bttn">
                        <Button variant="contained" href="" onClick={() => { }} type="primary">Apply</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default JobDetailsPage