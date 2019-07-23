import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home.js';
import OurStory from './screens/OurStory/OurStory.js';
import Menu from './screens/Menu/Menu.js';
import Locations from './screens/Locations/Locations.js';
import ContactUs from './screens/ContactUs/ContactUs.js';

const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  );
}

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/our-story' component={OurStory} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/locations' component={Locations} />
          <Route exact path='/contact-us' component={ContactUs} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
