import React from 'react';

import {loginWithProvider} from '../../utils/auth';
import {logoutUser} from '../../utils/firebase';
import {firebaseApp} from '../../utils/firebase.js'

import {browserHistory} from 'react-router';

import './index.css';

class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { }
  }

  requireAuth = () => {
    var user = firebaseApp.auth().currentUser;

       if (user) {
                   alert('logged in');
                   console.log(user);
                  browserHistory.push('/home')
               }
               else {
                 this.authenticateUser();
               }
   }

   authenticateUser = () => {
     loginWithProvider('facebook')
       .then((data) => {
         console.log('facebook data', data)
           browserHistory.push('/home')
       })
 }

  profilePageSwitch = () => {
    browserHistory.push('/profile')
  }

  render () {
    return (
      <div>
        <button onClick={this.requireAuth}> Hello </button>
        <button onClick={this.profilePageSwitch}> Profile </button>
      </div>
    )
  }
}

export default LandingPage;
