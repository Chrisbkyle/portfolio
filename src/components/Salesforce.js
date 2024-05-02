import React from "react";


export default function Salesforce({clicked}) {
    return(
        <>
            <div className={`text ${clicked ? '' : 'hidden'}`} style={{fontSize: '30px'}}>
                Salesforce projects and <br/>
                Experience Cloud portfolio coming soon!<br/>
            </div>
        </>
    )
}