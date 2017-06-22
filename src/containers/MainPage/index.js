import React from 'react';
import Logo from '../../components/Logo';
import ImageDatabase from '../../components/ImageDatabase';
//import ImageGalleryHolder from '../../components/ImageGalleryHolder';
import AboutUs from '../../components/AboutUs';

import './index.css';

import base from '../../rebase';
import firebase from 'firebase/app';
import 'firebase/auth';

import $ from 'jquery';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  getData = () => {
    base.fetch ('Activities', {
      context: this,
      asArray: true,
      then(data) {
        console.log(data);
      }
    });
  }

/*  authenticateUser = () => {

    var provider = new base.auth.FacebookAuthProvider();

    base.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  } */

  componentWillMount = () => {
    this.getData();
    //this.authenticateUser();
  }

  // animateSlides = () => {
  //   //var $slides = $('[data-slides]');
  //   var data-slides=["./Images/Animals.png", "./Images/Bars.png"];
  //   var $slides = $('.background-image');
  //   console.log($slides);
  // 	var images = data-slides;
  // 	var count = images.length;
  // 	var slideshow = function() {
  // 		$slides
  // 			.css('background-image', 'url("' + images[Math.floor(Math.random() * count)] + '")')
  // 			.show(0, function() {
  // 				setTimeout(slideshow, 5000);
  // 			});
  // 	};
  // 	slideshow();
  // }
  //
  // componentWillMount = () => {
  //   this.animateSlides();
  // }


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
      </div>
      )

  }
}

export default MainPage;

//scrapped for time being
//<ImageGalleryHolder />
