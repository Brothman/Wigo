import React from 'react'

//we're going to have an array of Images
//Let's map over them and render all the tags

class Images extends React.Component {
  //Temporary
  //var imageArray = [<img src={Museum} />];


  render () {
    return <img className ="tag" src={this.props.source} />;
  }
}

export default Images;
