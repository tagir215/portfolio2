import React from 'react';
import en from '.././locales/en.json';
import fi from '.././locales/fi.json'
import './Toolbar.css';
import {useState} from 'react';

export default function(){
    const [activeTab, setActiveTab] = useState(0);

    const selectTab = function(tab){
        setActiveTab(tab);
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementsByClassName("page")[tab].classList.add("active");
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
                    <a onClick={() => selectTab(2)} className={`toolbar-tab ${activeTab === 2 ? 'active-tab' : ''}`}>{fi.tab2}</a>
                    <a onClick={() => selectTab(3)} className={`toolbar-tab ${activeTab === 3 ? 'active-tab' : ''}`}>{fi.tab3}</a>
                </div>
                
            </div>
        </div>
        </>
    )
}