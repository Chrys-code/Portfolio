import React from 'react'
import "./AboutStyle.scss"


function About() {
    return (
        <>
        <div className="about_body_img">
            <img style={{height: '550px', width: '500px'}} src="#" alt=""></img>
        </div>
        <div className="about_body_text">
            <h2>Why choose me?</h2>
            <p> Lorem ipsum, or lipsum as it is sometimes known, is dummy text 
                used in laying out print, graphic or web designs. The passage is 
                attributed to an unknown typesetter in the 15th century who is 
                thought to have scrambled parts of Cicero's De Finibus Bonorum 
                et Malorum for use in a type specimen book.</p>

            <p>Here are few features: </p>
            <ul>
                <li>User Interface Design </li>
                <li>User Interface Design </li>
                <li>User Interface Design </li>        
                <li>User Interface Design </li>

            </ul>
            <div className="about_body_text_buttons">
                <a className="about_body_text_button_1" href="#"><div><p>Hire Me</p></div></a>
                <a className="about_body_text_button_2" href="#"><div><p>Resume</p></div></a>
            </div>
        </div>
     </>
    )
}

export default About
