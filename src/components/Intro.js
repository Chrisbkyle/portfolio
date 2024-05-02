import React, {useState, useEffect} from "react";
import Description from './Descripton'
import Projects from './Projects';
import Links from './Links';
import Chris from '../resources/Chris.png'

export default function Intro() {

    let [clicked,setClicked] = useState(false);
    let [expandChar, setExpandChar] = useState('+')
    let [nav, setNav] = useState('about')
    let [testState, setTestState] = useState(<div></div>)

    const pageRender = (props) => {
        if(nav == 'about') {
            // console.log(nav)
            return <Description clicked={props}/>
        } else if(nav == 'proj') {
            // console.log(nav)
            return <Projects />
        } else if(nav =='contact') {
            // console.log(nav)
            return <Links clicked={props}/>
        } else {
            return
        }
    }



    useEffect(() => {
        // pageRender()
        if(clicked) {
            setTimeout(() => {
                setTestState(                    
                    <div className={`button-holder ${clicked ? 'flex' : ''}`}>
                        <button className={`nav-button ${clicked ? 'nav-button-expanded' : ''}`} value='about' onClick={e => handleNav(e)}>About Me</button>
                        <button className={`nav-button ${clicked ? 'nav-button-expanded' : ''}`} value='proj' onClick={e => handleNav(e)}>Projects</button>
                        <button className={`nav-button ${clicked ? 'nav-button-expanded' : ''}`} value={nav} onClick={e => handleNav(e)}>Salesforce</button>
                        <button className={`nav-button ${clicked ? 'nav-button-expanded' : ''}`} value='contact' onClick={e => handleNav(e)}>Links</button>
                    </div>)
            }, '300')
        } else {
            setTestState(<div></div>)
        }
    }, [nav, clicked])

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
            <button className='expandButton' onClick={e => handleClick()}>{expandChar}</button>
            <div className={`grid-container ${clicked ? 'open-grid' : ''}`}>
                <div className={`hello ${clicked ? 'helloExpand': ''}`}>
                    <div>Hello, My Name is Chris Kyle,</div>
                    <div> Welcome to my Portfolio Page</div>
                </div>
                <img src={Chris} className={`profile-pic ${clicked ? 'pic-expand': ''}`}></img>

                <div className={`content ${clicked ? 'content-expanded' : ''}`}>
                    {pageRender(clicked)}
                    {testState}
                </div>
            </div>
        </>
    )
}