import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class LocationItem extends Component {

  componentDidMount() {
  }

  render() {
    return (

      <div className="location-item">
        <h1>{this.props.city}</h1>
        <p>{this.props.address}
           <br/>{this.props.phoneNumber}
           <br/>{this.props.email}
        </p>
      </div>

    );
  }
}

LocationItem.propTypes = {
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}
