import React from 'react'
import "./PresentationalStyle.scss";
function presentational(props) {
    const { section, title, subTitle, children } = props;

    return (
        <div className={section}>
            <div className="presentational_header">
                <h1>{title}</h1>
                <p>{subTitle}</p>
                </div>
            <div className="presentational_body">
            {children}
            </div>
        </div>
    )
}

export default presentational
