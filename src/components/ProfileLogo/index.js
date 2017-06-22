import React from 'react';
import { Link } from 'react-router';
import './index.css'

class ProfileLogo extends React.Component {
  render () {
    return (
      <div className='profile-container'>
        <Link to="/profile"><img className='ProfileLogo' src="https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png"/></Link>
      </div>
    )};
}

export default ProfileLogo;
