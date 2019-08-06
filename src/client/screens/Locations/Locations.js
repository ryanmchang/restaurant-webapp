import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.js';
import Footer from '../../components/Footer/Footer.js';
import LocationItem from '../../components/LocationItem/LocationItem.js';

export default class OurStory extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="location-container">
        <CustomNavbar backgroundOn={true}/>
        <div className="location-content-main">
          <h1 className="header">Locations</h1>
          <div className="location-grid">
            <LocationItem
              city="Whittier"
              address="13815 Whittier Blvd. Whittier, CA 90605"
              phoneNumber="(562) 781-5125"
              email="whittier@grubburgerbar.com"
            />
            <LocationItem
              city="Whittier"
              address="13815 Whittier Blvd. Whittier, CA 90605"
              phoneNumber="(562) 781-5125"
              email="whittier@grubburgerbar.com"
            />
            <LocationItem
              city="Whittier"
              address="13815 Whittier Blvd. Whittier, CA 90605"
              phoneNumber="(562) 781-5125"
              email="whittier@grubburgerbar.com"
            />
            <LocationItem
              city="Whittier"
              address="13815 Whittier Blvd. Whittier, CA 90605"
              phoneNumber="(562) 781-5125"
              email="whittier@grubburgerbar.com"
            />
          </div>

        </div>
        <Footer/>
      </div>
    );
  }
}
