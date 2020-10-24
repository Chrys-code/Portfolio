import React from 'react'
import "./BlogStyle.scss";

const headers= [
    {
        title: "Js & React",
    },
    {
        title: "Events",
    },
    {
        title: "Updates",
    },

]

const js_react = [
    {
        title: "Sample",  
        content: "",      
    },    {
        title: "Sample",  
        content: "",      
    },
    {
        title: "Sample",  
        content: "",      
    },
    {
        title: "Sample",  
        content: "",      
    },


]

const events = [
    {
        title: "Sample",  
        content: "",      
    },    {
        title: "Sample",  
        content: "",      
    },
    {
        title: "Sample",  
        content: "",      
    },
    {
        title: "Sample",  
        content: "",      
    },

]

const updates = [
    {
        title: "Sample",  
        content: "",      
    },    {
        title: "Sample",  
        content: "",      
    },
    {
        title: "Sample",  
        content: "",      
    },
    {
        title: "Sample",  
        content: "",      
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
                    <li key={i}><a href="#" style={hoverStyle}>{item.title}</a></li>
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

