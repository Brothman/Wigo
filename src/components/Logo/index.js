import React from 'react';
import LogoPNG from '../../Images/Logo.png';
import './index.css'

class Logo extends React.Component {
  render () {
    return (
      <div className='logo-container'>
        <img className='logo' src={LogoPNG} />
      </div>
    )};
}

export default Logo;
