import React from "react";

export default function Description({clicked}) {
    return(
        <div className={`description ${clicked ? '' : 'hidden'}`}>
            <h2>
                About Me
            </h2>
            <div style={{paddingLeft: '30px'}}>Self motivated, hardworking developer<br/>
            I'm a Fullstack developer working in the MERN stack<br/>
            Looking for new challenges everyday to improve my skills as a dev 
            </div>
        </div>
    )
}