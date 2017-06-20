import React from 'react'
import './index.css';

class RestaurantBoringInfo extends React.Component {
  //Temporary
  //var imageArray = [<img src={Museum} />];


  render () {
    const {info} = this.props
    return (
      <div className='Info-Container'>
         <p className='text'>Website: <a className='website-link' href={info.website} target='_blank'> {info.website}</a></p>
        <p className='text'>Phone: {info.contact}</p>
      </div>
    )
  }
}

export default RestaurantBoringInfo;

// {/* <p>{info.website}</p>
// <p>Phone: {info.contact}</p> */}
