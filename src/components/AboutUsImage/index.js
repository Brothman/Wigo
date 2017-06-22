import React from 'react'
import './index.css'
import benJPG from '../../Images/profpics/ben.jpg';
import brigitteJPG from '../../Images/profpics/brigitte.jpg';
import christinaJPG from '../../Images/profpics/christina.jpg';
import davidJPG from '../../Images/profpics/david.jpg';
import lizzetJPG from '../../Images/profpics/lizzet.jpg';
import louisJPG from '../../Images/profpics/louis.jpg';
import nathanJPG from '../../Images/profpics/nathan.jpg';
import sanjanaJPG from '../../Images/profpics/sanjana.jpg';
import vaughanJPG from '../../Images/profpics/vaughan.jpg';

class AboutUsImage extends React.Component {


  render () {
    return (
       <div className="row-of-square-pictures">
            <ul className="square-pictures">
              <li className="square-picture">
                <img className="ben" src={benJPG}/>
                <div className="benben">Ben Rothman:<br></br>Ben is a aksdlkj slkdjfa lsd flksj dfls dlfkjs ldfj sldj flskjd flsjd flks dflksjdf lskdfj lsd fjls dfksjdl fsldjf lskd fslkdjf skdjf sdlf.</div>
              </li>
              <li className="square-picture">
                <img className="brigitte" src={brigitteJPG}/>
                <div className="bribri">Brigitte Blanco:<br></br>Brigitte is a aksdlkj slkdjfa lsd flksj dfls dlfkjs ldfj sldj flskjd flsjd flks dflksjdf lskdfj lsd fjls dfksjdl fsldjf lskd fslkdjf.</div>
              </li>
              <li className="square-picture">
                <img className="christina"  src={christinaJPG}/>
                <div className="chrischris">Christina Zhang:<br></br>Christina is a aksdlkj slkdjfa lsd flksj dfls dlfkjs ldfj sldj flskjd flsjd flks dflksjdf lskdfj lsd fjls dfksjdl fsldjf lskd fslkdjf.</div>
              </li>
              <li className="square-picture">
                <img className="david" src={davidJPG}/>
                <div className="dada">David Brown:<br></br>David is a aksdlkj slkdjfa lsd flksj dfls dlfkjs ldfj sldj flskjd flsjd flks dflksjdf lskdfj lsd fjls dfksjdl fsldjf lskd fslkdjf.</div>
              </li>
              <li className="square-picture">
                <img className="lizzet" src={lizzetJPG}/>
                <div className="lizliz">Lizzet Clifton:<br></br>Lizzet is a aksdlkj slkdjfa lsd flksj dfls dlfkjs ldfj sldj flskjd flsjd flks dflksjdf lskdfj lsd fjls dfksjdl fsldjf lskd fslkdjf.</div>
              </li>
              <li className="square-picture">
                <img className="louis" src={louisJPG}/>
                <div className="lolo">Louis Choicer:<br></br>Louis is a aksdlkj slkdjfa lsd flksj dfls dlfkjs ldfj sldj flskjd flsjd flks dflksjdf lskdfj lsd fjls dfksjdl fsldjf lskd fslkdjf.</div>
              </li>
              <li className="square-picture">
                <img className="nathan" src={nathanJPG}/>
                <div className="nana">Nathan Justin:<br></br>Nathan is a aksdlkj slkdjfa lsd flksj dfls dlfkjs ldfj sldj flskjd flsjd flks dflksjdf lskdfj lsd fjls dfksjdl fsldjf lskd fslkdjf.</div>
              </li>
              <li className="square-picture">
                <img className="sanjana" src={sanjanaJPG}/>
                <div className="sasa">Sanjana Sarkar:<br></br>Sanjana is a aksdlkj slkdjfa lsd flksj dfls dlfkjs ldfj sldj flskjd flsjd flks dflksjdf lskdfj lsd fjls dfksjdl fsldjf lskd fslkdjf.</div>
              </li>
              <li className="square-picture">
                <img className="vaughan" src={vaughanJPG}/>
                <div className="vava">Vaughan Syer:<br></br>Vaughan is a aksdlkj slkdjfa lsd flksj dfls dlfkjs ldfj sldj flskjd flsjd flks dflksjdf lskdfj lsd fjls dfksjdl fsldjf lskd fslkdjf.</div>
              </li>
            </ul>
          </div>
    )}
}

export default AboutUsImage;
