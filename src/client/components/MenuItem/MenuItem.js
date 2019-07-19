import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class MenuItem extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="menu-item">
        <div className="item__row1">
          <p className="item__title item__text">{this.props.title}</p>
          <p className="item__price item__text">{this.props.price}</p>
        </div>
        <div className="item__row2">
          <p className="item__description  item__text">{this.props.description}</p>
        </div>
      </div>

    );
  }
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}
