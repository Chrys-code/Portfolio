import React from 'react'
import "./AboutStyle.scss"
import ScrollIntoView from 'react-scroll-into-view';


function About() {
    return (
        <>
        <div className="about_body_img">
            <img style={{height: '550px', width: '500px'}} src="" alt=""></img>
        </div>
        <div className="about_body_text">
            <h2>Why choose me?</h2>
            <p>I am a third-year Student at Southampton Solent University, learning Digital Design & Web Development. During the course I gained knowledge in different fields on both sides of Human Digital Interaction and End-To-End Web Development. I devote more time to programming than just attend the Unviersity. I learn something new every day.</p>
            <p>In the following fields: </p>
            <ul>
                <li>User Interface Design</li>
                <li>User Experience Design</li>
                <li>End-To-End Web Development</li>        
                <li>Data Science</li>

            </ul>
            <div className="about_body_text_buttons">
                    <ScrollIntoView selector="footer">
                        <div className="about_body_text_button_1">Hire Me</div>
                    </ScrollIntoView>
                    <ScrollIntoView selector=".resume">
                        <div className="about_body_text_button_2">Resume</div>
                    </ScrollIntoView>
            </div>
        </div>
     </>
    )
}

export default About
