import React from 'react'
import "./AboutStyle.scss"
import ScrollIntoView from 'react-scroll-into-view';

/*
* about body img
*<img style={{ height: '550px', width: '500px' }} src="" alt=""></img>
*/

function About() {
    return (
        <>
            <div className="about_body_img">
            </div>
            <div className="about_body_text">
                <h2>Why chose me?</h2>
                <p>Currently I am a graduating student at University finishing a course in Digital Design & Web Development and devoting myself to learn web development in my freetime. I deliver web applications with documentations and using appropriate methodologies to ensure quality and non-functional preferences that reflect on the nature of your application.</p>
                <p>Software are delivered via methodologies such as: </p>
                <ul>
                    <li>Software Development Life Cycle</li>
                    <li>Test-driven development</li>
                    <li>Waterfall development</li>
                    <li>Agile development</li>
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
