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

function App() {
  const iFolder = process.env.PUBLIC_URL;
  const phoneWidth = "300px";
  const phoneHeight = "500px"
  return (
    <>

      <ToolBar />
      
      <div class="page active">
          <div className='purple-background'></div>
          <TextBlock title={fi.aboutTitle} text={fi.aboutText} theme="main-title"/>
          <ChangingThings />
          <Image path={iFolder +'/puut.png'} top="650px" width="600px" left="50%"/>
          <TextBlock title={fi.aboutTitle} text={fi.aboutTitle} theme="about-me"/>
          <Skills className="skills"/>
      </div>

      

      <div class="page animation1">

        <div className="topic">
          <TextBlock title={fi.topic1Title} text={fi.topic1Text} link={"https://github.com/tagir215/Star-Chat"}/>
          <div className="phone-image-container">
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic1/starchat6.jpg'} position="position1"/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic1/starchat3.jpg'} position="position2"/>
          </div>
          
        </div>

        <div className="topic">
           <div className="phone-image-container">
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic2/picmetr1.jpg'} position="position1"/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic2/picmetr5.jpg'} position="position2"/>
          </div>
          <TextBlock title={fi.topic2Title} text={fi.topic2Text} link={"https://github.com/tagir215/VisualMetronome"}/>
        </div>

        <div className="topic">
          <TextBlock title={fi.topic3Title} text={fi.topic3Text} link={"https://github.com/tagir215/YourMindMap"}/>
          <div className="phone-image-container">
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic3/mindmap1.jpg'} position="position1"/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic3/mindmap0.jpg'} position="position2"/>
          </div>
          
        </div>

        <div className="topic">
        <div className="phone-image-container">
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic4/newgolf1.png'} position="position1"/>
            <PhoneImage width={phoneWidth} height={phoneHeight} path={iFolder + '/topic4/newgolf2.png'} position="position2"/>
          </div>
          <TextBlock title={fi.topic4Title} text={fi.topic4Text} link={"https://github.com/tagir215/GPSGolf"}/>
        </div>

        <Bottombar />
      </div>

      
    </>
  )
}

export default App;
