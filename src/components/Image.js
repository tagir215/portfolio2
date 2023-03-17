import React from "react";
import './Image.css';

export default function({path, top}){
    return(
        <img className="image" src={path} alt="" style={{top: `${top}px`}}/>
    )
}