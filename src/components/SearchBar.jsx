import React from 'react'
import {Link, browserHistory} from 'react-router';

import restaurants from '../utils/RestaurantDB.js';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      RestaurantArray: restaurants,
      results: [],
      searchQuery: ""
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

    //Run through array once to remove duplicates (But not necessary because full name is longer than tag)
  /*  for (var i = 1; i<resultArray.length; i++) {
      if (resultArray[i-1] == resultArray[i]) {
        resultArray.splice(i, 1)
      }
    } */

    if (resultArray == 0) {
      console.log("Sorry. No matches!")
    }
    else {
      console.log(resultArray)
    /*  this.setState (
        results: results.concat(resultArray)
      )
      console.log('results' + results); */

    }
  };

  handleClick = () => {
    var input = this.refs.searchBarInput.value;
    this.setState ({
      searchQuery: input
    }, () => {
      browserHistory.push(`/search/${this.state.searchQuery}`)
    })
  //   console.log(this.state.searchQuery);
  //  this.searchAlgorithim (input);
  };

  render () {
    return (
      <div className='searchbar-container'>
        <input className='searchbar' type='text' ref="searchBarInput" placeholder='Search Away!'></input>
        <button onClick={this.handleClick}>  Click me! </button>
      </div>
    )}
}

export default SearchBar;
