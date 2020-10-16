import React from 'react'
import "./NavbarStyle.scss";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_container">
                <div className="navbar_logo">KN.</div>
                <ul className="navbar_menu">
                    <li className="navbar_menu_links">Home</li>
                    <li className="navbar_menu_links">About Us</li>
                    <li className="navbar_menu_links">Services</li>
                    <li className="navbar_menu_links">Resume</li>
                    <li className="navbar_menu_links">Portfolio</li>
                    <li className="navbar_menu_links">Pricing</li>
                    <li className="navbar_menu_links">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
