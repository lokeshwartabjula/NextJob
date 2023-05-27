"use client";
import { GoogleMap, InfoBox, InfoWindow, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import styles from './jobRadius.module.css'
import React, { useEffect, useState } from 'react';
import CModal from '../../../../components/CModal/CModal';
import Header from '../../../../components/Header/Header';
import Sidebar from '../../../../components/Sidebar/Sidebar';

// generate random coordinates within a radius of 20 km of the center of SanJose. generate 20 of them. and also generate random salary.
const randomPoints = Array.from({ length: 20 }, () => {
    const r = 20000 / 111300 // = 20000 meters
    const y0 = 37.42216
    const x0 = -122.08427
    const u = Math.random()
    const v = Math.random()
    const w = r * Math.sqrt(u)
    const t = 2 * Math.PI * v
    const x = w * Math.cos(t)
    const y1 = w * Math.sin(t)
    const x1 = x / Math.cos(y0)
    const salary = Math.floor(Math.random() * 10000)

    return {
        latitude: y0 + y1,
        longitude: x0 + x1,
        salary: salary
    }
})


const JobRadiusPage = (() => {

    const [markerPoints, setMarkerPoints] = useState(randomPoints)
    const [showTooltip, setShowTooltip] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const map = useLoadScript({
        googleMapsApiKey: 'AIzaSyBldyBHTIUs5ag7PFJMNsvuzhKw_OWQ4QY',
        // mapIds: ['59931b6f48b18a0']
    })

    const onMarkerClick = (e: any) => {
        setShowTooltip(!showTooltip)
    }

    return (
        <main className={styles.root}>
            <title>Search Job by Radius</title>
            {/* <div>
                <h1>Job Radius Page</h1>
                <button className={styles.radiusBttn} onClick={() => setShowModal(!showModal)} >
                    Select Radius
                </button>
            </div> */}

            {/* {showModal && <CModal onClose={() => setShowModal(!showModal)} title={'Jeet is here'}>
                <p>children</p>
            </CModal>} */}

            <Header />

            <div className={styles.dividerView}>
                <Sidebar />

                {map.isLoaded ? <div>
                    <GoogleMap
                        center={{ lat: 37.42216, lng: -122.08427 }}
                        mapContainerStyle={{ width: '80vw', height: '80vh', backgroundColor: 'hotpink' }}
                        zoom={10} clickableIcons={false}
                        options={{ fullscreenControl: false, streetViewControl: false, mapTypeControl: false }}
                    >
                        {markerPoints.map((point, index) => {
                            return (
                                <Marker
                                    key={index}
                                    position={{ lat: point.latitude, lng: point.longitude }}
                                >
                                    <InfoWindow
                                        position={{ lat: point.latitude, lng: point.longitude }}
                                        options={{ pixelOffset: new google.maps.Size(0, -30), content: '<div class="overflow: hidden;">' + `Salary: ${point.salary}` + `</div>` }}

                                    >
                                        <div className={styles.salaryDiv} >
                                            <p className={styles.salaryTxt}>Salary: ${`${point.salary}`} / Month</p>
                                        </div>
                                    </InfoWindow>
                                </Marker>
                            )
                        })}
                    </GoogleMap>
                </div> : <div>Loading...</div>
                }

            </div>
        </main >
    )
})



export default JobRadiusPage;