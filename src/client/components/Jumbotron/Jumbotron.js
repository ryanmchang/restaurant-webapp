import React, { Component } from 'react';
//import background from '../../assets/pictures/jumbotron.png';
import {parallax} from '../../utilities/Helpers.js';

export default class Jumbotron extends Component {

  componentDidMount() {
    var self = this;
    window.onscroll = function() {
      parallax(".jumbotron__title", 15, "Y");
    }
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="jumbotron__text-container">
          <h1 className="jumbotron__title">Nasty Burger</h1>
        </div>
      </div>
    );
  }
}
