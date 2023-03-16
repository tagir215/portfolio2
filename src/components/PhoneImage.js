import React from "react";
import './PhoneImage.css'

export default function(props){
    return(
        <div className="phone-image-container">
            <div className="phone-container position1">
                <img className="phone-background" src=".././phone20.9.png"/>
                <img className="inner-img" src={props.path0}/>
            </div>
            <div className="phone-container position2">
                <img className="phone-background" src=".././phone20.9.png"/>
                <img className="inner-img" src={props.path1}/>
            </div>
            
        </div>
    )
}