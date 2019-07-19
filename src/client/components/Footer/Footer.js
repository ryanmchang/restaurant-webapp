import React, { Component } from 'react';

import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';

export default class Footer extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="footer">
        <div className="social-media-container">
          <img src={instagram} alt="" className="social-media-icon"/>
          <img src={twitter} alt="" className="social-media-icon"/>
          <img src={facebook} alt="" className="social-media-icon"/>
        </div>
        <p className="footer__text">
          North Lamar • Dine-in & Take-out
          (512) 386-1908 • 6519 North Lamar 78752
        </p>
        <p className="footer__text">
          South Lamar • Take-out
          (512) 394-6350 • 3005 South Lamar D-114B 78704
        </p>
      </div>
    );
  }
}
