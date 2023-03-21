import React from 'react';
import './App.css';
import ToolBar from './header/Toolbar.js'
import en from './locales/fi.json'
import fi from './locales/fi.json'
import TextBlock from './components/TextBlock.js'
import Image from './components/Image.js'
import Bottombar from './header/Bottombar';
import PhoneImage from './components/PhoneImage';
import Skills from './header/Skills';
import ChangingThings from './components/ChangingThings';
import PhonesInline from './components/PhonesInline';

function App() {
  const iFolder = process.env.PUBLIC_URL;
  const phoneWidth = "300px";
  const phoneHeight = "500px"
  return (
    <>
    <div className='wrapper'>
    <ToolBar />
      

      
      <img className='background-image' src={iFolder+'/canyonBW.png'} />
      <img className='rocks' src={iFolder+'/kiviäBW.png'}/>
      
      <div class="page active">
          <TextBlock title={fi.aboutTitle} text={fi.aboutText} theme="main-title"/>
          <TextBlock title={fi.actualAboutTitle} text={fi.actualAboutText} theme="about-me"/>
          <Skills className="skills"/>
      </div>

      <div className='masking-background'></div>
      <div className='masking-background is-white'></div>

      <div class="page animation1 ">

            <div className='content'>
              <TextBlock theme="topic" title={fi.works} text={fi['work-info']}/>
              <ChangingThings/>
            </div>

            <div className="content">
              <TextBlock theme="topic" title={fi.topic1Title} text={fi.topic1Text} link={"https://github.com/tagir215/Star-Chat"}/>
              <div className="phone-image-container ">
                <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic1/starchat6.jpg'} position="position1"/>
                <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic1/starchat8.jpg'} position="position2"/>
              </div>
              
            </div>

            <div className="content">
              <div className="phone-image-container ">
                <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic2/picmetr1.jpg'} position="position1"/>
                <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic2/picmetr5.jpg'} position="position2"/>
              </div>
              <TextBlock theme="topic" title={fi.topic2Title} text={fi.topic2Text} link={"https://github.com/tagir215/VisualMetronome"}/>
            </div>

            <div className="content">
              <TextBlock theme="topic" title={fi.topic3Title} text={fi.topic3Text} link={"https://github.com/tagir215/YourMindMap"}/>
              <div className="phone-image-container ">
                <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic3/mindmap1.jpg'} position="position1"/>
                <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic3/mindmap0.jpg'} position="position2"/>
              </div>
              
            </div>

            <div className="content">
            <div className="phone-image-container ">
                <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic4/newgolf1.png'} position="position1"/>
                <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic4/newgolf2.png'} position="position2"/>
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
