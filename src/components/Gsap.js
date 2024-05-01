import React, { useState } from "react";
import gsap from "gsap";



export default function Gsap() {

    const [activeBox, setActiveBox] = useState(0)
    const [data, setData] = useState([
        'test1', 
        'test2', 
        'test3', 
        'test4', 
        'test5'])

    console.log(data.length)
    const move = (e) => {
        activeBox == data.length - 1 ? setActiveBox(0) : setActiveBox(activeBox => activeBox + 1)
        gsap.utils.snap(100, '.box')
        gsap.to('.box', {x: 500})
    }
    



    return (
        <>
            <div className='center'>
                <div className='box'></div>
                <div className='box-container'>
                    <div className='box'>{data[activeBox]}</div>
                    {data.map((slide) => (
                        <div className='box'>{slide}</div>
                    ))}
                </div>
            </div>
            <button onClick={e => move(e)}>Go</button><span style={{color: 'white'}}>Active Box: {activeBox}</span>
        </>
    )
}