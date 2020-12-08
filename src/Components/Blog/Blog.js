import React from 'react'
import "./BlogStyle.scss";

const headers= [
    {
        title: "JavaScript & Frameworks",
    },
    {
        title: "Tools",
    },
    {
        title: "Events & Updates",
    },

]

const js_react = [
    {
        title: "JavaScript Basics: Hello World & Data types",  
        link: "https://krisztiannagyblog.herokuapp.com/javascript/javascript-JavaScript_Basics",      
    }, {
        title: "React Fundamentals: Functional vs Class-Components",  
        link: "https://krisztiannagyblog.herokuapp.com/react/react-Functional_vs_Class-Components",      
    }, {
        title: "JavaScript Basics: Variables",  
        link: "https://krisztiannagyblog.herokuapp.com/javascript/javascript-JavaScript_Variables",      
    }

]

const events = [
    {
        title: "Sample",  
        link: "",      
    },
]

const updates = [
    {
        title: "Sample",  
        link: "",      
    },
]


function Section(props) {
    const {title, list, headerStyle, hoverStyle} = props;

    return (
        
        <div className="blog_body_card">
            <div className="blog_body_card_header" style={headerStyle}>
                {title}
            </div>

            <ul className="blog_body_card_list">
                {list.map((item, i) => { return (
                    <li key={i}><a href={item.link} target="_blank" rel="noopener noreferrer" style={hoverStyle}>{item.title}</a></li>
                )})}
            </ul>
        </div>
        )
}


function Blog() {
    return (
        <div className="blog_cards">
        <Section title={headers[0].title} list={js_react} headerStyle={{background: '#FF6331'}} hoverStyle={{'--hover': '#FF6331'}} />
        <Section title={headers[1].title} list={events} headerStyle={{background:'#803AFB'}}  hoverStyle={{'--hover': '#803AFB'}}/>
        <Section title={headers[2].title} list={updates} headerStyle={{background:'#F5276C'}}  hoverStyle={{'--hover':'#F5276C'}}/>
        </div>
    )
}

export default Blog

