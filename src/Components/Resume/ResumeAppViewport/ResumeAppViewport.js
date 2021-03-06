import React from 'react'
import Fade from "react-reveal";

function ResumeAppViewport(props) {
    const { state, EducationList, SkillList, WorkList, HobbyList } = props;



    return (
        <div className="resume_pages">
            <Fade left when={state.Education}>
                <div className={"resume_pages_page_1" + (state.Education === true ? "--active" : "")}>
                    {EducationList.map((stage, i) => {
                        return (
                            <div className="resume_content_body" key={i}>
                                <div className="header">
                                    <h3>{stage.Title}</h3>
                                    <div className="year">{stage.year}</div>
                                </div>
                                <h4>{stage.SubTitle}</h4>
                                <p>{stage.description}</p>
                            </div>
                        )
                    })}
                </div>
            </Fade>

            <Fade left when={state.Skills}>
                <div className={"resume_pages_page_2" + (state.Skills === true ? "--active" : "")}>
                    {SkillList.map((stage, i) => {
                        return (
                            <div className="resume_content_body" key={i}>
                                <div className="header">
                                    <h3>{stage.Title}</h3>
                                </div>
                                <h4>{stage.SubTitle}</h4>
                                <p>{stage.description}</p>
                            </div>
                        )
                    })}
                </div>
            </Fade>

            <Fade left when={state.Work}>
                <div className={"resume_pages_page_3" + (state.Work === true ? "--active" : "")}>
                    {WorkList.length > 0 ? WorkList.map((stage, i) => {
                        return (
                            <div className="resume_content_body" key={i}>
                                <div className="header">
                                    <h3>{stage.Title}</h3>
                                    <div className="year">{stage.year}</div>
                                </div>
                                <h4>{stage.SubTitle}</h4>
                                <p>{stage.description}</p>
                            </div>
                        )
                    }) : <div className="failed">"Whoops! Looks like I'm unexperienced. :(</div>}
                </div>
            </Fade>

            <Fade left when={state.Hobby}>
                <div className={"resume_pages_page_4" + (state.Hobby === true ? "--active" : "")}>
                    {HobbyList.map((stage, i) => {
                        return (
                            <div className="resume_content_body" key={i}>
                                <div className="header">
                                    <h3>{stage.Title}</h3>
                                </div>
                                <h4>{stage.SubTitle}</h4>
                                <p>{stage.description}</p>
                            </div>
                        )
                    })}
                </div>
            </Fade>

        </div>
    )
}

export default ResumeAppViewport
