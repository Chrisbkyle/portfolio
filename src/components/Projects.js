import React, {useState, useEffect} from "react";
import Slide from "./Slide";
import { slideData } from "./slideData";
import { motion } from "framer-motion";;

export default function Projects({clicked}) {
    let [activeSlide, setActiveSlide] = useState(0)
    let [data, setData] = useState(slideData)
    let [direction, setDirection] = useState(0)
    console.log(clicked)

    
    const next = (e) => {
        console.log('next!' + ' ' + 'The active slide is: ' + activeSlide)
        if (activeSlide === data.length - 1) {
            setActiveSlide(data.length - 1)
            setDirection(() => activeSlide * -100)
        } else {
            setActiveSlide((slide) => slide + 1)
            setDirection((direction) => direction - 100)
        }
    }
    const prev = (e) => {
        if (activeSlide == 0) {
            setActiveSlide(0)
            setDirection(0)
        } else {
            setActiveSlide((slide) => slide - 1)
            setDirection((direction) => direction + 100)
        }
    }

 
    return(
        <div className='slider-grid-container'>
            {/* <div> */}
                
                <div className='change-slide prev'onClick={e => prev(e)}><div>{'<'}</div></div>
                <div className='change-slide next'onClick={e => next(e)}><div>{'>'}</div></div>
                <div className={`slider-grid ${clicked ? '' : 'hidden'}`}>
                    <motion.div
                    animate={{x: `${direction + '%'}`}}
                    transition={{
                        ease:'easeInOut', duration: .8
                        // ease:"linear", duration: .8
                    }}
                    className='slide'
                    >
                        {data.map((slide, index) => {
                            return(
                            <Slide 
                            data={slide}
                            name={slide.name}
                            desc={slide.desc}
                            land={slide.imgLandscape}
                            port={slide.imgPortrait}
                            icon={slide.imgIcon}
                            repo={slide.githubLink}
                            website={slide.websiteLink}/>
                        )})}
                    </motion.div>
                </div>
            {/* </div> */}
        </div>
    )
}