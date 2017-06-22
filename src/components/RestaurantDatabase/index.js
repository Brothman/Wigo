import React from 'react'
import Images from '../Images';
import RestaurantInfo from '../RestaurantInfo';
import RestaurantBoringInfo from '../RestaurantBoringInfo';

import './index.css';

import restaurants from '../../utils/RestaurantDB.js';
import places from '../../utils/placesdatatemplate.js';
import activities from '../../utils/ActivitiesDataTemplate.js';
import bars from '../../utils/BarsDataTemplate.js';
import clubs from '../../utils/ClubsDataTemplate.js';
import events from '../../utils/EventsDataTemplate.js';
import fitness from '../../utils/Fitness.js';



class RestaurantDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RestaurantArray : restaurants,
      PlacesArray: places,
      ActivitiesArray: activities,
      BarsArray: bars,
      ClubsArray: clubs,
      EventsArray: events,
      FitnessArray: fitness,
      resultArray: []
    }
  }

  //Everything after this is going to be incredibly inefficent code (because it loops), but I have to do it because it'll work and this project needs to go live tomorrow.


    searchAlorithimStateChange = (arrayToLoop, searchTerm) => {
      //Allows us to keep old finds in the resultArray
      var resultArray = this.state.resultArray;
  //  var resultArray = [];

      arrayToLoop.forEach((restaurant) => {
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
          {resultArray: resultArray},
      //    console.log(resultArray)
        )
      //  return resultArray;
      }
    }

    searchAlgorithim = (searchTerm) => {
      this.searchAlorithimStateChange(this.state.RestaurantArray, searchTerm);
      this.searchAlorithimStateChange(this.state.PlacesArray, searchTerm);
      this.searchAlorithimStateChange(this.state.ActivitiesArray, searchTerm);
      this.searchAlorithimStateChange(this.state.BarsArray, searchTerm);
      this.searchAlorithimStateChange(this.state.ClubsArray, searchTerm);
      this.searchAlorithimStateChange(this.state.EventsArray, searchTerm);
      this.searchAlorithimStateChange(this.state.FitnessArray, searchTerm);
    }

    componentWillMount = () => {
      this.searchAlgorithim(this.props.params.venue);
    }


    render() {
      return (
        <div className="restaurant-container">
          <RestaurantInfo info={this.state.resultArray[0]} />
          <div className ="image-info-container">
            <div className ='result-image-container'>
              <Images source={this.state.resultArray[0].imageUrl} />
            </div>
            <RestaurantBoringInfo info={this.state.resultArray[0]} />
          </div>
        </div>
      )}
}

export default RestaurantDatabase;
