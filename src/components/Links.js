import React, {useState, useEffect} from "react";

export default function Links({clicked}) {
    // console.log(clicked)
    return(
        <div className={`text contact ${clicked ? '' : 'hidden'}`}>
            <h2>Links and Contact</h2>
            <div><a href='https://www.linkedin.com/in/chris-kyle-727491270'>Linkedin</a> - Let's Connect</div>
            <div><a href='https://github.com/Chrisbkyle'>Github</a> - Come check out my code, feedback welcome!</div>
            <div><a href='https://www.salesforce.com/trailblazer/chriskylexy2lzwtlb2cz'>Trailhead Page</a> 100+ Salesforce Badges & 18 Superbadges</div>
            <div><a href='mailto:christopher.b.kyle@gmail.com'>Email</a> - Pop me an email @ christopher.b.kyle@gmail.com</div>            
        </div>
    )
}