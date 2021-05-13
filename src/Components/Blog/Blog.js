import React from 'react'
import "./BlogStyle.scss";

const headers = [
    {
        title: "JavaScript",
    }, {
        title: "React",
    }, {
        title: "Design",
    },
]
const js = [
    {
        title: "Memoization",
        link: "https://krisztiannagyblog.herokuapp.com/jstopics/javascript-Memoization"
    }, {
        title: "IIFE",
        link: "https://krisztiannagyblog.herokuapp.com/jstopics/javascript-IIFE"
    }, {
        title: "Module Pattern",
        link: "https://krisztiannagyblog.herokuapp.com/jstopics/javascript-Module_Pattern",
    }, {
        title: "Modules, Submodules & Aggregation",
        link: "https://krisztiannagyblog.herokuapp.com/jstopics/javascript-Modules_and_Submodules",
    }, {
        title: "Async-Await, Promises and Callback",
        link: "https://krisztiannagyblog.herokuapp.com/jstopics/javascript-Async_Await_Promise_&_Callback"
    }, {
        title: "Fetch API",
        link: "https://krisztiannagyblog.herokuapp.com/jstopics/javascript-FetchAPI"
    },
]

const react = [
    {
        title: "Wrapper Component",
        link: "https://krisztiannagyblog.herokuapp.com/react/react-Returning_Child",
    }, {
        title: "Higher Order Component",
        link: "https://krisztiannagyblog.herokuapp.com/react/react-Higher_Order_Component",
    }, {
        title: "Prop flow",
        link: "https://krisztiannagyblog.herokuapp.com/react/react-Prop_Flow",
    }, {
        title: "Layer Separation",
        link: "https://krisztiannagyblog.herokuapp.com/react/react-Layer_Separation",
    }, {
        title: "useState & useEffect",
        link: "https://krisztiannagyblog.herokuapp.com/react/react-React_useState_&_useEffect",
    }, {
        title: "Functional vs Class-Component",
        link: "https://krisztiannagyblog.herokuapp.com/reacttopics/react-Functional_vs_Class-Components",
    },
]

const design = [
    {
        title: "Drawback of Modern Frameworks",
        link: "https://krisztiannagyblog.herokuapp.com/design/design-Drawback_of_Modern_Frameworks",
    },
]


function Section(props) {
    const { title, list, headerStyle, hoverStyle } = props;

    return (

        <div className="blog_body_card">
            <div className="blog_body_card_header" style={headerStyle}>
                {title}
            </div>

            <ul className="blog_body_card_list">
                {list.map((item, i) => {
                    return (
                        <li key={i}><a href={item.link} target="_blank" rel="noopener noreferrer" style={hoverStyle}>{item.title}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}


function Blog() {
    return (
        <div className="blog_cards">
            <Section title={headers[0].title} list={js} headerStyle={{ background: '#FF6331' }} hoverStyle={{ '--hover': '#FF6331' }} />
            <Section title={headers[1].title} list={react} headerStyle={{ background: '#803AFB' }} hoverStyle={{ '--hover': '#803AFB' }} />
            <Section title={headers[2].title} list={design} headerStyle={{ background: '#F5276C' }} hoverStyle={{ '--hover': '#F5276C' }} />
        </div>
    )
}

export default Blog

