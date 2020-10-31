import React from 'react'
import { Component } from 'react'
import "./ResumeStyle.scss";

import Library from "./ResumeAppLibrary/ResumeAppLibrary";
import Viewport from "./ResumeAppViewport/ResumeAppViewport";

const EducationList = [{
    Title:"Solent University" , SubTitle: "Southampton, England", description: "3 Years Course. BSc(Hons) Degree within Web Development & Digital Design" , year: "2018-2021" ,
    },{
    Title:"Tancsics Mihaly Secondary School" , SubTitle: "Kaposvar, Hungary", description: "Secondary Grammar School, Arany Janos Talentcare Program. 5 Years Course awarded with Diploma, A-level in general knowledge finished with Biology & English language." , year: "2013-2018" ,
    },{
    Title:"Hunyadi Janos Elementary School" , SubTitle: "Kaposmero, Hungary", description: "Elementary School 8 Years Course. Pass to Tancsics Mihaly Secondary School" , year: "2005-2013" ,
    },
]

const SkillList = [{
    Title:"Web Development" , SubTitle: "Web Technologies I use reguralry to achieve contemporary application design", description: "To create fast and SEO friendly websites I use React and to achieve accessibility I use SASS and Bootstrap. Despite the variety of development tools I maintain strong grounding in HTML5, CSS3 and JavaScript." , year: "" ,
    },{
    Title:"Development Tools" , SubTitle: "Tools I learned to use during my projects", description: "During developments I learned to use tools such as: Terminal, Webpack, SASS, Bootstrap, and Git." , year: "" ,
    },{
    Title:"Digitla Design" , SubTitle: "Technologies I use reguralry to achieve contemporary design", description: "None of the websites and applications are appealing without an outstanding design. AdobeXD, Figma and PhotoShop are unavoidable design tools to maintain enjoyment in our online appearance and increase customer retention." , year: "" ,
    },{
        Title:"Web Technologies I learn" , SubTitle: "Web technologies I learn & practice", description: "GraphQL & Serverless Applications, Server Side Rendering, Static Site Generators such as Next.js." , year: "" ,
    },
]

const WorkList = [
]

const HobbyList = [{
    Title:"Information Technology" , SubTitle: "From PCs to Sound Technology", description: "I am interested all the way in personal electronics." , year: "" ,
    },{
    Title:"Programming" , SubTitle: "Web Development & Problem Solving", description: "University is not the only activity I devote to learn Web Development. I consntantly solving tasks on CodeWars and practicing JavaScript by creating projects, following JAM-stack & PWAs." , year: "" ,
    },{
    Title:"Sport" , SubTitle: "I love swimming", description: "However I love swimming, at the moment I do not have the opportunity to excercise." , year: "" ,
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
            [name]: value})
        } 

    

    render() {
        return (
            <div className="resume_app">
                <Library handler={this.onClickHandle} state={this.state} />
                <Viewport state={this.state} EducationList={EducationList} SkillList={SkillList} WorkList={WorkList} HobbyList={HobbyList} />
            </div>

        )}
}

export default Resume
