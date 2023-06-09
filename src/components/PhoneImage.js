import React from "react";
import './PhoneImage.css'

export default function(props){
    const phonepath = process.env.PUBLIC_URL + '/phone20.9.png';
    return(
        <div className={"phone-container "+props.position} style={{width:`${props.width}`,height:`${props.height}`}}>
            {!props.img && <img className="phone-background" src={phonepath}/>}
            {props.img && <img className="phone-background" src={props.img}/>}
            {props.path && <img className="inner-img" src={props.path}/>} 
            {props.video && <video className="inner-img" src={props.video} autoPlay muted loop />}
        </div>
    )
}