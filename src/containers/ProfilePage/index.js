import React from 'react';
import './index.css';

import Image from '../../components/Images';
import FireBaseTools from '../../utils/firebase';
import {browserHistory} from 'react-router';

class ProfilePage  extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

//This works because the only way you're going to be on this page is if you're already logged in
  componentDidMount = () => {
    FireBaseTools.fetchUser()
    .then((user) => {
      this.setState({
        user: user
      })
    })
    .catch((e) => {
      FireBaseTools.logoutUser();
      browserHistory.push('/');
    })
  }

  render () {
    //console.log('user-info',this.state.user)
    return (
      <div className='profile-container'>
        <div className='profile-header'>
          <h2>id page</h2>
        </div>
        <div className='profile-image-container'>
          {this.state.user ? <Image source={this.state.user.photoURL} /> : null }
        </div>
        <div className='user-info-container'>
          {this.state.user ? <h2>{this.state.user.displayName}</h2>: null}
        </div>
      </div>
    )
  }
}

export default ProfilePage;
