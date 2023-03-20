import React from "react";
import './Skill.css'

export default function({img, title, list}){

    return (
        <div className="skill-container">
            <div className="skill-image-container">
                <img className="skill-image" src={img} alt=""/>
            </div>
            <span className="skill-title">{title}</span>

            {list && <div className="more-info">
                {list.map((text,index) => (
                    <span className="skill-line" key={"skill-line"+index}>{text}</span>
                ))}
            </div>}
        </div>
    )
}