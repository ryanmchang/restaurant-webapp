import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.js';
import Footer from '../../components/Footer/Footer.js';

export default class OurStory extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="contact-container">
        <CustomNavbar backgroundOn={true}/>
        <h1 className="header">Contact Us</h1>
        <Footer/>
      </div>
    );
  }
}
