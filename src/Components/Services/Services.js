import React from 'react'
import "./ServicesStyle.scss";

function Services(props) {
    const {tiles, modalHandler} = props;

    return (
        <>

        <div className="services_tiles">
            {tiles.map((item, index) => {
                return( 
                <div className={item.className} key={index} onClick={(e) => modalHandler(e, item)} >
                    <img className="service_tiles_icon" src={item.icon} alt={item.alt}/>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                    <img className="services_tiles_background" src={item.background}  alt="background" />
                </div>
                )
            })
            }
        </div>

        </>
    )
}

export default Services
