import React from 'react'
import "./PresentationalStyle.scss";
import BG_Flag from "../Assets/Images/Background_Flag/bg_flag.svg"

function presentational(props) {
    const { section, title, subTitle, children, bg } = props;

   const bgStyle = {
       position: "absolute",
       transform: "translate(-50%, -50%)",
       left: "50%",
       top: "50%",
       zIndex: -1,
   }
   

    return (
        <div className={section}>
            <div className="presentational_header">
                <h1>{title}</h1>
                <p>{subTitle}</p>
                </div>
            <div className="presentational_body">
            {children}
            </div>

            {bg === true ? <img src={BG_Flag} style={bgStyle} alt="" /> : ""}

        </div>
    )
}

export default presentational




