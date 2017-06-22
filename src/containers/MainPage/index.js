import React from 'react';
import Logo from '../../components/Logo';
import ImageDatabase from '../../components/ImageDatabase';
//import ImageGalleryHolder from '../../components/ImageGalleryHolder';
import AboutUs from '../../components/AboutUs';
import {loginWithProvider} from '../../utils/auth';
import {logoutUser} from '../../utils/firebase';
import {firebaseApp} from '../../utils/firebase.js'

import {browserHistory} from 'react-router';

import './index.css';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
/*
  getData = () => {
    base.fetch ('Activities', {
      context: this,
      asArray: true,
      then(data) {
        console.log(data);
      }
    });
  }*/

 requireAuth = () => {
   var user = firebaseApp.auth().currentUser;

      if (user) {
                  alert('logged in');
                  console.log(user);
              }
              else {
                this.authenticateUser();
              }
  }

  authenticateUser = () => {
    loginWithProvider('facebook')
      .then((data) => {
        console.log('facebook data', data)
      })
}

/* great idea but can't figure it out right now and not necessary -- have to priotize time

logoutUserClient = () => {
  //firebaseApp.auth().unauth()
  console.log('firebaseapp', firebaseApp);
}*/

    profilePageSwitch = () => {
      browserHistory.push('/profile')
    }


  render () {
    return (
      <div className='total-container'>
        <div className="body-container">
           <Logo />
           <div className="body">
             <ImageDatabase />
           </div>
        </div>
          <AboutUs />
        <button onClick={this.requireAuth}> Hello </button>
      <button onClick={this.profilePageSwitch}> Profile </button>
      </div>
      )

  }
}

export default MainPage;

//scrapped for time being
//<ImageGalleryHolder />
