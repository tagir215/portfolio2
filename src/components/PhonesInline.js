import React from "react";
import PhoneImage from "./PhoneImage";
import './PhonesInline.css'


export default function(props){
    return(
        <div className="phonesinline">
            <div className="phone-container2 pos1">
                <img className="phone-background2" src=".././phone20.9.png"/>
                <img className="inner-img2" src={props.path0}/>
            </div>
            <div className="phone-container2 pos2">
                <img className="phone-background2" src=".././phone20.9.png"/>
                <img className="inner-img2" src={props.path1}/>
            </div>
            <div className="phone-container2 pos3">
                <img className="phone-background2" src=".././phone20.9.png"/>
                <img className="inner-img2" src={props.path2}/>
            </div>
            <div className="phone-container2 pos4">
                <img className="phone-background2" src=".././phone20.9.png"/>
                <img className="inner-img2" src={props.path3}/>
            </div>
            
        </div>
    )
}