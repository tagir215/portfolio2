import React from "react";
import PhoneImage from "./PhoneImage";
import './PhonesInline.css'


export default function(props){
    const phoneWidth = "200px";
    const phoneHeight = "400px";
    const iFolder = process.env.PUBLIC_URL;
    return(
        <div className="phonesinline">
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic3/mindmap0.jpg'}/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic3/mindmap1.jpg'}/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic3/mindmap2.jpg'}/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic3/mindmap3.jpg'}/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic3/mindmap4.jpg'}/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic3/mindmap5.jpg'}/>
        </div>
    )
}