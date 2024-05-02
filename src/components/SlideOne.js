import React, {useState, useEffect}from "react";
import github from '../resources/github-mark.png'
import { motion } from "framer-motion";


export default function SlideOne({data, name, desc, land, port, icon}) {

    return (
        <>
        <div className='project-slide'>
            <img src={require(`../resources${port}`)} className='photo-portrait'></img>
            <img src={require(`../resources${land}`)} className='photo-landscape'></img>
            <div className='project-description'>
                <h4>{name}</h4>
                <div className='project-description-text'>
                    {desc[0]}<br/>
                    {desc[1]}<br/>
                    {desc[2]}
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