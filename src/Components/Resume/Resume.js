import React from 'react'
import { Component } from 'react'
import "./ResumeStyle.scss";

import Library from "./ResumeAppLibrary/ResumeAppLibrary";
import Viewport from "./ResumeAppViewport/ResumeAppViewport";

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
                <Viewport state={this.state} />
            </div>

        )}
}

export default Resume
