import React from "react";
import en from '.././locales/en.json'
import fi from '.././locales/fi.json'
import './Bottombar.css'

export default function(){
    return(
        <div className="bottom-bar">
            <div className="contact-bar">
                
                <div className="bottom-right">
                    <img className="bottom-img" src=".././contact/google.png" alt=""/>
                    <span className="bottom-contact">{fi.email}</span>
                    <img className="bottom-img" src=".././contact/phone.png" alt=""/>
                    <span className="bottom-contact">{fi.phone}</span>
                    <img className="bottom-img" src=".././contact/location.png" alt=""/>
                    <span className="bottom-contact">{fi.location}</span>
                
                </div>
            </div>
           
             <span className="good-to-know">{fi.goodToKow}</span>
        </div>


    )
}