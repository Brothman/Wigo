import React from 'react'
import Images from '../Images';
import Museum from '../../Images/Museum.png';
import Bars from '../../Images/Museum.png';
import Food from '../../Images/Food.png';
import Outdoors from '../../Images/Outdoors.png';
import './index.css';

class ImageDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images : [Museum, Bars, Food, Outdoors]
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
