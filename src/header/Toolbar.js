import en from '.././locales/en.json';
import fi from '.././locales/fi.json'
import './Toolbar.css';


export default function(){

    
    return(
        <>
        <div className='place-holder' />
        <div className='toolbar-background'>
        <div className="toolbar-bar">


                <div className="toolbar-right">
                    <span className="toolbar-title">{fi.title}</span>
                </div>

                <div className="toolbar-right">
                    <a className="toolbar-tab"  href='mailto:tagir.tirkkonen@gmail.com'>{fi.contact}</a>
                </div>
                
            </div>
        </div>
        </>
    )
}