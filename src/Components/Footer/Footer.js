import React from 'react'
import "./FooterStyle.scss";
function Footer() {
    return (
        <footer>
            <div className="footer_container">
                <span>Developed 2020@ Krisztian Nagy</span>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/nagy.krisztian.3382/"><img src={require("../../Assets/Images/Icons/fb_logo.svg")} alt="facebook link"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/krisztian-nagy-177419194/"><img src={require("../../Assets/Images/Icons/linkedin_logo.svg")} alt="linkedin link"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chrys-code"><img src={require("../../Assets/Images/Icons/github_logo.svg")}  alt="github link"/></a>
            </div>
        </footer>
    )
}

export default Footer
