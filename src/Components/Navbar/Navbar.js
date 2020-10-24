import React from 'react'
import "./NavbarStyle.scss";
import ScrollIntoView from 'react-scroll-into-view';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_container">
                <div className="navbar_logo">KN.</div>
                <ul className="navbar_menu">
                <ScrollIntoView selector=".hero">
                    <li className="navbar_menu_links" >Home</li>
                </ScrollIntoView>
                <ScrollIntoView selector=".about" >
                    <li className="navbar_menu_links">About Us</li>
                    </ScrollIntoView>
                    <ScrollIntoView selector=".services" >
                    <li className="navbar_menu_links">Services</li>
                    </ScrollIntoView>
                    <ScrollIntoView selector=".resume">
                    <li className="navbar_menu_links">Resume</li>
                    </ScrollIntoView>
                    <ScrollIntoView selector=".portfolio" >
                    <li className="navbar_menu_links">Portfolio</li>
                    </ScrollIntoView>
                    <ScrollIntoView selector=".blog">
                    <li className="navbar_menu_links">Blog</li>
                    </ScrollIntoView>

                </ul>
            </div>
        </div>
    )
}

export default Navbar
