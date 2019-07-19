import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import logo from '../../assets/icons/restaurant_icon.png';
import hamburgerLight from '../../assets/icons/hamburger_menu_light.png';
import hamburgerDark from '../../assets/icons/hamburger_menu_dark.png';

export default class CustomNavbar extends Component {

  componentDidMount() {
  }

  noScroll = () => {
    window.scrollTo(0, 0);
  }

  expandNav = () => {
    let nav = document.querySelector('.expanded');

    //hide navigation
    if (nav.style.display === "block") {
      nav.style.display = "none";
      document.documentElement.style.overflow = 'auto';
      document.body.scroll = "yes"; // ie only
    } else {
      nav.style.display = "block";
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = "no"; // ie only
    }
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar__top">
          <img className="hamburger-menu-icon"
               src={hamburgerLight}
               onClick={this.expandNav}
          />
          <Link to="/our-story" className="nav-item">OUR STORY</Link>
          <a href="" className="nav-item">MENU</a>
          <img src={logo} className="restaurant-icon"/>
          <a href="" className="nav-item">LOCATION</a>
          <a href="" className="nav-item">CONTACT US</a>
        </div>
        <div className="expanded">
          <a href="" className="expanded__item">OUR STORY</a>
          <a href="" className="expanded__item">MENU</a>
          <a href="" className="expanded__item">LOCATION</a>
          <a href="" className="expanded__item">CONTACT US</a>
        </div>
      </div>
    );
  }
}
