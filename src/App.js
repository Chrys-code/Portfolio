import React, { useState } from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Modal from './Components/Modal/Modal';
import Hero from './Components/Hero/Hero';
import Presentational from './Components/Presentational';
import About from "./Components/About/About";
import Services from './Components/Services/Services';
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import PortfolioMobile from "./Components/Portfolio/PortfolioMobile";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog";
//import Contact from "./Components/Contact/Contact";


// Webapp theme requires further development (styled components + theme.provider)
const backgroundDark = {
  background: "#161d26",
}
/*
const backgroundLight = {
  background: "#FFFFFF",
}
*/

function App() {

  const tiles = [
    {
      id: 0,
      className: "tile_web_design",
      icon: require("./Assets/Images/Services/Web_Design_Icon.svg"),
      alt: "web design icon",
      title: "Web Design",
      description: "Project discovery and planning",
      background: require("./Assets/Images/Services/Web_Design_Background.svg"),
    }, {
      id: 1,
      className: "tile_ux_design",
      icon: require("./Assets/Images/Services/UX_Design_Icon.svg"),
      alt: "ux design icon",
      title: "UX Design",
      description: "User Experience Design to increase satisfaction",
      background: require("./Assets/Images/Services/UX_Design_Background.svg"),
    }, {
      id: 2,
      className: "tile_interface_design",
      icon: require("./Assets/Images/Services/Interface_Design_Icon.svg"),
      alt: "interface design icon",
      title: "Interface Design",
      description: "Pixel perfect Interfaces on any device.",
      background: require("./Assets/Images/Services/Interface_Design_Background.svg"),
    }, {
      id: 3,
      className: "tile_web_development",
      icon: require("./Assets/Images/Services/Web_Development_Icon.svg"),
      alt: "web development icon",
      title: "Web Development",
      description: "End-To-End Web Development",
      background: require("./Assets/Images/Services/Web_Development_Background.svg"),
    }, {
      id: 4,
      className: "tile_motion_graphic",
      icon: require("./Assets/Images/Services/Motion_Graphic_Icon.svg"),
      alt: "motion graphic icon",
      title: "Motion Graphic",
      description: "Animations during interactions with the website that emphasize the UX.",
      background: require("./Assets/Images/Services/Motion_Graphic_Background.svg"),
    }, {
      id: 5,
      className: "tile_seo_optimize",
      icon: require("./Assets/Images/Services/Seo_Optimize_Icon.svg"),
      alt: "seo optimize icon",
      title: "SEO Optimize",
      description: "Accessibility on any device, SEO friendly website content.",
      background: require("./Assets/Images/Services/Seo_Optimize_Background.svg"),
    },
  ]

  const modalInfo = [
    {
      explanation: "Project discovery and planning requires an open line of contact between the client and us from the start to the end of the development to ensure well communicated ideas and improvements.",
      question: "What is project discovery and planning about?",
      answer: ["Project introduction and overview",
        "Sorting out appropriate methodologies and web technologies to use",
        "Estimate resources to be used",
        "Estimate deliver time & cost",
        "Deliver development plan"
      ],
    },
    {
      explanation: "A good User Experience Design should limit the cognitive and visual perception of your customers providing an easy to use and understansable User Interface resulting in increasing traffic, customer retention, and satisfaction.",
      answer: "During design you will receive an interactive minimum viable product to test each design phase based on feedback before development",
    }, {
      explanation: "Pixel perfect design is important to keep your online appearance appealing to customers and to communicate quality and reliability to them which will be valued as your brand. I create pixel perfect User Interface on any device or revise your current design following Design Principles.  You will receive an interactive prototype of your application before development. ",
    }, {
      explanation: "I manage your web application end-to-end using design patterns and methodologies to ensure quality throughout your whole web app. I manage all your web application from the database and server to your appearance in the browser.",
      question: "What does it exactly mean?",
      answer: [
        "This means you don't need to hire a second web developer or company to deal with different aspects of the application or make further developments, we can handle all. Finding others to handle an existing work is not cost and time efficient and it is hard to find a new reliable developer.",
      ],
    }, {
      explanation: "Nowadays most of the websites or web applications are operating with animations.",
      answer: "Animations help users understand the state of the progress going behind the website they are using. These animations can emphasize the User Experience by constantly giving feedback to the users increasing satisfaction during interactions. ",
    }, {
      explanation: "Search Engine Optimization is a complex process that requires different aspects of a website to work well together.",
      answer: ["Meta tags that is readable by Google Search Engine",
        "Consequent usage of HTML tags",
        "Website content that is referring to the keywords",
        "Both in and out pointing links on your website",
        "Accessibility (Mobile friendliness of your website)",
        "Web technologies used to create your website",
      ],
      example: "E.g: Static Site Generators generate an HTML-page for each page in your application that is now readable by Google Search Engine, then hydrates your website to work as a web application whereas applications are indexed by one HTML page.",
    },
  ]

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);


  const modalHandler = (e, item) => {
    e.preventDefault();

    if (e.target.className !== "modal_wrapper") {
      setIndex(item.id); // get tile info

      setIsOpen(!isOpen); // Display modal

    } else {
      setIsOpen(!isOpen); // Close modal
    }
  }

  return (
    <div className="App" style={backgroundDark} >

      {isOpen && <Modal index={index} modalInfo={modalInfo} tiles={tiles} modalHandler={modalHandler} />}

      <Navbar />
      <Hero />
      <Presentational section={'about'} title={"About Us"} subTitle={"Why chose me?"} bg={false} >
        <About />
      </Presentational>
      <Presentational section={'services'} title={"Services"} subTitle={"Wat can we provide you?"} bg={false}>
        <Services tiles={tiles} modalHandler={modalHandler} />
      </Presentational>
      <Presentational section={'resume'} title={"Resume"} subTitle={"My formal bio details"} bg={true}>
        <Resume />
      </Presentational>
      <Presentational section={'portfolio'} title={"Portfolio"} subTitle={"Check out the lastest works"} bg={false}>
        <Portfolio />
        <PortfolioMobile />
      </Presentational>
      <Presentational section={'blog'} title={"Blog"} subTitle={"Latest topics I have written"} bg={true}>
        <Blog />
      </Presentational>
      <Footer />
    </div>
  );
  /*
    <Presentational section={'contact'} title={"Contact Me"} subTitle={"Let's keep in touch!"} bg={false}>
    <Contact />
  </Presentational>
  */


}

export default App;
