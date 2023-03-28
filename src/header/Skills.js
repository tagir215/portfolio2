import React from "react";
import Skill from "../components/Skill";
import fi from ".././locales/fi.json"
import './Skills.css'
import { useState,useEffect } from "react";

export default function(){
    const path = process.env.PUBLIC_URL;
    const [visible,setVisible] = useState(true)
   
    

    return(    
        <>
        <div className="skills-div">
            
            <div className="skills">
                    <img className="skills-logo" src={path + "/skills/code-logo.png"} alt=""></img>
                <h1 className="skills-title">{fi.skills1}</h1>
                <div className="skills-container">
                <Skill img={path + '/skills/logo-css.png'} title="CSS" list={["Selectors","Box model","Transitions","Layout","Typography","Flexbox"]}/>
                <Skill img={path + '/skills/logo-javascript.png'} title="JavaScript" list={["Functions","Classes","Objects","Lambdas","Destructuring","DOM","Arrays"]}/>
                <Skill img={path + '/skills/logo-java.png'} title="Java" list={["Polymorphism","Exceptions","Threads","Lambdas","Access Control","Data Structures","Reflection","Maven","Gradle","Jetty"]}/>
                <Skill img={path + '/skills/logo-kotlin.png'} title="Kotlin" list={["Data classes","Coroutines","Extension Functions"]}/>
                <Skill img={path + '/skills/logoCsharp.png'} title="C#" list={["Methods","Classes","Async","Delegates","LINQ"]}/>
                </div>
            </div>
            <div className="skills add-border">
                <img className="skills-logo" src={path + "/skills/framework.png"} alt=""></img>
            <h1 className="skills-title">{fi.skills2}</h1>
                <div className="skills-container">
                <Skill img={path + '/skills/logo-android.png'} title="Android" list={[,"Activities","Fragments","RecyclerView","Canvas","Layouts and Views","CustomViews","Animations","Testing","Permissions","Data storage","Retrofit"]}/>
                <Skill img={path + '/skills/logo-react.png'} title="React" list={["Components","State","Props","JSX"]}/>
                <Skill img={path + '/skills/logo-unity.png'} title="Unity" list={["Objects","Mesh rendering","Particle Systems","Raycasting","Physics Simulation"]}/>
                <Skill img={path + '/skills/logo-wicket.png'} title="Apache Wicket" list={["Components","Models","AjaxButton","Dynamic JavaScript"]}/>
                <Skill img={path + '/skills/logo-springboot.png'} title="Spring Boot" list={["annotations","(in process)"]} />
                <Skill img={path + '/skills/logo-opengl.png'} title="OpenGL" list={["VertexArrays","Buffers","OpenGL pipeline","Vertex Shaders","Fragment Shaders","Batching","Textures"]}/>
                </div>
            </div>
            <div  className="skills">
                    <img className="skills-logo" src={path + "/skills/database-logo.png"} alt=""></img>
                <h1 className="skills-title">{fi.skills3}</h1>
                <div className="skills-container">
                <Skill img={path + '/skills/logo-firebase.png'} title="Firebase" list={["RealtimeDatabase","FirebaseStorage","FirebaseMessaging","Firebase Test Lab"]}/>
                <Skill img={path + '/skills/logo-googleCloud.png'} title="Google Cloud" list={["Buckets","Objects","Google Cloud SDK"]}/>
                <Skill img={path + '/skills/logo-influxdb.png'} title="InfluxDB" list={["InfluxQL","Write API","Data Model"]}/>
                </div>
            </div>
        </div>
        </>
    
    )
}