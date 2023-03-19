import React from "react";
import PhoneImage from "./PhoneImage";
import Image from "./Image";
import './ChangingThings.css'
import { useState } from "react";

export default function(){
    const width = "200px"
    const height = "300px"
    const publicURL = process.env.PUBLIC_URL;

    var [isVisible , setVisible] = useState(false);
    function handleAnimationEnd() {setVisible(isVisible = !isVisible);}
    
    return (
        <div className="changing-things">
        <div className={`changing-div ${isVisible ? '' : 'hidden'}`}>
            <div className="changing-screen" onAnimationIteration={handleAnimationEnd}>
                <div className="phone-image-container">
                    <PhoneImage width="230px" height="330px" position="position4" img={publicURL+'/phone209back.png'}/>
                </div>
            </div>
            <div className="changing-screen delay">
                <div className="phone-image-container">
                    <PhoneImage width={width} height={height} position="position3"  img={publicURL+'/phone209background.png'}/>
                </div>
            </div>
        </div>

        <div className={`changing-div ${isVisible ? 'hidden' : ''}`}>
            <>
            <div className="changing-screen delay">
                <div className="phone-image-container">
                    <Image path={publicURL +'/laptop-back.png'} width={"400px"} top={"20px"} left="55%" z="0px"/>
                </div>
            </div>
            <div className="changing-screen">
                <div className="phone-image-container">
                    <Image path={publicURL +'/laptop-background.png'} width={"400px"} top={"0px"} left="45%" z="0px"/>
                </div>
            </div>
            </>
            

        </div>

       

        </div>
    )
}

