import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.js';
import Footer from '../../components/Footer/Footer.js';

import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';

import burgers from '../../assets/pictures/4burgers.png';
import spices from '../../assets/pictures/spices.png';


export default class OurStory extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="story-container">
        <CustomNavbar backgroundOn={true}/>
        <div className="story-grid">
          <div className="title-description-container" id="story__text1">
            <h1 className="section__header">Our Story</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>
          <img src={spices} className="story__img" id="story__img1"/>
          <img src={burgers} className="story__img" id="story__img2"/>
          <div className="title-description-container" id="story__text2">
            <h1 className="section__header">What our Burgers are About</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
