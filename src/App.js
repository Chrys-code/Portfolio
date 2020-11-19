import React, {useState} from 'react';
import './App.scss';
import "./Components/Services/ModalStyle.scss";
import Navbar from './Components/Navbar/Navbar';
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
        description: "Project discovery, ideation and information architecture creation.",
        background: require("./Assets/Images/Services/Web_Design_Background.svg"),
    }, {
      id: 1,
        className: "tile_interface_design",
        icon: require("./Assets/Images/Services/Interface_Design_Icon.svg"),
        alt: "interface design icon",
        title: "Interface Design",
        description: "Pixel perfect Interfaces on both Personal Computers and Mobile Phones.",
        background: require("./Assets/Images/Services/Interface_Design_Background.svg"),
    }, {
      id: 2,
        className: "tile_web_development",
        icon: require("./Assets/Images/Services/Web_Development_Icon.svg"),
        alt: "web development icon",
        title: "Web Development",
        description: "Project discovery, ideation and information architecture creation.",
        background: require("./Assets/Images/Services/Web_Development_Background.svg"),
    }, {
      id: 3,
        className: "tile_ux_design",
        icon: require("./Assets/Images/Services/UX_Design_Icon.svg"),
        alt: "ux design icon",
        title: "UX Design",
        description: "User Experience Design following Design Principles via Adobe xD & Figma.",
        background: require("./Assets/Images/Services/UX_Design_Background.svg"),
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
        description: "Accessbility on any device, SEO friendly website content.",
        background: require("./Assets/Images/Services/Seo_Optimize_Background.svg"),
    },
]



  const modalInfo = [
    {
        explanation: "Project discovery and ideation requires an open line of contact between the client and us from the start to the end of the development to ensure well communicated ideas and imporvements.",
        question: "What is project discovery and ideation about?",
        answer: [ "Sorting out appropriate tools and web technologies to use during development.",
         "To measure an approximate development time and cost.", 
         "To communicate new ideas, suggestions during development progression."
        ],
    }, {
        explanation: "Pixel perfect design is important to keep your online appearance appealing to users and to communicate quality and reliability to them. I create pixel perfect User Interface on any device and revise your current design following Design Principles and deliver a prototype of your application before development. ",
    }, {
        explanation: "I manage your web application from Front-end to Back-end to create fluent user experience while using your application.",
        question: "What exactly does it mean?",
        answer: [
          "Using latest technologies to build fluid interface.",
          "Unit testing.",
          "Profiling application performance.",
          "Using appropriate database types.",
          "Implementing business logic on server-side.",
          "Recommendation of relieble hosts or hosting with us.",

        ],
    }, {
        explanation: "User Experience Design can improve the usability of your application by creating an immersive user experience that can not only increase the traffic of your website but increase customer retention and satisfaction during interactions with your website.",
        answer: "Designed User Experience to your web application using Design Principles delivered via Prototype before development.",
    }, {
      explanation: "Nowadays most of the websites or web applications are operating with animations.",
      answer: "Animations help users understand the state of the progress going behind the website they are using. These animations can emphasize the User Experience by constantly giving feedback to the users increasing satisfaction during interactions. ",
    }, {
      explanation: "Search Engine Optimalization is a complex process that requires different aspects of a website to work well together.",
      answer: ["Meta tags that is readable by Google Search Engine",
      "Consequent usage of HTML tags",
      "Website content that is referring to the keywords",
      "Both in and out pointing links on your website",
      "Accessibility (Mobile friendlyness of your website)",
      "Web technologies used to create your website",
    ],
    example: "E.g: Static Site Generators generate an HTML-page for each page in your application that is now readable by Google Search Engine, then hydrates your website to work as a web application whereas applications are indexed by one HTML page.",
    },
]



  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);


  const modalHandler = (e, item) => {
      e.preventDefault();

      if (e.target.className === "modal_wrapper") {
        setIsOpen(!isOpen);
      } else {
        setIsOpen(!isOpen);
        setIndex(item.id);
      }
    }
  

  const Modal = (props) => {

      const {index, tiles, modalInfo} = props;

      return (
      <div className="modal_wrapper" onClick={(e) => modalHandler(e)}>
          <div className="modal">
            <img className="modal_icon" src={tiles[index].icon} alt={tiles[index].alt}/>
            <h2>{tiles[index].title}</h2>
            <p>{tiles[index].description}</p>

            {index === 0 &&  <div className="modal_0_info">
              <p className="modal_0_text" >{modalInfo[index].explanation}</p>
              <p className="modal_0_text">{modalInfo[index].question}</p>
              <ul>
                {modalInfo[index].answer.map((ans, index) => {
                  return (
                <li className="modal_0_text_ans" key={index}>{ans}</li>
                  )
                })}
              </ul>
              
              </div>           
            }

            {index === 1 && <div className="modal_1_info">
              <p className="modal_1_text" >{modalInfo[index].explanation}</p>
             </div>
            }

            {index === 2 && <div className="modal_2_info">
            <p className="modal_2_text" >{modalInfo[index].explanation}</p>
              <p className="modal_2_text">{modalInfo[index].question}</p>
              <ul>
                {modalInfo[index].answer.map((ans, index) => {
                  return (
                <li className="modal_2_text" key={index}>{ans}</li>
                  )
                })}
              </ul>
             </div>
            }
  
  {index === 3 && <div className="modal_3_info">
  <p className="modal_3_text" >{modalInfo[index].explanation}</p>
  <p className="modal_3_text" >{modalInfo[index].answer}</p>
             </div>
            }


{index === 4 && <div className="modal_4_info">
  <p className="modal_4_text" >{modalInfo[index].explanation}</p>
  <p className="modal_4_text" >{modalInfo[index].answer}</p>
             </div>
            }

{index === 5 && <div className="modal_5_info">
  <p className="modal_5_text" >{modalInfo[index].explanation}</p>
  <ul>
                {modalInfo[index].answer.map((ans, index) => {
                  return (
                <li className="modal_5_text" key={index}>{ans}</li>
                  )
                })}
              </ul>

              <p className="modal_5_text" >{modalInfo[index].example}</p>

             </div>

            }






                  <img class="modal_img" src={tiles[index].background} alt="modal_background" />
          </div>
          </div>
      )
  }



  return (
    <div className="App" style={backgroundDark} >
      
      {isOpen && <Modal index={index} modalInfo={modalInfo} tiles={tiles} />} 

      <Navbar  />
      <Hero  />
      <Presentational section={'about'} title={"About Us"} subTitle={"Why choose me?"} bg={false} >
        <About/>
      </Presentational>
      <Presentational section={'services'} title={"Services"} subTitle={"Wat can we provide you?"} bg={false}>
        <Services tiles={tiles} modalHandler={modalHandler}  />
      </Presentational>
      <Presentational section={'resume'} title={"Resume"} subTitle={"My formal bio details."} bg={true}>
        <Resume />
      </Presentational>
      <Presentational section={'portfolio'} title={"Portfolio"} subTitle={"Check out the lastest works."} bg={false}>
        <Portfolio />
        <PortfolioMobile />
      </Presentational>
      <Presentational section={'blog'} title={"Blog"} subTitle={"Some arcticles that raised my interest."} bg={true}>
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
