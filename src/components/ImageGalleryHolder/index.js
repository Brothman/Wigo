import React from 'react';
import ImageGallery from 'react-image-gallery';
import Para from '../../Images/Para.jpg';
import Oysters from '../../Images/Oysters.jpg';
import Drinks from '../../Images/Drinks.jpg';
import Fish from '../../Images/Fish.jpg';
import './index.css'
import "react-image-gallery/styles/css/image-gallery.css";

class ImageGalleryHolder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [Para, Oysters, Drinks, Fish]
    }
  }


    render() {

        const images = [
          {
            original: Para,
            thumbnail: Para,
            sizes: 1000
          },
          {
            original: Oysters,
            thumbnail: Oysters
          },
          {
            original: Drinks,
            thumbnail: Drinks
          },
          {
            original: Fish,
            thumbnail: Fish
         }
        ]

        return (
            <ImageGallery
              items={images}
              slideInterval={3000}
              onImageLoad={this.handleImageLoad}
              showBullets={true}
              showNav={false}
              showFullscreenButton={false}
              autoPlay={true}/>
        );
      }

    }

export default ImageGalleryHolder;
