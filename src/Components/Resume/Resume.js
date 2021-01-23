import React from 'react'
import { Component } from 'react'
import "./ResumeStyle.scss";

import Library from "./ResumeAppLibrary/ResumeAppLibrary";
import Viewport from "./ResumeAppViewport/ResumeAppViewport";

const EducationList = [{
    Title: "Solent University", SubTitle: "Southampton, England", description: "3 Years Course. BSc(Hons) Degree within Web Development & Digital Design", year: "2018-2021",
}, {
    Title: "Tancsics Mihaly Secondary School", SubTitle: "Kaposvar, Hungary", description: "Secondary Grammar School, Arany Janos Talentcare Program. 5 Years Course awarded with Diploma, A-level in general knowledge finished with Biology & English language.", year: "2013-2018",
}, {
    Title: "Hunyadi Janos Elementary School", SubTitle: "Kaposmero, Hungary", description: "Elementary School 8 Years Course. Pass to Tancsics Mihaly Secondary School", year: "2005-2013",
},
]

const SkillList = [{
    Title: "Web Development", SubTitle: "Web Technologies I use to achieve contemporary application design", description: " HTML, CSS, JavaScript, React, SASS, Next, Node & Express (for basic server communications), Firebase, MongoDB", year: "",
}, {
    Title: "Development Tools", SubTitle: "Tools I use to develop applications", description: "Node Package Manager, Terminal, Webpack, Redux and GitHub.", year: "",
}, {
    Title: "Digitla Design", SubTitle: "Technologies I use regularly to achieve contemporary design", description: "AdobeXD, Figma and PhotoShop are unavoidable design tools to maintain enjoyment in our online appearance and increase customer retention.", year: "",
}, {
    Title: "Web Technologies I learn", SubTitle: "Web technologies I learn & practice", description: "GraphQL & Serverless Applications, Server Side Rendering, Static Site Generators such as Next.", year: "",
},
]

const WorkList = [
    {
        Title: "UniMeetings", SubTitle: "UniMeetings Web Application", description: " An application that helps schools identify meetings and connections between students in case a student signs illness due to the current pandemic. By allowing students per registered school to create official meetings and update their status if participated on any event outside the school.", year: "01-2021"
    }, {
        Title: "Portfolio Site", SubTitle: "My portfolio site", description: " This is the portfolio site you are watching right now. The site has a separated media and font style library and the implementation of a pixel perfect interface based on Tauhid Hasan graphics designer's Interface Design. Moreover, the website features different web applications such as this viewer library and 3D tile-based portfolio section.", year: "11-2020"
    }, {
        Title: "MyShoes", SubTitle: "MyShoes E-commerce website,", description: " An E-commerce website with all the functionalities that is required for shopping such as: display items from database, sorting items, modals to spectate item details, view independent shopping cart, cart functionalities, implementing local-storage, managing state of the order with Redux, order feedback and save unique orders. ", year: "08-2020"
    },

]

const HobbyList = [{
    Title: "Information Technology", SubTitle: "From Personal Computers to Sound Technology", description: "I am interested all the way in personal electronics.", year: "",
}, {
    Title: "Programming", SubTitle: "Web Development & Problem Solving", description: "University is not the only activity I devote to learn Web Development. I constantly solving tasks on Stack Overflow and practicing JavaScript by creating projects, following JAM-stack & PWAs.", year: "",
}, {
    Title: "Blog", SubTitle: "My open dev blog", description: "I dedicated myself to create an open 'handbook'-like blog, where I explain and introduce aspects of web technologies and their usability ", year: "",
}, {
    Title: "Sport", SubTitle: "I love swimming", description: "However I love swimming, at the moment I do not have the opportunity to exercise.", year: "",
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
