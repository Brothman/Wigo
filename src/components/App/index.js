import React from 'react';
import { Link } from 'react-router';
import SearchBar from '../SearchBar';
import FireBaseTools from '../../utils/firebase'
import Logo from '../Logo/index';
import ProfileLogo from '../ProfileLogo'

import {browserHistory} from 'react-router';
import './index.css';
/*
This is the layout component. It's displayed by the top-level Route
this.props.children will correspond to the current URL's component.


*/
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      user: {

      }
    }
  }

//honestly irrelevant now -- the problem with profiles not showing up
//was caused because App does need to re-render since it's a parent component
  componentDidMount() {
    FireBaseTools.fetchUser()
    .then((user) => {
      this.setState({
        user: user
      })
    })
    .catch((e) => {
      FireBaseTools.logoutUser();
      browserHistory.push('/');
    })
  }



  logoutTest() {
     FireBaseTools.logoutUser();
     browserHistory.push('/');
  }

    render() {
        return (
            <div className="main-app">
                <header className="main-header orange-stylized">
                    <h1 className="header-1">The places you want. The prices you can afford.</h1>
                    <SearchBar />
                    <Logo></Logo>
                    <ProfileLogo></ProfileLogo>
                </header>
                <main className="main-content">
                    {React.cloneElement(this.props.children, { user: this.state.user })}
                </main>
                <footer className="main-footer orange-stylized">
                  <h1 className="footer-1"> All the places you'll go with Wigo. </h1>
                </footer>
            </div>
        );
    }
};

//Logout Button Here if I want it:
//<button onClick={this.logoutTest}> logout </button>
//{this.props.children}

export default App;
