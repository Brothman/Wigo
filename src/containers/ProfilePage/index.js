import React from 'react';
import {firebaseApp} from '../../utils/firebase.js'
import './index.css'
import Logo from '../../components/Logo';
import Image from '../../components/Images';


class ProfilePage  extends React.Component {

  render () {
    var user = firebaseApp.auth().currentUser;
    console.log('this is the user', user);
    return (
      <div className='profile-container'>
        <div className='profile-header'>
          <h2>id page</h2>
        </div>
        <div className ='profile-logo-container'>
          <Logo />
        </div>
        <div className='profile-image-container'>
          <Image source={user.photoURL} />
        </div>
        <div className='user-info-container'>
          <h2>{user.displayName}</h2>
        </div>
      </div>
    )
  }
}

export default ProfilePage;
