import React from 'react'
//import Images from '../Images';
import Museum from '../../Images/Museum.png';
import './index.css';

class ImageDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      images : [Museum]
    }
  }

  render () {
    return (
      <div className="tag-container" >

      </div>
    )}
}

export default ImageDatabase;

/*{this.state.images.map(function(image, i) {
 return <Images key={i} source={image}/>
})}*/

//style={{backgroundImage: url(this.props.imageURL)}}
