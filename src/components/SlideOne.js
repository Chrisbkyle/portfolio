import React, {useState, useEffect}from "react";
import github from '../resources/github-mark.png'
require.context('../resources', true)


export default function SlideOne({data, name, desc, land, port, icon}) {
    console.log(typeof(land))
    console.log(land)
    let [portrait, setPortrait] = useState()
    let [landscape, setLandscape] = useState()
    const image = require.context('../resources', true)
    // let [icon, setIcon] = useState()

    return (
        <>
            <div className='project-slide'>
                <img src={require(`../resources${port}`)} className='photo-portrait'></img>
                <img src={require(`../resources${land}`)} className='photo-landscape'></img>
                <div className='project-description'>
                    <h4>{data.name}</h4>
                    <div className='project-description-text'>
                        {data.desc[0]}<br/>
                        {data.desc[1]}<br/>
                        {data.desc[2]}
                    </div>
                    {/* <div className='project-description-text'>Made using React, NodeJS/Express, mySQL and deployed on AWS EC2</div> */}
                    {/* <div className='project-description-text'>To log in, please create an account</div> */}
                    <div className='project-button-holder'>
                        <div className='project-button'><img src={github} height='25px'></img><a href='http://www.google.com'>Code</a></div>
                        <div className='project-button'><img src={require(`../resources${icon}`)} height='25px'></img><a href='http://www.google.com'>Website</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}