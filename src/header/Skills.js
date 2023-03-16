import React from "react";
import Skill from "../components/Skill";
import fi from ".././locales/fi.json"
import './Skills.css'

export default function(){
    const path = process.env.PUBLIC_URL;
    return(    
      
        <div className="skills-div">
            <div className="skills">
                <Skill img={path + '/skills/logo-android.png'} title="Android" />
                <Skill img={path + '/skills/logo-css.png'} title="CSS" />
                <Skill img={path + '/skills/logo-firebase.png'} title="Firebase" />
                <Skill img={path + '/skills/logo-googleCloud.png'} title="Google Cloud" />
                <Skill img={path + '/skills/logo-java.png'} title="Java" />
                <Skill img={path + '/skills/logo-javascript.png'} title="JavaScript" />
                <Skill img={path + '/skills/logo-kotlin.png'} title="Kotlin" />
                <Skill img={path + '/skills/logo-opengl.png'} title="OpenGL" />
                <Skill img={path + '/skills/logo-react.png'} title="React" />
                <Skill img={path + '/skills/logo-unity.png'} title="Unity" />
                <Skill img={path + '/skills/logo-wicket.png'} title="Apache Wicket" />
                <Skill img={path + '/skills/logoCsharp.png'} title="C#" />
            </div>

        </div>
    
    )
}