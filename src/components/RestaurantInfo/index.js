import React from 'react'
import './index.css';

//we're going to have an array of Images
//Let's map over them and render all the tags

class RestaurantInfo extends React.Component {
  //Temporary
  //var imageArray = [<img src={Museum} />];


  render () {
    const {info} = this.props
    return (
      <div className='Info-Container'>
        <h2 className='venue-header'>{info.name}</h2>
        <p> <span className='text-title'>Uber Time: </span> {info.uberTime}</p>
        <p> <span className='text-title'>Address: </span>{info.address}</p>
        <p> <span className='text-title'>Today's Hours: </span> {info.todaysHours}</p>
        <p> <span className='text-title'>Recommended Hours: </span> {info.recommendedHours}</p>
        <p> <span className='text-title'>Price: </span> {info.price} </p>
        <p> <span className='text-title'>Description: </span>{info.description}</p>
      </div>
    )
  }
}

export default RestaurantInfo;

// {/* <p>{info.website}</p>
// <p>Phone: {info.contact}</p> */}

  // <p>Address: {info.address}</p>
  // <p>Today's Hours: {info.todaysHours}</p>
  // <p>Recommended Hours: {info.recommendedHours}</p>
  // <p>Price: {info.price}</p>
  // <p>Description: {info.description}</p>
