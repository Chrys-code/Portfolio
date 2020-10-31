import React from 'react'
import "./ServicesStyle.scss";

const tiles = [
    {
        className: "tile_web_design",
        icon: require("../../Assets/Images/Services/Web_Design_Icon.svg"),
        alt: "web design icon",
        title: "Web Design",
        description: "Project discovery, ideation and information architecture creation.",
        background: require("../../Assets/Images/Services/Web_Design_Background.svg"),
    }, {
        className: "tile_interface_design",
        icon: require("../../Assets/Images/Services/Interface_Design_Icon.svg"),
        alt: "interface design icon",
        title: "Interface Design",
        description: "Pixel perfect Interfaces on both Personal Computers and Mobile Phones.",
        background: require("../../Assets/Images/Services/Interface_Design_Background.svg"),
    }, {
        className: "tile_web_development",
        icon: require("../../Assets/Images/Services/Web_Development_Icon.svg"),
        alt: "web development icon",
        title: "Web Development",
        description: "Project discovery, ideation and information architecture creation.",
        background: require("../../Assets/Images/Services/Web_Development_Background.svg"),
    }, {
        className: "tile_ux_design",
        icon: require("../../Assets/Images/Services/UX_Design_Icon.svg"),
        alt: "ux design icon",
        title: "UX Design",
        description: "User Experience Design following Design Principles via Adobe xD & Figma.",
        background: require("../../Assets/Images/Services/UX_Design_Background.svg"),
    }, {
        className: "tile_motion_graphic",
        icon: require("../../Assets/Images/Services/Motion_Graphic_Icon.svg"),
        alt: "motion graphic icon",
        title: "Motion Graphic",
        description: "Animations during interactions with the website that emphasize the UX.",
        background: require("../../Assets/Images/Services/Motion_Graphic_Background.svg"),
    }, {
        className: "tile_seo_optimize",
        icon: require("../../Assets/Images/Services/Seo_Optimize_Icon.svg"),
        alt: "seo optimize icon",
        title: "SEO Optimize",
        description: "Accessbility on any device, SEO friendly website content.",
        background: require("../../Assets/Images/Services/Seo_Optimize_Background.svg"),
    },
]

function Services() {
    return (
        <>
        <div className="services_tiles">
            {tiles.map((item, index) => {
                return( 
                <div className={item.className} key={index}>
                    <img className="service_tiles_icon" src={item.icon} alt={item.alt}/>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                    <img className="services_tiles_background" src={item.background}  alt="background" />
                </div>
                )
            })}
        </div>
        </>
    )
}

export default Services
