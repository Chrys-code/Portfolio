import React from 'react'
import Fade from "react-reveal";

function ResumeAppViewport(props) {
    const {state, EducationList, SkillList, WorkList, SEOList} = props;

    return (
            <div className="resume_pages">
                <div className="resume_pages_timeline">
                </div>
                <Fade left when={state.Education}>
                    <div className={"resume_pages_page_1" + (state.Education === true? "--active" : "")}>
                        {EducationList.map((stage, i) => {return (
                        <div className="resume_content_body" key={i}>
                            <div className="header"> 
                                <div className="timeline_dot"></div>    
                                <h3>{stage.Title}</h3>
                                <div className="year">{stage.year}</div>
                            </div>
                            <h4>{stage.SubTitle}</h4>
                            <p>{stage.description}</p>
                        </div>
                        )})}
                    </div>
                    </Fade>

                    <Fade left when={state.Skills}>
                    <div className={"resume_pages_page_2" + (state.Skills === true? "--active" : "")}>
                    {SkillList.map((stage, i) => {return (
                        <div className="resume_content_body" key={i}>
                            <div className="header"> 
                                <div className="timeline_dot"></div>    
                                <h3>{stage.Title}</h3>
                                <div className="year">{stage.year}</div>
                            </div>
                            <h4>{stage.SubTitle}</h4>
                            <p>{stage.description}</p>
                        </div>
                        )})}
                    </div>
                    </Fade>

                    <Fade left when={state.Work}>
                    <div className={"resume_pages_page_3" + (state.Work === true? "--active" : "")}>
                    {WorkList.length > 0 ? WorkList.map((stage, i) => {return (
                        <div className="resume_content_body" key={i}>
                            <div className="header"> 
                                <div className="timeline_dot"></div>    
                                <h3>{stage.Title}</h3>
                                <div className="year">{stage.year}</div>
                            </div>
                            <h4>{stage.SubTitle}</h4>
                            <p>{stage.description}</p>
                        </div>
                        )}) : <div className="failed">"Whoops! Looks like I'm unexperienced. :(</div>}
                    </div>
                    </Fade>

                    <Fade left when={state.SEO}>
                    <div className={"resume_pages_page_4" + (state.SEO === true? "--active" : "")}>
                    {SEOList.map((stage, i) => {return (
                        <div className="resume_content_body" key={i}>
                            <div className="header"> 
                                <div className="timeline_dot"></div>    
                                <h3>{stage.Title}</h3>
                                <div className="year">{stage.year}</div>
                            </div>
                            <h4>{stage.SubTitle}</h4>
                            <p>{stage.description}</p>
                        </div>
                        )})}
                    </div>
                    </Fade>

            </div>
    )
}

export default ResumeAppViewport
