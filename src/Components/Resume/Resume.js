import React from 'react'
import { Component } from 'react'
import "./ResumeStyle.scss";
import Library from "./ResumeAppLibrary/ResumeAppLibrary";
import Viewport from "./ResumeAppViewport/ResumeAppViewport";

const EducationList = [{
    Title: "Solent University", SubTitle: "Southampton, England", description: "3 Years Course. BSc(Hons) Degree within Web Development & Digital Design", year: "2018-2021",
}, {
    Title: "Tancsics Mihaly Secondary School", SubTitle: "Kaposvar, Hungary", description: "Secondary Grammar School, Arany Janos Talentcare Program. 5 Years Course awarded with A-level equivalent finished with Biology & English language.", year: "2013-2018",
}, {
    Title: "Hunyadi Janos Elementary School", SubTitle: "Kaposmero, Hungary", description: "Elementary School 8 Years Course. Pass to Tancsics Mihaly Secondary School", year: "2005-2013",
},
]

const SkillList = [{
    Title: "Web Development", SubTitle: "Web Technologies I use", description: " HTML, CSS, JavaScript, React, SASS, Next, Redux, Node, Express, PHP, Firebase, MongoDB, MySQL, Apollo-GraphQL, GraphQL", year: "",
}, {
    Title: "Design concepts", SubTitle: "Familiar with methodologies, sub-methods and design patterns", description: "Software Development Life Cycle (SDLC), Design Thinking, Design Sprint, Agile development, Waterfall development, Microservices & Monolithic Architectural Design, MVC & MVVM pattern, Observer/pub-sub pattern,  ", year: "",
}, {
    Title: "Development Tools", SubTitle: "Tools I use to support development", description: "Terminal, Node Package Manager, Webpack, GitHub.", year: "",
}, {
    Title: "Digital Design", SubTitle: "Technologies I use regularly to achieve contemporary design", description: "AdobeXD, Figma, and PhotoShop", year: "",
}, {
    Title: "Web Technologies I learn", SubTitle: "Web technologies I currently learn & practice", description: "Currently learning Unit, Integration and E2E testing with Jest library", year: "",
},
]

const WorkList = [
    {
        Title: "Volunteer", SubTitle: "Currently particiapting in a project", description: "Currently helping a project with delivering a Development Plan, Educating co-workers with methodologies to be used and providing the team information about the methods in details from step to step. Moreover, I also participate in the development as the part of the team.", year: "Current"
    },
    {
        Title: "UniMeetings", SubTitle: "UniMeetings Web Application", description: " An application that helps schools identify meetings and connections between students in case a student signs illness due to the current pandemic by allowing students per registered school to create official meetings and update their status if participated on any event outside the school. A free account to log in: Mina Bowers - minapass.", year: "01-2021"
    }, {
        Title: "MyShoes", SubTitle: "MyShoes E-commerce website,", description: " An E-commerce website with all the functionalities that is required for shopping such as: display items from database, sorting items, modals to spectate item details, view independent shopping cart, cart functionalities, implementing local-storage, managing state of the order with Redux, order feedback and save unique orders. ", year: "08-2020"
    }, {
        Title: "Portfolio Site", SubTitle: "My portfolio site", description: " This is the portfolio site you are watching right now. The site has a separated media and font style library and the implementation of a pixel perfect interface based on Tauhid Hasan graphics designer's Interface Design. Moreover, the website features different web applications such as this viewer library and 3D tile-based portfolio section.", year: "11-2020"
    }, {
        Title: "Drag&Drop List", SubTitle: "Trello-Clone", description: " I am practicing the base stack of web development (HTML5-CSS3-JavaScript) constantly. Trello-Clone is the first step to deepen my knowledge within the stack to achieve an advanced level of programming resulting in clear, maintinable, scalable, and performant applications. ", year: "11-2020"
    },
]

const HobbyList = [
    {
        Title: "Information Technology", SubTitle: "From Personal Computers to Sound Technology", description: "I am interested all the way in personal electronics. Building my own PC, being updated about new products, specs etc...", year: "",
    }, {
        Title: "Programming", SubTitle: "Web Development & Problem Solving", description: " University is not the only activity I devote to learning Web Development. I am constantly solving tasks on Stack Overflow and practicing JavaScript by creating projects, following JAM-stack & PWAs. ", year: "",
    }, {
        Title: "Blog", SubTitle: "My open dev blog", description: "I dedicated myself to create an open 'handbook'-like blog, where I explain and introduce aspects of web technologies and their usability ", year: "",
    }, {
        Title: "Sport", SubTitle: "I love swimming", description: " However I love swimming, at the moment I do not have the opportunity to exercise. ", year: "",
    }, {
        Title: "Gaming", SubTitle: "I like computer games", description: " Absolute favorite is strategy games, but also find joy in shooters(fps) and other genres such as MMOs. ", year: "",
    },
]






export class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Education: true,
            Skills: false,
            Work: false,
            Hobby: false,
        }
    }

    onClickHandle = (e) => {
        let name = e.target.id;
        let value = !this.state[name];
        this.setState({
            Education: false,
            Skills: false,
            Work: false,
            Hobby: false,
            [name]: value
        })
    }



    render() {
        return (
            <div className="resume_app">
                <Library handler={this.onClickHandle} state={this.state} />
                <Viewport state={this.state} EducationList={EducationList} SkillList={SkillList} WorkList={WorkList} HobbyList={HobbyList} />
            </div>

        )
    }
}

export default Resume
