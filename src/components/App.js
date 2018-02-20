import React, { Component } from 'react';
import './app.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      header: "upload a picture!",
      footer: "write some meme text!",
      color: "red",
      font: 'Helvetica'
    }
    
    this.fonts = ['Helvetica', 'Arial', 'Times', 'Courier', 'Tahoma', 'Garamond', 'Impact']

    this.handleFontChange = this.handleFontChange.bind(this);
  }

  handleFontChange({target}) {
    this.setState({
      font: target.value || 'Helvetica'
    })
  }
  
  
  render() {
    const { header, footer, color, font } = this.state;

    return (
      <main id="main">
        <header>
          <h1 
          style={{
            fontFamily: `${font}`
          }}>Meme Generator</h1>
        </header>

        <form>
          <label>
            Select a font:
              <select onChange={this.handleFontChange}>
                <option value="">Select font</option>
                {this.fonts.map((font, index) => (
                  <option value={font} key={index}>{font}</option>
                ))}
              </select>
          </label>
        </form>
      </main>
    
    );
  }
}