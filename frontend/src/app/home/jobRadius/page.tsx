"use client";
import { GoogleMap, InfoWindow, Marker, useLoadScript } from '@react-google-maps/api';
import './jobRadius.css'
import React, { useState } from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import JobCard from '../../../../components/JobCard/JobCard';
import CModal from '../../../../components/CModal/CModal';
import { GOOGLE_MAPS_API_KEY } from '../../../../utils/constants';
import CustomAutoComplete from '../../../../components/CustomAutoComplete/CustomAutoComplete';


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
        salary: '1000',
        jobLocation: 'San Francisco, CA',
        companyLogo: 'https://images.pexels.com/photos/17456631/pexels-photo-17456631/free-photo-of-mallorca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
})

type pinCoordinates = {
    lat: number | undefined,
    lng: number | undefined
}


const JobRadiusPage = (() => {
    const [markerPoints, setMarkerPoints] = useState(randomPoints)
    const [dropPinToCoordinate, setDropPinToCoordinate] = useState<pinCoordinates>({ lat: 37.42216, lng: -122.08427 })
    const [viewJobModal, setViewJobModal] = useState(false)

    const map = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        authReferrerPolicy: 'origin'
    })

    const onMapClick = (e: google.maps.MapMouseEvent) => {
        e.domEvent.preventDefault()
        e.stop()
        setDropPinToCoordinate({ lat: e.latLng?.lat(), lng: e.latLng?.lng() })
    }

    return (
        <main className='root'>
            <title>Jobs By Radius</title>

            <div className='dividerView'>
                {map.isLoaded ? <div className='half-view'>
                    <GoogleMap
                        // @ts-ignore
                        center={dropPinToCoordinate}
                        mapContainerStyle={{ width: '100%', height: '90%', cursor: 'pointer' }}
                        zoom={10}
                        clickableIcons={false}
                        options={{ fullscreenControl: false, streetViewControl: false, mapTypeControl: false }}
                        onClick={onMapClick}
                    >
                        {/* view to display the job pins based on the radius selected */}
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

                        {/* view to drop pin on users selected location which will used to fetch the jobs based on that radius. */}
                        {dropPinToCoordinate?.lat && dropPinToCoordinate?.lng ? <Marker
                            position={{ lat: dropPinToCoordinate?.lat, lng: dropPinToCoordinate?.lng }}
                        /> : null}

                        <div className='searchToolbar'>
                            <SearchSharpIcon onClick={() => setViewJobModal(!viewJobModal)} style={{ width: '2rem', height: '2rem', color: '#666' }} />
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

            {viewJobModal ?
                <CModal
                    onClose={() => setViewJobModal(!viewJobModal)}
                    title='Search Jobs Based on Radius'
                >
                    <CustomAutoComplete onPlaceChanged={(selectedPlace) => console.log('selected place ==>', selectedPlace)} />
                </CModal>
                : null}
        </main>
    )
})



export default React.memo(JobRadiusPage);