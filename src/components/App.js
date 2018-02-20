import React, { Component } from 'react';
import './app.css';
import dom2image from 'dom-to-image';
import fileSave from 'file-saver';

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
    this.handleExport = this.handleExport.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
  }

  handleFontChange({target}) {
    this.setState({
      font: target.value || 'Helvetica'
    })
  }

  handleExport() {
    dom2image.toBlob(this.figure).then(blob => {
      fileSave.saveAs(blob, 'generated-meme.png');
    });
  }

  handleUpload({target}) {
    const reader = new FileReader();

    reader.readAsDataURL(target.files[0]);
    
    reader.onload = () => {
      this.setState({ background: reader.result });
    };
  }

  handleUrl({target}) {
    this.setState({
      background: target.value
    });
  }
  
  
  render() {
    const { header, footer, color, font, background } = this.state;

    return (
      <main id="main">
        <header>
          <h1>Meme Generator</h1>
        </header>

        <div id="label-holder">
          <label>
            Upload an image:
            <input type="file" onChange={this.handleUpload}/>
          </label>
          <label>
            Input URL:
            <input type="url" onChange={this.handleUrl}/>
          </label>
          <label>
            Select a font:
              <select onChange={this.handleFontChange}>
                <option value="">Select font</option>
                {this.fonts.map((font, index) => (
                  <option value={font} key={index}>{font}</option>
                ))}
              </select>
          </label>
        </div>
        
        <figure
          ref={node => this.figure = node}
        >
          <img src={background}/>
          <figcaption 
            style={{
            fontFamily: `${font}`
            }} 
            id="header"
            >{header}</figcaption>
          <figcaption 
            style={{
            fontFamily: `${font}`
            }} 
            id="footer"
            >{footer}</figcaption>
        </figure>

        <button onClick={this.handleExport}>Save Meme</button>
      </main>
    
    );
  }
}