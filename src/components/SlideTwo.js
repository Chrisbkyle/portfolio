import React, {useState, useEffect}from "react";
import weatherPort from '../resources/Weather-Hourly 1.png'
import weatherLand from '../resources/Weather-seven 1.png'
import github from '../resources/github-mark.png'
import weather from '../resources/Weather.png'


export default function SlideOne({data}) {

    console.log(data)
    return (
        <>
            <div className='project-slide'>
                <img src={weatherPort} className='photo-portrait'></img>
                <img src={weatherLand} className='photo-landscape'></img>
                <div className='project-description'>
                    <h4>Local Weather</h4>
                    <div className='project-description-text'>
                        Local weather app build to display current, weekly and hourly weather reports<br/>
                        <br/>
                        Made using React, API data used from Openweather's OneCall API 3.0 and geocoding with LocationIQ<br/>
                    </div>
                    {/* <div className='project-description-text'>Made using React, NodeJS/Express, mySQL and deployed on AWS EC2</div> */}
                    {/* <div className='project-description-text'>To log in, please create an account</div> */}
                    <div className='project-button-holder'>
                        <div className='project-button'><img src={github} height='25px'></img><a href='http://www.google.com'>Code</a></div>
                        <div className='project-button'><img src={weather} height='25px'></img><a href='http://www.google.com'>Website</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}