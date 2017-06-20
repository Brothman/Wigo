import React from 'react';
import Logo from '../../components/Logo';
import ImageDatabase from '../../components/ImageDatabase';
import ImageGalleryHolder from '../../components/ImageGalleryHolder';
import AboutUs from '../../components/AboutUs';

import './index.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render () {
    return (
      <div className='total-container'>
        <div className="body-container">
           <Logo />
           <div className="body">
             <ImageGalleryHolder />
             <ImageDatabase />
           </div>
        </div>
          <AboutUs />
      </div>
      )

  }
}

export default MainPage;
