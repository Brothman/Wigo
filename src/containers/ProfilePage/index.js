import React from 'react';
import {firebaseApp} from '../../utils/firebase.js'
import './index.css'
import Image from '../../components/Images';
import ProfileLogo from '../../components/ProfileLogo'


class ProfilePage  extends React.Component {

  render () {
    return (
      <div className='profile-container'>
        <div className='profile-header'>
          <h2>id page</h2>
        </div>
        <div className ='profile-logo-container'>
          <ProfileLogo />
        </div>
        <div className='profile-image-container'>
          { this.props.user ? <Image source={this.props.user.photoURL} /> : null }
        </div>
        <div className='user-info-container'>
          {this.props.user ? <h2>{this.props.user.displayName}</h2>: null}
        </div>
      </div>
    )
  }
}

export default ProfilePage;
