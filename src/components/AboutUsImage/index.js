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
                <div className="benben">Ben Rothman:<br></br>Ben Rothman is a rising senior majoring in religion at Vassar College. He plans on pursuing a career in web development after graduating university. Ben is the lead Web Developer here at Wigo.</div>
              </li>
              <li className="square-picture">
                <img className="brigitte" src={brigitteJPG}/>
                <div className="bribri">Brigitte Blanco:<br></br>Brigitte Blanco, a rising junior at Duke University, is pursuing a Public Policy major, Biology minor, and Innovation & Entrepreneurship. Brigitte is one of the Product Managers here at Wigo!</div>
              </li>
              <li className="square-picture">
                <img className="christina"  src={christinaJPG}/>
                <div className="chrischris">Christina Zhang:<br></br>Christina Zhang, a rising 3rd year at Georgia Tech, is pursuing a double major in Business Administration and Computational Media. She loves doggos and mangos. Christina is one of the front end web-developers here at Wigo!</div>
              </li>
              <li className="square-picture">
                <img className="david" src={davidJPG}/>
                <div className="dada">David Brown:<br></br>David Brown is a rising junior at Claremont McKenna College where he studies neuroeconomics and leadership. He is head of sales and one of the product managers for Wigo.</div>
              </li>
              <li className="square-picture">
                <img className="lizzet" src={lizzetJPG}/>
                <div className="lizliz">Lizzet Clifton:<br></br>Lizzet is a rising Junior at Duke University. She is majoring in Visual & Media Studies, minoring in Computer Science, and pursuing a certificate in Arts of the Moving Image. Lizzet is one of the front end web-developers at Wigo. </div>
              </li>
              <li className="square-picture">
                <img className="louis" src={louisJPG}/>
                <div className="lolo">Louis Choicer:<br></br>Louis Choicer is a rising sophomore at Stony Brook University and is pursuing a major in Computer Science. Louis is a front end web-develpor at Wigo</div>
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
