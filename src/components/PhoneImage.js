import React from "react";
import './PhoneImage.css'

export default function(props){
    const phonepath = process.env.PUBLIC_URL + '/phone20.9.png';
    return(
        <div className={"phone-container "+props.position} style={{width:`${props.width}`,height:`${props.height}`}}>
            {!props.img && <img className="phone-background" loading="lazy" src={phonepath}/>}
            {props.img && <img className="phone-background" loading="lazy" src={props.img}/>}
            {props.path && <img className="inner-img" loading="lazy" src={props.path}/>} 
            {props.video && <video className="inner-img" loading="lazy" src={props.video} autoPlay muted loop />}
        </div>
    )
}