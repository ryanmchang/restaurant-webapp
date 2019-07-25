import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.js';
import MenuItem from '../../components/MenuItem/MenuItem.js';
import Footer from '../../components/Footer/Footer.js';


export default class OurStory extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="menu-container">
        <CustomNavbar backgroundOn={true}/>
        <h1 className="header">Menu</h1>
        <div className="menu-items-container">
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
        <Footer/>
      </div>
    );
  }
}
