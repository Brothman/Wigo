import React from 'react';
import Logo from '../../components/Logo';
import ImageDatabase from '../../components/ImageDatabase';
//import ImageGalleryHolder from '../../components/ImageGalleryHolder';
import AboutUs from '../../components/AboutUs';
import {loginWithProvider} from '../../utils/auth';
import requireAuth from '../../utils/authenticated';

import './index.css';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
/*
  getData = () => {
    base.fetch ('Activities', {
      context: this,
      asArray: true,
      then(data) {
        console.log(data);
      }
    });
  }*/

  authenticateUser = () => {
    //if not signed in, sign in.
    if (!requireAuth) {
    loginWithProvider('facebook')
      .then((data) => {
        console.log('facebook data', data)
      })
  }
  else {
    alert ('Youre logged in');
  }
}

  componentWillMount = () => {
    //this.getData();
    //console.log('base ', firebase);
    //console.log('app', app)
  //  this.authenticateUser();
  }


  render () {
    return (
      <div className='total-container'>
        <div className="body-container">
           <Logo />
           <div className="body">
             <ImageDatabase />
           </div>
        </div>
          <AboutUs />
        <button onClick={this.authenticateUser}> Hello </button>
      </div>
      )

  }
}

export default MainPage;

//scrapped for time being
//<ImageGalleryHolder />
