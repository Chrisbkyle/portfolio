import React from "react";

export default function Description({clicked}) {
    return(
        <div className={`text description ${clicked ? '' : 'hidden'}`}>
            <h2>About Me</h2>
            <div>A passionate, hard-working creator</div>
            <div>I'm a certified Salesforce Admin, and a React Developer</div>
            <div>There will be more to add in later this is mostly placeholder</div>
        </div>
    )
}