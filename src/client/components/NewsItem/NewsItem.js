import React, { Component } from 'react';

export default class NewsItem extends Component {

  componentDidMount() {
    // const container = document.querySelector(".news-container");
    // container.style.backgroundImage = "url(/src/client/assets/pictures/" + this.props.image + ")";
  }

  render() {
    const bgStyle = {
      backgroundImage: `url(${this.props.image})`,
    }
    return (
      <div className="news-container" style={bgStyle}>
        <span className="news__overlay">
          <h1 className="news__title">{this.props.title}</h1>
        </span>
      </div>
    );
  }
}
