import React from "react";

import React, {useState, useEffect}from "react";
import ofland from '../resources/recipeselect laptop.png'
import ofport from '../resources/recipebuilder tablet.png'
import github from '../resources/github-mark.png'
import chef from '../resources/chef hat.png'


export default function SlideOne() {


    return (
        <>
            <div className='project-slide'>
                <img src={ofport} className='photo-portrait'></img>
                <img src={ofland} className='photo-landscape'></img>
                <div className='project-description'>
                    <h4>Office Chef</h4>
                    <div className='project-description-text'>
                        Fully responsive web app for professional chefs to create, store and edit their recipes<br/>
                        Made using React, NodeJS/Express, mySQL and deployed on AWS EC2<br/>
                        To log in, please create an account
                    </div>
                    {/* <div className='project-description-text'>Made using React, NodeJS/Express, mySQL and deployed on AWS EC2</div> */}
                    {/* <div className='project-description-text'>To log in, please create an account</div> */}
                    <div className='project-button-holder'>
                        <div className='project-button'><img src={github} height='25px'></img><a href='http://www.google.com'>Code</a></div>
                        <div className='project-button'><img src={chef} height='25px'></img><a href='http://www.google.com'>Website</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}