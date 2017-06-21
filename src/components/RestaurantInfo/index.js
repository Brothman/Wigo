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
          <div className='Info-header'>
        <h2 className='venue-header'>{info.name}</h2>
          </div>
          <div className='Info-text'>
        <p> <span className='text-title'>Description:<br></br> </span>{info.description}</p>
        <p> <span className='text-title'>Price:<br></br> </span> {info.price} </p>
        <p> <span className='text-title'>Today's Hours:<br></br> </span> {info.todaysHours}</p>
        <p> <span className='text-title'>Recommended Hours:<br></br> </span> {info.recommendedHours}</p>
        <p> <span className='text-title'>Address:<br></br> </span>{info.address}</p>
        <p> <span className='text-title'>Uber Time From Camps Bay:<br></br> </span> {info.uberTime}</p>

      </div>
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
