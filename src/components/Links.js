import React, {useState, useEffect} from "react";
import SendEmail from "./SendEmail";
import linkedin from '../resources/LinkedIn-Blue-26@2x.png'
import githubWhite from '../resources/GitHub_Logo_White.png'
import githubBlack from '../resources/GitHub_Logo.png'

export default function Links({clicked}) {
    // console.log(clicked)
    return(
        <div className={`text contact ${clicked ? '' : 'hidden'}`}>
            <h2>Links and Contact</h2>
            <div style={{paddingLeft: '30px'}}>
                <div><a href='https://www.linkedin.com/in/chris-kyle-727491270'><img src={linkedin} width='100px'></img></a> - Let's Connect</div>
                <div><a href='https://github.com/Chrisbkyle'><img src={githubWhite} width='100px'></img></a> - Come check out my code, feedback welcome!</div>
                <div><a href='https://github.com/Chrisbkyle'><img src={githubBlack} width='100px'></img></a> - Come check out my code, feedback welcome!</div>
                {/* <div><a href='https://www.salesforce.com/trailblazer/chriskylexy2lzwtlb2cz'>Trailhead Page</a> 100+ Salesforce Badges & 18 Superbadges</div> */}
                {/* <div><a href='mailto:christopher.b.kyle@gmail.com'>Email</a> - Pop me an email @ christopher.b.kyle@gmail.com</div> */}
                <div>Email @ christopher.b.kyle@gmail.com</div>
                {/* <SendEmail /> */}
            </div>
        </div>
    )
}