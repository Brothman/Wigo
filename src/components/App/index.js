import React from 'react';
import { Link } from 'react-router';
import SearchBar from '../SearchBar';

/*
This is the layout component. It's displayed by the top-level Route
this.props.children will correspond to the current URL's component.


*/
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    }
}

    render() {
        return (
            <div className="main-app">
                <header className="main-header orange-stylized">
                    <h1 className="header-1"><Link to="/venue/venue">The places you want. The prices you can afford.</Link></h1>
                    <SearchBar />
                </header>
                <main className="main-content">
                    {this.props.children}
                </main>
                <footer className="main-footer orange-stylized">
                  <h1 className="footer-1"> All the places you'll go with Wigo. </h1>
                </footer>
            </div>
        );
    }
};

export default App;
