import React from 'react'
import Images from '../Images';
import Nightlife from '../../Images/Nightlife.png';
import Outdoors from '../../Images/Outdoors.png';
import Thrill from '../../Images/Thrill.png';
import ArtAndMuseums from '../../Images/ArtAndMuseums.png';
import Animals from '../../Images/Animals.png';
import EatingOut from '../../Images/EatingOut.png';
import Fitness from '../../Images/Fitness.jpg';
import Discount from '../../Images/Discount.png';
import {Link} from 'react-router';
import './index.css';

class ImageDatabase extends React.Component {
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
          url: Thrill,
          label: 'Thrill'
        },
        {
          url: ArtAndMuseums,
          label: 'Art and Museums'
        },
        {
          url: Animals,
          label: "Animals"
        }, {
          url: EatingOut,
          label: 'Eating Out'
        },
        {
          url: Fitness,
          label: 'Fitness'
        },
        {
          url: Discount,
          label: 'Discounts'
        }]

    }
  }

  render () {
    return (
      <div className="tags-container" >
        {this.state.images.map(function(image, i) {
         return (
           <div className='tag-container'>
             <Link to={`/search/${image.label}`}>
             <div className='image-label'>{image.label}</div>
             <Images key={i} source={image.url}></Images>
             </Link>
           </div>
         )})}
      </div>
    )}
}
//<Link to={`/search/${image.label}`/}>
export default ImageDatabase;

/*{this.state.images.map(function(image, i) {
 return <Images key={i} source={image}/>
})}*/

//style={{backgroundImage: url(this.props.imageURL)}}
