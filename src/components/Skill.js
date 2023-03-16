import React from "react";
import './Skill.css'

export default function({img, title}){
    return (
        <div className="skill-container">
            <div className="skill-image-container">
                <img className="skill-image" src={img} alt=""/>

            </div>
            <span className="skill-title">{title}</span>
        </div>
    )
}