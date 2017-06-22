
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import MainPage from './containers/MainPage';

import SearchPage from './containers/SearchPage';
import VenuePage from './containers/VenuePage';
import ProfilePage from './containers/ProfilePage';
import LandingPage from './containers/LandingPage';
import {requireAuth} from './utils/auth'

/*
Rendering a router will output the right component tree based on the current URL.
Nested routes' components will be passed down to the parent as `this.props.children`

If the URL is /, then <App/> will be rendered, and this.props.children will be <Search/> (this is the IndexRoute)
If the URL is /user/ziad-saab then <App/> will be rendered, and this.props.children will be <User/>
The <User/> instance will be passed a prop called `params`. It will be an object with `{username: 'ziad-saab'}`
*/

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="/home" component={MainPage} onEnter={requireAuth} />
      <Route path="/venue/:venue" component={VenuePage} onEnter={requireAuth} />
      <Route path="/search/:searchQuery" component={SearchPage} onEnter={requireAuth} />
      <Route path="/profile" component={ProfilePage} onEnter={requireAuth} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
