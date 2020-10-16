import React from 'react'
import "./HeroStyle.scss";
import heroShapeDark from '../../Assets/Images/Hero/ShapeDark.svg';
import heroShapeLight from '../../Assets/Images/Hero/ShapeLight.svg'

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
        <div className="hero container_static">
            <div className="row">
            <div className="hero_intro col-xlg-5 col-lg-12">
                <div className="hero_intro_info">
                <h2>Hello, I'm  <span>Krisztian Nagy</span></h2>
                <h1>Web Developer</h1>
                <p>Freelancer & Full-Stack Web Developer</p>
                </div>
                <div className="hero_intro_buttons">
                <a href="#"><div className="hero_intro_button_1"><p>Hire Me</p></div></a>
                <a href="#"><div className="hero_intro_button_2"><p>Resume</p></div></a>
                </div>
            </div>
            <div className="hero_profileImage col-xlg-5 offset-xlg-2 col-lg-12">
                <img style={{width: '470px', height: '470px'}} src={require('../../Assets/Images/Hero/me.jpg')} alt="en" />
            </div>
            </div>

            <img style={heroImage} src={heroShapeDark} alt="en" />
        </div>
    )
}

export default Hero
