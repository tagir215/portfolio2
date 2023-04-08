import React from 'react';
import './App.css';
import ToolBar from './header/Toolbar.js'
import fi from './locales/fi.json'
import TextBlock from './components/TextBlock.js'
import Bottombar from './header/Bottombar';
import PhoneImage from './components/PhoneImage';
import Skills from './header/Skills';
import Videos from './components/Videos';

function App() {
  const iFolder = process.env.PUBLIC_URL;
  const phoneWidth = "300px";
  const phoneHeight = "500px"
  return (
    <>
    <div className='wrapper'>
    <ToolBar />
      <img className='rocks' src={iFolder+'/cliff0.png'} alt=""/>
      <img className='background-image' src={iFolder+'/cliff1.jpg'} alt=""/>
      
      <div class="page active">
          <TextBlock title={fi.aboutTitle} text={fi.aboutText} theme="main-title"/>
          <TextBlock title={fi.actualAboutTitle} text={fi.actualAboutText} theme="about-me"/>
          <Skills className="skills"/>  
      </div>

      <div className='masking-background'></div>
      <div className='masking-background is-white'></div>

      <div class="page animation1 ">
            

            <div className="content">
              <div className="phone-image-container ">
                <PhoneImage width={phoneWidth} height={phoneHeight} video={iFolder + '/topic2/rhythm0000.mp4'} position="position1"/>
                <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic2/picmetr5.jpg'} position="position2"/>
              </div>
              <TextBlock theme="topic" title={fi.topic2Title} text={fi.topic2Text} link={"https://github.com/tagir215/VisualMetronome"}/>
            </div>  
 
            <div className="content">
              <div className="phone-image-container ">
                <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic3/mindmap1.jpg'} position="position1"/>
                <PhoneImage width={phoneWidth} height={phoneHeight} video={iFolder + '/topic3/mindmap0000.mp4'} position="position2"/>
              </div>
              <TextBlock theme="topic" title={fi.topic3Title} text={fi.topic3Text} link={"https://github.com/tagir215/YourMindMap"}/>
              
            </div>

       
          
          <div className="content">
              <div className="phone-image-container ">
                <PhoneImage width={phoneWidth} height={phoneHeight} video={iFolder + '/topic1/starchat0000.mp4'} position="position1"/>
                <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic1/starchat1.jpg'} position="position2"/>
              </div>
              <TextBlock theme="topic" title={fi.topic1Title} text={fi.topic1Text} link={"https://github.com/tagir215/Star-Chat"}/>
              
            </div>

            <div className="content">
            <div className="phone-image-container ">
                <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic4/newgolf2.png'} position="position1"/>
                <PhoneImage width={phoneWidth} height={phoneHeight} video={iFolder + '/topic4/golf0000.mp4'} position="position2"/>
              </div>
              <TextBlock theme="topic" title={fi.topic4Title} text={fi.topic4Text} link={"https://github.com/tagir215/GPSGolf"}/>
            </div>

            

            <Bottombar /> 
        </div>

      
    </div>
    </> 
  )
}

export default App;
