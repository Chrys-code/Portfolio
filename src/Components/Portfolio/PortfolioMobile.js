import React from 'react'
import "./PortfolioMobileStyle.scss";

/////////////////////////
// Mobile Portfolio
/////////////////////////

const projectList = [
    {
        title: 'Website Clone',
        subtitle: 'Netflix',
        description: "A Netflix clone",
        image: require("../../Assets/Images/Portfolio/Netflix_1.png"),
        link: "https://chrys-code.github.io/Netflix-clone/",
    }, {
        title: 'Dev Portfolio',
        subtitle: 'Portfolio',
        description: 'My personal portfolio',
        image: require("../../Assets/Images/Portfolio/Portfolio_1.png"),
        link: "#",
    }, {
        title: "E-commerce",
        subtitle: "My Shoes",
        description: "Best partner for a long way",
        image: require("../../Assets/Images/Portfolio/Ecommerce_1.png"),
        link: "https://myshoes-ecommerce.herokuapp.com/#/",
    }, {
        title: 'Trello',
        subtitle: 'Trello-Clone',
        description: "Vanilla JS Drag&Drop List",
        image: require("../../Assets/Images/Portfolio/Trello_1.png"),
        link: "https://chrys-code.github.io/Trello-Clone/",
    }, {
        title: 'Webiste Clone',
        subtitle: 'Facebook',
        description: "A Facebook clone",
        image: require("../../Assets/Images/Portfolio/Facebook_1.png"),
        link: "https://facebook-clone-5fe9e.web.app/",
    },


]


function PortfolioMobile() {
    return (
        <div className="portfolio_mobile">
            {projectList.map((item, index) => {
                return (
                    <div className={"portfolio_mobile_tiles_"} key={index}>
                        <div className="overlay">
                            <h2>{item.title}</h2>
                            <h3>{item.subtitle}</h3>
                            <p>{item.description}</p>
                            <div className="view"><a href={item.link} rel="noopener noreferrer" target="_blank" >View</a></div>
                        </div>
                        <img className="portfolio_mobile_background" src={item.image} alt="background" />
                    </div>
                )
            })}
        </div>
    )
}

export default PortfolioMobile;



   // 








