import React from "react";
import en from '.././locales/en.json'
import fi from '.././locales/fi.json'
import './Bottombar.css'

export default function(){
    return(
        <div className="bottom-bar">
            <h1 className="contact-main-title">{fi.contact}</h1>

            <div className="contact-bar">
                
                <div className="bottom-right">
                    <div className="bottom-contact">
                        <img className="bottom-img" src={process.env.PUBLIC_URL + '/contact/google.png'} alt=""/>
                        <h4>{fi["email-name"]}</h4>
                        <span className="contact-title">{fi.email}</span>
                    </div>
                    
                    <div className="bottom-contact">
                        <img className="bottom-img" src={process.env.PUBLIC_URL + '/contact/phone.png'} alt=""/>
                        <h4>{fi["phone-name"]}</h4>
                        <span className="contact-title">{fi.phone}</span>
                    </div>
                    
                    <div className="bottom-contact">
                        <img className="bottom-img" src={process.env.PUBLIC_URL + '/contact/location.png'} alt=""/>
                        <h4>{fi["location-name"]}</h4>
                        <span className="contact-title">{fi.location}</span>
                    </div>
                
                </div>
            </div>
           
        </div>


    )
}