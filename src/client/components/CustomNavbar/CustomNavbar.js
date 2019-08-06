import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import {withRouter } from 'react-router-dom';

import logo from '../../assets/icons/restaurant_icon.png';
import hamburgerLight from '../../assets/icons/hamburger_menu_light.png';
import hamburgerDark from '../../assets/icons/hamburger_menu_dark.png';


class CustomNavbar extends Component {

  componentDidMount() {
    this.setBackground();

    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes"; // ie only
  }

  setBackground = () => {
    let navTop = document.querySelector(".navbar__top");

    if (this.props.backgroundOn == true) {
      navTop.style.position = 'static';
      navTop.style.backgroundColor = '#606060';
    }
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

  routeHome = () => {
    console.log("Im am press");
    this.props.history.push('/');
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
          <Link to="/menu" className="nav-item">MENU</Link>
          <img src={logo} className="restaurant-icon" onClick={this.routeHome}/>
          <Link to="/locations" className="nav-item">LOCATIONS</Link>
          <Link to="/contact-us" className="nav-item">CONTACT US</Link>
        </div>
        <div className="expanded">
          <Link to="/our-story" className="expanded__item">OUR STORY</Link>
          <Link to="/menu" className="expanded__item">MENU</Link>
          <Link to="/locations" className="expanded__item">LOCATION</Link>
          <Link to="/contact-us" className="expanded__item">CONTACT US</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(CustomNavbar);
