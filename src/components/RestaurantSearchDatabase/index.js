import React from 'react';
import {Link} from 'react-router';
import Images from '../Images';

import './index.css';

import restaurants from '../../utils/RestaurantDB.js';
import places from '../../utils/placesdatatemplate.js';
import activities from '../../utils/ActivitiesDataTemplate.js';
import bars from '../../utils/BarsDataTemplate.js';
import clubs from '../../utils/ClubsDataTemplate.js';
import events from '../../utils/EventsDataTemplate.js';
import fitness from '../../utils/Fitness.js';
import thrill from '../../utils/thrill.js'




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
      ThrillArray: thrill,
      resultArray: []
    }
  }



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

  //Use the Durstenfeld shuffle to randomize search results (Appear to have an Intelligent Database)
   shuffleArray = () => {
     var tempArray = this.state.resultArray;
     //shuffle the result list
    for (var i = tempArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = tempArray[i];
        tempArray[i] = tempArray[j];
        tempArray[j] = temp;
    }
    //set the new state as the suffled results
    this.setState ({resultArray: tempArray});
}

  searchAlgorithim = (searchTerm) => {
    this.searchAlorithimStateChange(this.state.RestaurantArray, searchTerm);
    this.searchAlorithimStateChange(this.state.PlacesArray, searchTerm);
    this.searchAlorithimStateChange(this.state.ActivitiesArray, searchTerm);
    this.searchAlorithimStateChange(this.state.BarsArray, searchTerm);
    this.searchAlorithimStateChange(this.state.ClubsArray, searchTerm);
    this.searchAlorithimStateChange(this.state.EventsArray, searchTerm);
    this.searchAlorithimStateChange(this.state.FitnessArray, searchTerm);
    this.searchAlorithimStateChange(this.state.ThrillArray, searchTerm);
    this.shuffleArray();
  }

/*  addDatabaseInformation = () => {
    firebaseDb.ref('Activities').once('value').then((data) => {
      console.log(data.val());
      console.log(data.val()[0].)
    //  this.setState()
    })
  }*/


  componentWillMount = () => {
    this.searchAlgorithim(this.props.params.searchQuery);
  }


  componentWillReceiveProps = (nextProps) => {
    //call searchAlgorithim once resultArray has been reset for new search
    this.setState ({resultArray: []}, () => {
      this.searchAlgorithim(nextProps.params.searchQuery)})
  }

/* I tried, I really tried. RIP Firebase Database

  changeData = () => {
    var ActivityArray = this.changeDataFunctionality('Activities');
    var EventArray = this.changeDataFunctionality('Events');
    var ExploreArray = this.changeDataFunctionality('Explore');
    var FitnessArray = this.changeDataFunctionality('Fitness');
    var PlacesArray = this.changeDataFunctionality('Places');
    var RestaurantArray = this.changeDataFunctionality('Restaurants');
    this.setState ({
      ActivityArray: ActivityArray,
      EventArray: EventArray,
      ExploreArray: ExploreArray,
      FitnessArray: FitnessArray,
      PlacesArray: PlacesArray,
      RestaurantArray: RestaurantArray
    }, function () {
      //console.log("name please", this.state.ActivityArray['0'])
      //this.searchAlgorithim(this.props.params.searchQuery);
    //  console.log('state', this.state);
    }
      )
  }


   changeDataFunctionality = (tag) => {
     //array to store all the value
     var storageArray = [];

    firebaseDb.ref(tag).once('value').then((data) => {
      var dataValue = data.val();
      //console.log('data.val', dataValue);

      //make an array of all the different places
      for (var key in dataValue) {
        if (dataValue.hasOwnProperty(key)) {
    storageArray.push(dataValue[key]);
  }
  }
    })
    console.log('storageArray', storageArray)
    console.log('storageArray[0]', storageArray[0])
    return storageArray;
  }

*/




    render() {
      console.log(this.state.ActivitiesArray);
      console.log(activities);
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
