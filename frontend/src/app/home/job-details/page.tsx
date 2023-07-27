"use client";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react"
import "./styles.css"
import { Alert, Button, Snackbar } from "@mui/material";
import { JobCard } from "../../../../components/JobCard/types";
import { UserContext } from "@/app/(context)/UserContext";
import { axiosInstance } from "../../../../api";

const JobDetailsPage = () => {
    const data: any = useSearchParams()
    const [job, setJob] = useState<JobCard>()
    const { state } = useContext(UserContext)
    const [snackBarVisible, setSnackBarVisible] = React.useState(false);

    useEffect(() => {
        if (data) {
            setJob(JSON.parse(data.get('data')))
        }
    }, [])

    useEffect(() => {
        if (job) {
            console.log('job ==>', job)
            console.log('type ==>', typeof job.openDate)
        }
    }, [job])

    const onApplyBttn = () => {

        console.log('onApplyBttn', state)
        axiosInstance.get('/api/seeker/' + state.id)
            .then(res => {
                console.log('ers==>', res)

                const requestObject = {
                    userID: state.id,
                    jobID: job?.id,
                    candidateFullName: state.firstName + ' ' + state?.lastName,
                    candidateEmail: state.email,
                    contact: res.data.seekers[0].phone,
                    employerName: job?.jobCompany,
                    jobTitle: job?.jobTitle,
                    jobType: job?.jobType,
                    applicationDate: job?.openDate,
                    employerEmail: job?.employerEmail,
                }

                axiosInstance.post('/api/apply', requestObject)
                    .then(res => {
                        console.log('res==>', res)
                        setSnackBarVisible(true)
                    })
            })
    }

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

                    {state?.loginType === 'seeker' ? <div className="job-detail-apply-bttn">
                        <Button variant="contained" href="" onClick={onApplyBttn} type="primary">Apply</Button>
                    </div> : null}

                    <Snackbar
                        open={snackBarVisible}
                        autoHideDuration={6000}
                        onClose={() => setSnackBarVisible(false)}
                    >
                        <Alert
                            onClose={() => setSnackBarVisible(false)}
                            sx={{ width: "100%" }}
                            severity="info"
                        >
                            Job Applied Successfully.
                        </Alert>
                    </Snackbar>

                </div>
            </div>
        </div>
    )
}

export default JobDetailsPage