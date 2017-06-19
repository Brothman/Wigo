import React from 'react';
import ImageGallery from 'react-image-gallery';
import Bars from '../../Images/Bars.png';
import Animals from '../../Images/Animals.png';
import Surfing from '../../Images/Surfing.png';
import Fancy from '../../Images/Fancy.png';
import './index.css'
import "react-image-gallery/styles/css/image-gallery.css";

class ImageGalleryHolder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [Bars, Animals, Surfing, Fancy]
    }
  }


    render() {

        const images = [
          {
            original: Fancy,
            thumbnail: Fancy,
            sizes: 1000
          },
          {
            original: Surfing,
            thumbnail: Surfing
          },
          {
            original: Animals,
            thumbnail: Animals
          },
          {
            original: Bars,
            thumbnail: Bars
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
