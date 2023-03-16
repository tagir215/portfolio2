import React from "react";
import './TextBlock.css';
import en from '.././locales/en.json'
import fi from '.././locales/fi.json'

export default function({title,text, link, theme}){
    return(
        <div className={"topic-content "+theme}>
            <h1 className="topic-title">{title}</h1>
            <span className="topic-text">{text}</span>
            <br/>
            {link && <a className="link" target="_blank" href={link}>{fi["learn more"]}</a>}
        </div>
    )
}