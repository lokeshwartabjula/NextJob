"use client";
import { GoogleMap, InfoWindow, Marker, useLoadScript } from '@react-google-maps/api';
import './jobRadius.css'
import React, { useState } from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { GOOGLE_MAPS_API_KEY } from '../../../../utils/CONSTANTS';
import JobCard from '../../../../components/JobCard/JobCard';


// generate random coordinates so that we can have multiple markers on the map and also add a random salary for each marker point. The marker should be spread across the whole map so that we can test the radius search functionality.
const randomPoints = Array.from({ length: 100 }, () => {
    return {
        latitude: 37.42216 + (Math.random() - 0.5) * 200 * 0.1,
        longitude: -122.08427 + (Math.random() - 0.5) * 1203 * 0.1,
        salary: Math.floor(Math.random() * 1000)
    }
})

const randomJobCards = Array.from({ length: 20 }, () => {
    return {
        jobDate: '20 May, 2023',
        jobTitle: 'Software Engineer',
        jobCompany: 'Google',
        jobType: 'Part Time',
        salary: Math.floor(Math.random() * 20000),
        jobLocation: 'San Francisco, CA',
        companyLogo: 'https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-mallorca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
})


const JobRadiusPage = (() => {
    const [markerPoints, setMarkerPoints] = useState(randomPoints)
    const [showTooltip, setShowTooltip] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const map = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY
    })

    const onMarkerClick = (e: any) => {
        setShowTooltip(!showTooltip)
    }

    return (
        <main className='root' >
            <title>Job By Radius</title>

            <div className='dividerView'>
                {map.isLoaded ? <div className='half-view'>
                    <GoogleMap
                        center={{ lat: 37.42216, lng: -122.08427 }}
                        mapContainerStyle={{ width: '50vw', height: '90vh' }}
                        zoom={10} clickableIcons={false}
                        options={{ fullscreenControl: false, streetViewControl: false, mapTypeControl: false }}
                    >
                        {markerPoints?.map((point, index) => {
                            return (
                                <Marker
                                    key={index}
                                    position={{ lat: point.latitude, lng: point.longitude }}
                                >
                                    <InfoWindow
                                        position={{ lat: point.latitude, lng: point.longitude }}
                                        options={{ pixelOffset: new google.maps.Size(0, -30), content: '<div class="overflow: hidden;">' + `Salary: ${point.salary}` + `</div>` }}
                                    >
                                        <div className='salaryDiv' >
                                            <p className='salaryTxt'>Salary: ${`${point.salary}`} / Month</p>
                                        </div>
                                    </InfoWindow>
                                </Marker>
                            )
                        })}
                        <div className='searchToolbar'>
                            <SearchSharpIcon onClick={() => alert('jeet is here')} style={{ width: '2rem', height: '2rem', color: '#666' }} />
                        </div>
                    </GoogleMap>

                </div> : <div className='half-view'>Loading...</div>}

                <div className='job-post'>
                    {randomJobCards?.map((card, index) => {
                        return (
                            <JobCard
                                key={index}
                                jobTitle={card.jobTitle}
                                jobCompany={card.jobCompany}
                                jobType={card.jobType}
                                salary={card.salary}
                                jobLocation={card.jobLocation}
                                companyLogo={card.companyLogo}
                                jobDate={card.jobDate}
                            />
                        )
                    })}
                </div>
            </div>
        </main>
    )
})



export default JobRadiusPage;