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
              </li>
              <li className="square-picture">
                <img className="brigitte" src={brigitteJPG}/>
              </li>
              <li className="square-picture">
                <img className="christina"  src={christinaJPG}/>
              </li>
              <li className="square-picture">
                <img className="david" src={davidJPG}/>
              </li>
              <li className="square-picture">
                <img className="lizzet" src={lizzetJPG}/>
              </li>
              <li className="square-picture">
                <img className="louis" src={louisJPG}/>
              </li>
              <li className="square-picture">
                <img className="nathan" src={nathanJPG}/>
              </li>
              <li className="square-picture">
                <img className="sanjana" src={sanjanaJPG}/>
              </li>
              <li className="square-picture">
                <img className="vaughan" src={vaughanJPG}/>
              </li>
            </ul>
          </div>
    )}
}

export default AboutUsImage;
