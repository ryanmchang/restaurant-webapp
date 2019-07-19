import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.js';
import MenuItem from '../../components/MenuItem/MenuItem.js';
import NewsItem from '../../components/NewsItem/NewsItem.js';
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

export default class Home extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
        <CustomNavbar/>
        <Jumbotron/>
        <div className="section breakdown-section">
          <h1 className="section__header breakdown__header">The Breakdown</h1>
          <div className="breakdown__block-container">
            <div className="breakdown__block">
              <img src={meat} className="breakdown-icon"/>
              <div className="breakdown__text-block">
                <h1>Meats</h1>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              </div>
            </div>
            <div className="breakdown__block">
              <img src={topping} className="breakdown-icon"/>
              <div className="breakdown__text-block">
                <h1>Toppings</h1>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              </div>
            </div>
            <div className="breakdown__block">
              <img src={sauce} className="breakdown-icon"/>
              <div className="breakdown__text-block">
                <h1>Sauces</h1>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              </div>
          </div>
          </div>
        </div>
        <div className="section story-section">
          <img src={restaurantInterior} alt="" className="burger-img"/>
          <div className="story__text-container">
            <h1 className="section__header">Our Story</h1>
            <p className="description story__description">Burgers were meant to be made as petite afternoon snack - SAID NO ONE EVER! We here at Nasty Burger believe that burgers in their truest form are meaty, fatty, greasy, creations sent from the heavens above. Yup, this ain’t The French Laundry but it tastes pretty damn good! Bring your appetite when coming to Nasty Burger because we definitely don’t skimp on portions. Oh, and don’t worry about making a mess while you eat because it’s bound to happen. </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="section menu-section">
          <h1 className="section__header menu__header">Menu</h1>
          <div className="menu-container">
            <div className="menu__column">
              <h1 className="menu__section-title">Burgers</h1>
              <MenuItem
                title="The OG"
                price="8.5"
                description="Dry aged angus beef on a brioche bun, red onion, butter lettuce, signature fire sauce" />
              <MenuItem
                title="The OG"
                price="8.5"
                description="Dry aged angus beef on a brioche bun, red onion, butter lettuce, signature fire sauce" />
              <MenuItem
                title="The OG"
                price="8.5"
                description="Dry aged angus beef on a brioche bun, red onion, butter lettuce, signature fire sauce" />
              <MenuItem
                title="The OG"
                price="8.5"
                description="Dry aged angus beef on a brioche bun, red onion, butter lettuce, signature fire sauce" />
              <MenuItem
                title="The OG"
                price="8.5"
                description="Dry aged angus beef on a brioche bun, red onion, butter lettuce, signature fire sauce" />
            </div>
            <div className="menu__column">
              <h1 className="menu__section-title">Sides</h1>
              <MenuItem title="Fries" price="1.5"/>
              <MenuItem title="Corn on the cob" price="1.5"/>
              <MenuItem title="Mac n cheese" price="1.5"/>
              <MenuItem title="Tater tots" price="1.5"/>
              <MenuItem title="Onion rings" price="1.5"/>
              <h1 className="menu__section-title">Drinks</h1>
              <MenuItem title="Cooler" price="1.5"/>
              <MenuItem title="House malt" price="1.5"/>
              <MenuItem title="Lemonade" price="1.5"/>
              <MenuItem title="Mango lemonade" price="1.5"/>
            </div>
          </div>

        </div>
        <div className="section info-section">
          <h1 className="section__header">Opening Times</h1>
          <p className="description info__description">Tuesday - Wednesday: 12pm to 11pm</p>
          <p className="description info__description">Thursday – Saturday: 12pm to 12am</p>
          <p className="description info__description">Sunday – Monday: Closed</p>
          <p className="description info__description">HAPPY HOUR</p>
          <p className="description info__description">Tuesday – Saturday: 6pm to 7pm</p>
        </div>
        <div className="section latest-section">
          <h1 className="section__header latest__header">The Latest</h1>
          <div className="news-item-container">
            <NewsItem title="Behind Our Ingredients" image="dough.png"/>
            <NewsItem title="Making a Culture of Excellence" image="serve_burgers.png"/>
            <NewsItem title="Meet Some of the Regulars" image="beers.png"/>
          </div>

        </div>
        <Footer/>
      </div>
    );
  }
}
