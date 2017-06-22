import React from 'react'
import Images from '../Images';
import Nightlife from '../../Images/Nightlife.png';
import Outdoors from '../../Images/Outdoors.png';
import Discount from '../../Images/Discount.png';

import {Link} from 'react-router';
import './index.css';

class ImageDatabase2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images : [
        {
          url: Nightlife,
          label: 'Nightlife'
        },
        {
          url: Outdoors,
          label: 'Outdoors'
        },
        {
          url: Discount,
          label: 'Discounts'
        }]

    }
  }

  render () {
    return (
      <div className="tags-container2" >
        {this.state.images.map(function(image, i) {
         return (
           <div className='tag-container2'>
             <Link to={`/search/${image.label}`}>
             <div className='image-label2'>{image.label}</div>
             <Images key={i} source={image.url}></Images>
             </Link>
           </div>
         )})}
      </div>
    )}
}
//<Link to={`/search/${image.label}`/}>
export default ImageDatabase2;

/*{this.state.images.map(function(image, i) {
 return <Images key={i} source={image}/>
})}*/

//style={{backgroundImage: url(this.props.imageURL)}}
