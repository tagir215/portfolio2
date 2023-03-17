import React from "react";
import en from '.././locales/en.json'
import fi from '.././locales/fi.json'
import './Bottombar.css'

export default function(){
    return(
        <div className="bottom-bar">

            <div className="contact-bar">
                
                <div className="bottom-right">
                    <div className="bottom-contact">
                        <h4>{fi["email-name"]}</h4>
                        <span className="contact-title">{fi.email}</span>
                    </div>
                    
                    <div className="bottom-contact">
                        <h4>{fi["phone-name"]}</h4>
                        <span className="contact-title">{fi.phone}</span>
                    </div>
                    
                    <div className="bottom-contact">
                        <h4>{fi["location-name"]}</h4>
                        <span className="contact-title">{fi.location}</span>
                    </div>
                
                </div>
            </div>
           
        </div>


    )
}