import React, {useState, useEffect} from "react";
import Description from './Descripton'
import Projects from './Projects';
import Contact from './Contact';
import Chris from '../resources/Chris.png'

export default function Intro() {

    let [clicked,setClicked] = useState(false);
    let [expandChar, setExpandChar] = useState('+')
    let [nav, setNav] = useState('desc')

    const pageRender = () => {
        if(nav == 'desc') {
            console.log(nav)
            return <Description/>
        } else if(nav == 'proj') {
            console.log(nav)
            return <Projects/>
        } else if(nav =='contact') {
            console.log(nav)
            return <Contact/>
        } else {
            return
        }
    }

    useEffect(() => {
        pageRender()
    }, [nav])

    const handleClick = () => {
        if(!clicked) {
            setClicked(true);
            setExpandChar('-')
        } else {
            setClicked(false);
            setExpandChar('+')
        }
    }

    const handleNav = (e) => {
        setNav(e.target.value)
    }





    return(
        <>
            <button className='expand' onClick={e => handleClick()}>{expandChar}</button>
            <div className={`grid-container ${clicked ? 'open-grid' : ''}`}>
                <div className={`hello ${clicked ? 'small': ''}`}>
                    <div>Hello, My Name is Chris Kyle,</div>
                    <div> Welcome to my Portfolio Page</div>
                </div>
                <div className='image'><img src={Chris} className={`profile-pic ${clicked ? 'pic-expand': ''}`}></img></div>
                <div className={`content ${clicked ? 'content-expanded' : ''}`}>
                    {pageRender()}
                    <div className='button-holder'>
                        <button className='navButton' value='desc' onClick={e => handleNav(e)}>Description</button>
                        <button className='navButton' value='proj' onClick={e => handleNav(e)}>Projects</button>
                        <button className='navButton' value={nav} onClick={e => handleNav(e)}>Salesforce</button>
                        <button className='navButton' value='contact' onClick={e => handleNav(e)}>Contact</button>
                    </div>
                </div>
            </div>
        </>
    )
}