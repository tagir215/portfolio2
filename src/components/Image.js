import React from "react";
import './Image.css';

export default function({path}){
    return(
        <img className="topic-image" src={path} alt=""/>
    )
}