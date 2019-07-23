import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.js';
import Footer from '../../components/Footer/Footer.js';

import meat from '../../assets/icons/meat.png';
import sauce from '../../assets/icons/sauce.png';
import topping from '../../assets/icons/topping.png';
import hamburger from '../../assets/pictures/hamburger.png';

import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';

import beers from '../../assets/pictures/beers.png';
import dough from '../../assets/pictures/dough.png';
import serveBurgers from '../../assets/pictures/serve_burgers.png';
import restaurantInterior from '../../assets/pictures/restaurant_interior.png';

export default class OurStory extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="menu-container">
        <CustomNavbar backgroundOn={true}/>
        <h1 className="header">Menu</h1>
        <Footer/>
      </div>
    );
  }
}
