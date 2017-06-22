import React from 'react'
import Images from '../Images';
import RestaurantInfo from '../RestaurantInfo';
import RestaurantBoringInfo from '../RestaurantBoringInfo';

import './index.css';

import restaurants from '../../utils/RestaurantDB.js';


class RestaurantDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RestaurantArray : restaurants
    }
  }

  //gatherVenue = () 

    render() {
      console.log('url', this.props.params);
      return (
        <div className="restaurant-container">
          <RestaurantInfo info={this.state.RestaurantArray[0]} />
          <div className ="image-info-container">
            <div className ='result-image-container'>
              <Images source={this.state.RestaurantArray[0].imageUrl} />
            </div>
            <RestaurantBoringInfo info={this.state.RestaurantArray[0]} />
          </div>
        </div>
      )}
}

export default RestaurantDatabase;
