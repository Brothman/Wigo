import React from 'react'
import {Link, browserHistory} from 'react-router';

import restaurants from '../../utils/RestaurantDB.js';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchQuery: ""
    }
  }

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

  handleKeyPress = (event) => {
    if(event.key=='Enter'){
      console.log('enter key pressed')
      var input = this.refs.searchBarInput.value;
      this.setState({
        searchQuery: input
      }, () => {
        browserHistory.push(`/search/${this.state.searchQuery}`)
      })
  }
}


  render () {
    return (
      <div className='searchbar-container'>
        <input className='searchbar' type='text' ref="searchBarInput" placeholder='Search Away!' onKeyPress={this.handleKeyPress}></input>
        <button onClick={this.handleClick}>  Click me! </button>
      </div>
    )}
}

export default SearchBar;
