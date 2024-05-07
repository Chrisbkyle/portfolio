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
                <div className='border'><a href='https://www.linkedin.com/in/chris-kyle-727491270'><img src={linkedin} className={`border ${clicked ? 'link-img' : 'hidden-img'}`}></img></a> - Let's Connect</div>
                <div className='border'><a href='https://github.com/Chrisbkyle'><img src={githubWhite} className={`border ${clicked ? 'link-img' : 'hidden-img'}`}></img></a> - Come check out my code, feedback welcome!</div>
                <div className='border'><a href='https://github.com/Chrisbkyle'><img src={githubBlack} className={`border ${clicked ? 'link-img' : 'hidden-img'}`}></img></a> - Come check out my code, feedback welcome!</div>
                <div>Email @ christopher.b.kyle@gmail.com</div>
                <SendEmail />
            </div>
        </div>
    )
}