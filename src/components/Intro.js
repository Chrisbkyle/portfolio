import React, {useState, useEffect} from "react";
import Description from './Descripton'
import Projects from './Projects';
import Links from './Links';
import Footer from './Footer'
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
        } 
        // else if (nav == 'sales') {
        //     return <Salesforce clicked={props}/>  
        // } 
        else if(nav == 'proj') {
            // console.log(nav)
            return <Projects clicked={props}/>
        } else if(nav =='contact') {
            // console.log(nav)
            return <Links clicked={props}/>
        } else {
            return
        }
    }



    useEffect(() => {
        pageRender()
        if(clicked) {
            setTimeout(() => {
                setTestState(                    
                    <div className={`nav-button-holder ${clicked ? '' : 'hidden'}`}>
                        <button className={`button nav-button ${clicked ? '' : 'hidden'}`} value='about' onClick={e => handleNav(e)}>About Me</button>
                        <button className={`button nav-button ${clicked ? '' : 'hidden'}`} value='proj' onClick={e => handleNav(e)}>Projects</button>
                        {/* <button className={`nav-button ${clicked ? 'nav-button-expanded' : ''}`} value='sales' onClick={e => handleNav(e)}>Salesforce</button> */}
                        <button className={`button nav-button ${clicked ? '' : 'hidden'}`} value='contact' onClick={e => handleNav(e)}>Links</button>
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
            <button className='expand-button' onClick={e => handleClick()}>{expandChar}</button>
            <div className={`grid-container ${clicked ? 'open-grid' : ''}`}>
                <div className={`hello ${clicked ? 'hello-expand': ''}`}>
                    <div>Hello, My Name is Chris Kyle,</div>
                    <div> Welcome to my Portfolio Page</div>
                </div>
                <img src={Chris} className={`profile-pic ${clicked ? 'pic-expand': ''}`}></img>

                <div className={`content ${clicked ? 'content-expanded' : ''}`}>
                    {pageRender(clicked)}
                    {testState}
                </div>
            </div>
            <Footer clicked={clicked} />
        </>
    )
}