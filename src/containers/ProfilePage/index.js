import React from 'react';
import {firebaseApp} from '../../utils/firebase.js'
import './index.css'
import Logo from '../../components/Logo';
import Image from '../../components/Images';


class ProfilePage  extends React.Component {

  render () {
    return (
      <div className='profile-container'>
        <div className ='profile-logo-container'>
          <Logo />
        </div>
        <div className='profile-image-container'>
          { this.props.user ? <Image source={this.props.user.photoURL} /> : null }
        </div>
        <div className='user-info-container'>
          {this.props.user ? <h2>{this.props.user.displayName}</h2>: null}
          <h2> Wigo </h2>
        </div>
      </div>
    )
  }
}

export default ProfilePage;
