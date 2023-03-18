import React from "react";
import './Image.css';

export default function({path, top, width, left,filter}){
    return(
        <img className="image" src={path} alt="" style={{top: `${top}`,width:`${width}`, left:`${left}`,filter:`${filter}`}}/>
    )
}