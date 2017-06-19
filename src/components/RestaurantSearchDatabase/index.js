import React from 'react';
import {Link} from 'react-router';
import Images from '../Images';

import './index.css';

import restaurants from '../../utils/RestaurantDB.js';
import places from '../../utils/placesdatatemplate.js';


class RestaurantDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RestaurantArray : restaurants,
      resultArray: []
    }
  }

  searchAlgorithim = (searchTerm) => {
    //initalize an empty array to take valid search matches
    var resultArray = [];

    this.state.RestaurantArray.forEach((restaurant) => {
      //Is it the restaurant name -- case insensitive
      if (searchTerm.toUpperCase() == restaurant.name.toUpperCase()) {
        resultArray.push(restaurant);
      }

      //Check if the search matches a tag
      restaurant.tags.forEach((tag) => {
        if (searchTerm.toUpperCase() == tag.toUpperCase()) {
          resultArray.push(restaurant)
        }
      }

    )})

    if (resultArray == 0) {
      console.log("Sorry. No matches!")
    }
    else {
      this.setState (
        {resultArray: resultArray}
      )
    //  return resultArray;
    }
  }

  componentWillMount = () => {
      this.searchAlgorithim(this.props.params.searchQuery);
  }

  componentWillReceiveProps = (nextProps) => {
    this.searchAlgorithim(nextProps.params.searchQuery);
  }

/*
  render () {
    return (
      <div className="search-restaurant-container">
        {this.state.RestaurantArray.map(function(restaurant, i) {
         return (
           <div key={restaurant.name} className="search-image-info-container">
             <div className='search-image-container'>
               <Images key={i} source={restaurant.imageUrl}/>
             </div>
             <div className='search-text-container'>
               <p className='search-text' key={restaurant.description}>{restaurant.description}</p>
             </div>
          </div>
          )
       })}
      </div>
    )} */

    // render () {
    //   console.log(this.props)
    //   return <div></div>
    // }


    render() {
      return (
        <div className="search-restaurant-container">
          {this.state.resultArray.map(function(restaurant, i) {
           return (
             <div key={restaurant.name} className="search-image-info-container">
               <div className='search-image-container'> <Link to={`/venue/${restaurant.name}`}>
                 <Images key={i} source={restaurant.imageUrl}/>
                 </Link>
               </div>
               <div className='search-text-container'>
                 <h2 className='search-text-header' key={restaurant.name}>{restaurant.name}</h2>
                 <p className='search-text' key={restaurant.description}>{restaurant.description}</p>
               </div>
            </div>
            )
         })}
        </div>
      )}


/*
    render() {
      return (
      <div>
        <div className="search-image-info-container">
            <Images source={this.state.RestaurantArray[0].imageUrl} />
            <p>{this.state.RestaurantArray[0].description} </p>
        </div>
        <div className="search-image-info-container">
            <Images source={this.state.RestaurantArray[1].imageUrl} />
            <p>{this.state.RestaurantArray[1].description} </p>
        </div>
      </div>

      )} */
}

export default RestaurantDatabase;
