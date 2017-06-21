import React from 'react'
import Logo from '../../components/Logo';
import RestaurantDatabase from '../../components/RestaurantDatabase';
import './index.css';

class VenuePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { }
  }

  render () {
    return (
        <div className="body-container">
          <div className="venue-logo">
           <Logo />
           </div>
           <div className="body">
             <RestaurantDatabase />
           </div>
        </div>
      )
  }
}

export default VenuePage;
