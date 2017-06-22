import React from 'react'
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
           <div className="body">
             <RestaurantDatabase params={this.props.params} />
           </div>
        </div>
      )
  }
}

export default VenuePage;
