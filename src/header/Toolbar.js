import en from '.././locales/en.json';
import fi from '.././locales/fi.json'
import './Toolbar.css';
import { useState } from 'react';


export default function(){
    const [[activeTab, oldScrollPos], setState] = useState([0,0,1]);

    const selectTab = function(tab){
        setState([tab,oldScrollPos]);
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementsByClassName("page")[tab].classList.add("active");
        document.getElementsByClassName('page')[0].scrollTo(0,0);
        
    }
    
   

    
    
    return(
        <>
        <div className='place-holder' />
        <div className='toolbar-background'>
        <div className="toolbar-bar">


                <div className="toolbar-right">
                    <span className="toolbar-title">{fi.title}</span>
                    <img className="toolbar-logo" src={process.env.PUBLIC_URL + '/logo512.png'} alt=""></img>
                </div>

                <div className="toolbar-right">
                    <a onClick={() => selectTab(0)} className={`toolbar-tab ${activeTab === 0 ? 'active-tab' : ''}`}>{fi.tab0}</a>
                    <a onClick={() => selectTab(1)} className={`toolbar-tab ${activeTab === 1 ? 'active-tab' : ''}`}>{fi.tab1}</a>
                </div>
                
            </div>
        </div>
        </>
    )
}