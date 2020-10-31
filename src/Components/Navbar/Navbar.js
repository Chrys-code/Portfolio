import React,  {useState} from 'react'
import "./NavbarStyle.scss";
import ScrollIntoView from 'react-scroll-into-view';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar_container">
                <div className="navbar_logo">KN.</div>
                <ul className={(isOpen ? "navbar_menu--active" : "navbar_menu")}>
                <ScrollIntoView selector=".hero" onClick={() => setIsOpen(!isOpen)}>
                    <li className="navbar_menu_links" >Home</li>
                </ScrollIntoView>
                <ScrollIntoView selector=".about" onClick={() => setIsOpen(!isOpen)} >
                    <li className="navbar_menu_links">About Us</li>
                    </ScrollIntoView>
                    <ScrollIntoView selector=".services" onClick={() => setIsOpen(!isOpen)} >
                    <li className="navbar_menu_links">Services</li>
                    </ScrollIntoView>
                    <ScrollIntoView selector=".resume" onClick={() => setIsOpen(!isOpen)}>
                    <li className="navbar_menu_links">Resume</li>
                    </ScrollIntoView>
                    <ScrollIntoView selector=".portfolio" onClick={() => setIsOpen(!isOpen)} >
                    <li className="navbar_menu_links">Portfolio</li>
                    </ScrollIntoView>
                    <ScrollIntoView selector=".blog" onClick={() => setIsOpen(!isOpen)}>
                    <li className="navbar_menu_links">Blog</li>
                    </ScrollIntoView>
                </ul>
                <div className={(isOpen ? "navbar_menu_mobile--active" : "navbar_menu_mobile")} onClick={() => setIsOpen(!isOpen)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>


            </div>
        </div>
    )
}

export default Navbar
