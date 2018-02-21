import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';
import './App.css';


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'world'
    };
  }

  handleClick() {
    this.setState({ name: 'Seattle' });
  }

  render() {
    const { name } = this.state;

    return (
      <div onClick={() => this.handleClick()}>
        Hello World <span>{name}</span>
      </div>
    );

  }
}
