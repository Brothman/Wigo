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
                <div className="benben">Ben Rothman:<br></br>Ben is a rising senior majoring in religion at Vassar College. He will pursue a career in web dev after graduating and is the lead Web developer at Wigo.</div>
              </li>
              <li className="square-picture">
                <img className="brigitte" src={brigitteJPG}/>
                <div className="bribri">Brigitte Blanco:<br></br>Brigitte, a rising junior at Duke University, is pursuing Public Policy, Biology, and Innovation & Entrepreneurship. Brigitte is one of the Product Managers at Wigo!</div>
              </li>
              <li className="square-picture">
                <img className="christina"  src={christinaJPG}/>
                <div className="chrischris">Christina Zhang:<br></br>Christina, a rising 3rd year at Georgia Tech, is pursuing Business and Computational Media. She is a front end web-developer at Wigo!</div>
              </li>
              <li className="square-picture">
                <img className="david" src={davidJPG}/>
                <div className="dada">David Brown:<br></br>David, a rising junior at Claremont McKenna College, studies Neuro-economics and leadership. He is head of sales and a product manager for Wigo.</div>
              </li>
              <li className="square-picture">
                <img className="lizzet" src={lizzetJPG}/>
                <div className="lizliz">Lizzet Clifton:<br></br>Lizzet, a rising junior at Duke University, is studying Visual & Media Studies and Comp Sci. Lizzet is a front end web-developer at Wigo.</div>
              </li>
              <li className="square-picture">
                <img className="louis" src={louisJPG}/>
                <div className="lolo">Louis Choicer:<br></br>Louis Choicer is a rising sophomore at Stony Brook University and is pursuing a major in Computer Science. Louis is a front end web-developer at Wigo.</div>
              </li>
              <li className="square-picture">
                <img className="nathan" src={nathanJPG}/>
                <div className="nana">Nathan Justin:<br></br>Nathan, a rising junior at Harvey Mudd College, is pursuing Mathematics and Computer Science. Nathan is one of the iOS engineers here at Wigo</div>
              </li>
              <li className="square-picture">
                <img className="sanjana" src={sanjanaJPG}/>
                <div className="sasa">Sanjana Sarkar:<br></br>Sanjana Sarkar, a rising junior at the University of Pennsylvania, is pursuing Comp Sci, Math, and Linguistics. Sanjana is an iOS engineer at Wigo!</div>
              </li>
              <li className="square-picture">
                <img className="vaughan" src={vaughanJPG}/>
                <div className="vava">Vaughan Syer:<br></br>Vaughan Syer is a rising junior at the University of Virginia. She is studying Economics. Vaughan is one of the Product Managers at Wigo</div>
              </li>
            </ul>
          </div>
    )}
}

export default AboutUsImage;
