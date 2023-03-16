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
import FakeStack from './components/FakeStack';
import PhonesInline from './components/PhonesInline';

function App() {
  const iFolder = process.env.PUBLIC_URL;
  
  return (
    <>


      
       <FakeStack key={0}/>

      <div className="topic">
        <TextBlock title={fi.aboutTitle} text={fi.aboutText} theme="main-title"/>
      </div>

      <Skills className="skills"/>

      <div className="topic">
        <TextBlock title={fi.topic1Title} text={fi.topic1Text} link={"https://github.com/tagir215/Star-Chat"}/>
        <PhoneImage 
                    path0={iFolder + '/topic1/starchat6.jpg'} 
                    path1={iFolder + '/topic1/starchat3.jpg'}
                    
                    />
      </div>

      <div className="topic">
        <PhoneImage 
              path0={iFolder + '/topic2/picmetr1.jpg'}
              path1={iFolder + '/topic2/picmetr5.jpg'}
              />
        <TextBlock title={fi.topic2Title} text={fi.topic2Text} link={"https://github.com/tagir215/VisualMetronome"}/>
      </div>

      <div className="topic">
        <TextBlock title={fi.topic3Title} text={fi.topic3Text} link={"https://github.com/tagir215/YourMindMap"}/>
        <PhoneImage 
                path0={iFolder + '/topic3/mindmap1.jpg'}
                path1={iFolder + '/topic3/mindmap0.jpg'}
                />
      </div>

      <div className="topic">
        <PhoneImage 
          path0={iFolder + '/topic4/newgolf1.png'}
          path1={iFolder + '/topic4/newgolf2.png'}
          />
        <TextBlock title={fi.topic4Title} text={fi.topic4Text} link={"https://github.com/tagir215/GPSGolf"}/>
      </div>


      <Bottombar />
    </>
  )
}

export default App;
