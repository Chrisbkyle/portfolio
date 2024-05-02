import React, {useState, useEffect} from "react";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import { slideData } from "./slideData";
import ofland from '../resources/recipeselect laptop.png'
import ofport from '../resources/recipebuilder tablet.png'

export default function Projects() {
    let [activeSlide, setActiveSlide] = useState(0)
    let [data, setData] = useState(slideData)
    let [direction, setDirection] = useState('')


    // slideData.map((slide, i) => console.log(slide, i))
    // console.log(slideData)

    const slideRender = () => {
        return <SlideOne 
                data={data[activeSlide]}
                name={data[activeSlide].name}
                desc={data[activeSlide].desc}
                land={data[activeSlide].imgLandscape}
                port={data[activeSlide].imgPortrait}
                icon={data[activeSlide].imgIcon}
        
        />
    }
   

    
    const next = (e) => {
        setDirection('right')
        if (activeSlide == data.length - 1) {
            setActiveSlide(0)
        } else {
            setActiveSlide((slide) => slide + 1)
        }
    }
    const prev = (e) => {
        setDirection('left')
        if (activeSlide == 0) {
            setActiveSlide(data.length - 1) 
        } else {
            setActiveSlide((slide) => slide - 1)
        }
    }
    useEffect(() => {
    })

 
    return(
        <div className='text'>
            {/* <div>Projects</div> */}
            <div className='sliderHolder'>
                
                <div className='navButton prev'onClick={e => prev(e)}><div>{'<'}</div></div>
                <div className='navButton next'onClick={e => next(e)}><div>{'>'}</div></div>
                
                {slideRender(activeSlide)}
            </div>
        </div>
    )
}