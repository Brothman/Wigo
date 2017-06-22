import React from 'react';
import ImageGallery from 'react-image-gallery';
import Fancy from '../../Images/Fancy.png';
import Animals from '../../Images/Animals.png';
import Fitness from '../../Images/Fitness.jpg';
import Logo from '../../Images/Logo.png';
import './index.css'
import "react-image-gallery/styles/css/image-gallery.css";

class ImageGalleryHolder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [Fancy, Animals, Fitness, Logo]
    }
  }


    render() {

        const images = [
          {
            original: Logo,
            thumbnail: Logo,
            sizes: 1000
          },
          {
            original: Fitness,
            thumbnail: Fitness
          },
          {
            original: Animals,
            thumbnail: Animals
          },
          {
            original: Fancy,
            thumbnail: Fancy
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
