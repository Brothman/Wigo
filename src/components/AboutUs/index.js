import React from 'react';
import FontAwesome from 'react-fontawesome';
import AboutUsImage from '../AboutUsImage';
import $ from 'jquery';

import './index.css';

class AboutUs extends React.Component {
handleClick = () => {
  $("html, body").animate({ scrollTop: 0 }, "slow");
}

  render () {
    return (


  /*      <FontAwesome
          className='super-crazy-colors'
          name='arrow-left'
          size='2x'
          spin
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        /> */
        <div className="about-container-with-image">
          <div className='about-container-text'>
          <div className='header-about-container'>
            <h2 className='header-about'>About Us</h2>
          </div>
          <div className='fontawesome-container'>
            <FontAwesome className='arrow' name='arrow-down' />
          </div>
          <div className='about-description'>
            <h2 className='header-live'> Live the Perfect Day Everyday</h2>
            <p className ='text-live'> The MVP for Wigo is LIVE!</p>
            <p className ='text-live'> We are solution from and for iXperience students</p>
            <p className ='text-live'> Wigo has two primary functionalities: </p>
            <ol className ='ordered-text-live'>
              <li>Shows the best events and venues for YOU </li>
              <li>Provides YOU with DISCOUNTS -- Wigo Makes Summer Affordable</li>
            </ol>
          </div>
          <div className='fontawesome-container'>
            <FontAwesome onClick={this.handleClick} className='arrow' name='arrow-up' />
          </div>
          <div className='header-start-container'>
            <h2 className='header-start'>Start Your Adventure</h2>
          </div>
          </div>
          <AboutUsImage />
        </div>
    )

  }
}

export default AboutUs;
