import React, { Component } from 'react';
import './app.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      header: "upload a picture!",
      footer: "write some meme text!",
      color: "red",
      font: 'Helvetica',
      background: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/A_blank_flag.png'
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
    const { header, footer, color, font, background } = this.state;

    return (
      <main id="main">
        <header>
          <h1>Meme Generator</h1>
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
        
        <figure>
          <img src={background}/>
          <figcaption 
            style={{
            fontFamily: `${font}`
            }} 
            id="header">{header}</figcaption>
          <figcaption 
            style={{
            fontFamily: `${font}`
            }} 
            id="footer">{footer}</figcaption>
        </figure>
      </main>
    
    );
  }
}