import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

import "./HeroStyle.scss";

import heroShapeDark from '../../Assets/Images/Hero/ShapeDark.svg';

function Hero() {

    const heroImage = {
        position: "absolute",
        bottom: "0px",
        left: "50%",
        transform: "translate(-50%, 0%)",
        height: "362px",
        width: '2165px',
    }

    return (
        <div className="hero">
            <div className="hero_intro">
                <div className="hero_intro_info">
                    <h2>Hello, I'm  <span>Krisztian Nagy</span></h2>
                    <h1>Web Developer</h1>
                    <p>Freelancer & Front-End Web Developer</p>
                </div>
                <div className="hero_intro_buttons">
                    <ScrollIntoView selector="footer">
                        <div className="hero_intro_button_1">Hire Me</div>
                    </ScrollIntoView>
                    <a href="https://chrys-code.github.io/portfolio/krisztian_nagy_cv.pdf"><div className="hero_intro_button_2">Resume</div></a>
                </div>
            </div>

            <div className="hero_profileImage">
                <img src={require('../../Assets/Images/Hero/me.jpg')} alt="en" />
            </div>

            <img style={heroImage} src={heroShapeDark} alt="en" />
        </div>
    )
}

export default Hero;
