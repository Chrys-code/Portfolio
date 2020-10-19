import React from 'react'
import Fade from "react-reveal";

function ResumeAppViewport(props) {
    const {state} = props;

    return (
            <div className="resume_pages">
                <div className="resume_pages_timeline">
                </div>
                <Fade left when={state.Education}>
                    <div className={"resume_pages_page_1" + (state.Education === true? "--active" : "")}>
                        <div className="resume_content_body">
                            <div className="header"> 
                                <div className="timeline_dot"></div>    
                                <h3>Example Header</h3>
                            <div className="year">2010-2015</div>
                        </div>
                        <h4>Example subheader</h4>
                        <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
                        random Lipsum generator.</p>
                    </div>
                        <div className="resume_content_body">
                            <div className="header">     
                                <div className="timeline_dot"></div>
                                <h3>Example Header</h3>
                            <div className="year">2010-2015</div>
                        </div>
                        <h4>Example subheader</h4>
                        <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
                        random Lipsum generator.</p>
                        </div>
                        <div className="resume_content_body">
                            <div className="header"> 
                                <div className="timeline_dot"></div>     
                                <h3>Example Header</h3>
                            <div className="year">2010-2015</div>
                        </div>
                        <h4>Example subheader</h4>
                        <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
                        random Lipsum generator.</p>
                        </div>
                    </div>
                    </Fade>

                    <Fade left when={state.Skills}>
                    <div className={"resume_pages_page_2" + (state.Skills === true? "--active" : "")}>
                        <div className="resume_content_body">
                            <div className="header">    
                                <div className="timeline_dot"></div>     
                                <h3>Example Header</h3>
                            <div className="year">2010-2015</div>
                        </div>
                        <h4>Example subheader</h4>
                        <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
                        random Lipsum generator.</p>
                        </div>
                        <div className="resume_content_body">
                            <div className="header">    
                                <div className="timeline_dot"></div>     
                                <h3>Example Header</h3>
                            <div className="year">2010-2015</div>
                        </div>
                        <h4>Example subheader</h4>
                        <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
                        random Lipsum generator.</p>
                        </div>
                    </div>
                    </Fade>
                    <Fade left when={state.Work}>

                    <div className={"resume_pages_page_3" + (state.Work === true? "--active" : "")}>
                        <div className="resume_content_body">
                            <div className="header"> 
                                <div className="timeline_dot"></div>     
                                <h3>Example Header</h3>
                            <div className="year">2010-2015</div>
                        </div>
                        <h4>Example subheader</h4>
                        <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
                        random Lipsum generator.</p>
                        </div>
                    </div>
                    </Fade>

                    <Fade left when={state.SEO}>

                    <div className={"resume_pages_page_4" + (state.SEO === true? "--active" : "")}>
                        <div className="resume_content_body">
                            <div className="header">     
                                <div className="timeline_dot"></div>     
                                <h3>Example Header</h3>
                            <div className="year">2010-2015</div>
                        </div>
                        <h4>Example subheader</h4>
                        <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
                        random Lipsum generator.</p>
                        </div>
                    </div>
                    </Fade>

            </div>
    )
}

export default ResumeAppViewport
