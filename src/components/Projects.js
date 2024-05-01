import React, {useState, useEffect} from "react";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";

export default function Projects() {
    let [slide, setSlide] = useState(0)
    let [data, setDate] = useState([
        {name: 'office Chef', desc: 'responsive web app'}, 
        {name: 'local weather', desc: 'tracking your local forcast'}, 
        {name: 'Pomodoro', desc: 'productivity assistant'}
    ])
    let [direction, setDirection] = useState('')



    
    const handleRightNav = (e) => {
        setDirection('right')
        if (slide == data.length - 1) {
            setSlide(0)
        } else {
            setSlide((slide) => slide + 1)
        }
    }
    const handleLeftNav = (e) => {
        setDirection('left')
        if (slide == 0) {
            setSlide(data.length - 1) 
        } else {
            setSlide((slide) => slide - 1)
        }
    }
    useEffect(() => {
        
    })

 
    return(
        <div className='text'>
            {/* <div>Projects will go here</div> */}
            <div>
                {/* <div className='rotate-container'>
                    <div className='rotate'>{data[slide].name}</div>
                </div>
                <button value='left' onClick={e => handleLeftNav(e)}>left</button>
                <button value='right' onClick={e => handleRightNav(e)}>right</button>
                <div>slide is {slide}</div> */}
                <SlideOne />
                <SlideTwo />
            </div>
        </div>
    )
}