import React from "react";
import linkedin from '../resources/LinkedIn-Blue-26@2x.png'
import githubWhite from '../resources/GitHub_Logo_White.png'
import trailhead from '../resources/Trailhead Logo.png'

export default function Footer({clicked}) {
    return (
        <>
            {/* <h4>Links</h4> */}
            <div style={{display:'flex', gap: '10px', flexDirection: 'row', position: 'fixed', bottom: '0', textAlign: 'center',  width: '100%'}}>
                {/* <h2>Links: </h2> */}
                <a  
                    href='https://www.linkedin.com/in/chris-kyle-727491270' 
                    className={`center ${clicked ? 'link-img' : 'hidden-img'}`}>
                        <img src={linkedin} style={{width: '80px'}}></img>
                </a>
                <a 
                    href='https://github.com/Chrisbkyle' 
                    className={`center ${clicked ? 'link-img' : 'hidden-img'}`}>
                        <img src={githubWhite} style={{width: '80px'}}></img>
                </a>
                <a 
                    href='https://github.com/Chrisbkyle' 
                    className={`center ${clicked ? 'link-img' : 'hidden-img'}`}>
                        <img src={trailhead} style={{width: '80px'}}></img>
                </a>
            </div>
        </>
    )
}