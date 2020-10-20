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
    Title:"Example School Name" , SubTitlte: "Example Course Name", description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator." , year: "2010-2105" ,
    },{
    Title:"Example School Name" , SubTitlte: "Example Course Name", description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator." , year: "2010-2105" ,
    },{
    Title:"Example School Name" , SubTitlte: "Example Course Name", description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator." , year: "2010-2105" ,
    },{
    Title:"Example School Name" , SubTitlte: "Example Course Name", description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator." , year: "2010-2105" ,
    },{
    Title:"Example School Name" , SubTitlte: "Example Course Name", description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator." , year: "2010-2105" ,
    },
]

const WorkList = [
]

const SEOList = [{
    Title:"Example School Name" , SubTitlte: "Example Course Name", description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator." , year: "2010-2105" ,
    },{
    Title:"Example School Name" , SubTitlte: "Example Course Name", description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator." , year: "2010-2105" ,
    },{
    Title:"Example School Name" , SubTitlte: "Example Course Name", description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator." , year: "2010-2105" ,
    },{
    Title:"Example School Name" , SubTitlte: "Example Course Name", description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator." , year: "2010-2105" ,
    },{
    Title:"Example School Name" , SubTitlte: "Example Course Name", description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator." , year: "2010-2105" ,
    },
]

export class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Education: true,
            Skills: false,
            Work: false,
            SEO: false,
        }
    }

    onClickHandle = (e) => {
        let name = e.target.innerText;
        let value = !this.state[name];
        this.setState({
            Education: false,
            Skills: false,
            Work: false,
            SEO: false,
            [name]: value})
        } 


    render() {
        return (
            <div className="resume_app">
                <Library handler={this.onClickHandle} state={this.state} />
                <Viewport state={this.state} EducationList={EducationList} SkillList={SkillList} WorkList={WorkList} SEOList={SEOList} />
            </div>

        )}
}

export default Resume
