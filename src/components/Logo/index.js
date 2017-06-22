import React from 'react';
import { Link } from 'react-router';
import LogoPNG from '../../Images/Logo.png';
import './index.css'

class Logo extends React.Component {
  render () {
    return (
      <div className='logo-container'>
        <Link to="/"><img className='logo' src={LogoPNG}/></Link>
      </div>
    )};
}

export default Logo;
