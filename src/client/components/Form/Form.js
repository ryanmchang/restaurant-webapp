import React, { Component } from 'react';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      topic: '',
      message: '',
    }
  }

  componentDidMount() {
  }

  handleSubmit = () => {
    alert("Name: " + this.state.name + '\n' +
          "Email: " + this.state.email + '\n' +
          "Topic: " + this.state.topic + '\n' +
          "Message: " + this.state.message);
  }

  handleNameChange = (e) => {
    this.setState( {name: e.target.value});
  }
  handleEmailChange = (e) => {
    this.setState( {email: e.target.value});
  }
  handleTopicChange = (e) => {
    this.setState( {topic: e.target.value});
  }
  handleMessageChange = (e) => {
    this.setState( {message: e.target.value});
  }

  render() {
    return (
      <form className="form-container">
        <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
        <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
        <input type="text" placeholder="Topic" value={this.state.topic} onChange={this.handleTopicChange}/>
        <textarea type="text" placeholder="Message" value={this.state.message} onChange={this.handleMessageChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}
