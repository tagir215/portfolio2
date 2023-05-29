import React from "react";
import './TextBlock.css';
import en from '.././locales/en.json'
import fi from '.././locales/fi.json'

export default function({title,text,list, link,link2, theme}){
    
    return(
        <div className={"topic-content "+theme}>
            <h1 className={theme+"-title"} >{title}</h1>
            
            <span className={theme+"-text"} >{text}</span>
            {list !=null && <h4>{fi.topicPlus}</h4>}
            {list != null &&  
                <ul className="topic-list">
                {list.map((string,index)=>{
                    return <li key={index}>{string}</li>
                })}
                </ul>}
            <br/>
            {link && <a className="link" target="_blank" href={link}>{fi["learn more"]}</a>}
            {link2 && <a className="link" target="_blank" href={link2}>{fi["learn more"]}</a>}
        </div>
    )
}