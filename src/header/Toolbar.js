import React from 'react';
import en from '.././locales/en.json';
import fi from '.././locales/fi.json'
import './Toolbar.css';

export default function(){

    

    function handleScroll(){
    const toolbar = document.querySelector('.toolbar-background');
    toolbar.classList.add('hidden');
    }
    
    return(
        <>
        <div className='toolbar-background'>
        <div className="main-bar">


                <div className="main-right">
                    <span className="main-title">{fi.title}</span>
                    <img className="main-logo" src="logo192.png" alt=""></img>
                </div>

                <div className="main-right">
                    <a className="main-tab">{fi.tab0}</a>
                    <a className="main-tab">{fi.tab1}</a>
                    <a className="main-tab">{fi.tab2}</a>
                    <a className="main-tab">{fi.tab3}</a>
                </div>
                
            </div>
        </div>
        </>
    )
}