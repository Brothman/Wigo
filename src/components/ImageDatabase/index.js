import React from 'react'
import Images from '../Images';
import Nightlife from '../../Images/Nightlife.png';
import Outdoors from '../../Images/Outdoors.png';
import Thrill from '../../Images/Thrill.png';
import ArtAndMuseums from '../../Images/ArtAndMuseums.png';
import Animals from '../../Images/Animals.png';
import EatingOut from '../../Images/EatingOut.png';
import Fitness from '../../Images/Fitness.jpg';
import './index.css';

class ImageDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images : [Nightlife, Outdoors, Thrill, ArtAndMuseums, Animals, EatingOut, Fitness]
    }
  }

  render () {
    return (
      <div className="tags-container" >
        {this.state.images.map(function(image, i) {
         return (
           <div className='tag-container'>
              <Images key={i} source={image}/>
           </div>
         )})}
      </div>
    )}
}

export default ImageDatabase;

/*{this.state.images.map(function(image, i) {
 return <Images key={i} source={image}/>
})}*/

//style={{backgroundImage: url(this.props.imageURL)}}
