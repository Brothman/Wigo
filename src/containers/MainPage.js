import React from 'react';
import Logo from '../components/Logo';
import ImageDatabase from '../components/ImageDatabase';
import ImageGalleryHolder from '../components/ImageGalleryHolder';



class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render () {
    return (
        <div className="body-container">
           <Logo />
           <div className="body">
             <ImageGalleryHolder />
             <ImageDatabase />
           </div>
        </div>
      )

  }
}

export default MainPage;
