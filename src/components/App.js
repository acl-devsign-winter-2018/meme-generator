import React, { Component } from 'react';
import './app.css';
import dom2image from 'dom-to-image';
import fileSave from 'file-saver';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      header: "upload a picture!",
      footer: "write some text!",
      color: "red",
      size: "1rem",
      font: 'Helvetica',
      background: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/A_blank_flag.png'
    }
    
    this.fonts = ['Helvetica', 'Arial', 'Times', 'Courier', 'Tahoma', 'Garamond', 'Impact']

    this.sizes = ['.5rem', '1rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '2.5rem', '3rem']

    this.handleFontChange = this.handleFontChange.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.handleHeader = this.handleHeader.bind(this);
    this.handleFooter = this.handleFooter.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  handleFontChange({target}) {
    this.setState({
      font: target.value || 'Helvetica'
    })
  }

  handleSizeChange({target}) {
    this.setState({
      size: target.value || '1rem'
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
    target.value = "";
  }

  handleUrl({target}) {
    this.setState({
      background: target.value
    });
    target.value = "";
  }

  handleHeader({target}) {
    this.setState({
      header: target.value
    });
  }

  handleFooter({target}) {
    this.setState({
      footer: target.value
    });
  }

  handleColor({target}) {
    this.setState({
      color: target.value
    });
  }
  
  render() {
    const { header, footer, color, font, background, size } = this.state;

    return (
      <main id="main">
      <header>
        <h1>Meme Generator</h1>
      </header>
        <div id="grid">
          <div id="label-holder">
            <label>
              Upload an image:
              <input type="file" onChange={this.handleUpload}/>
            </label>
            <label>
              Input URL:
              <input type="url" onChange={this.handleUrl} placeholder="Ex: https://backgroundimage.jpg"/>
            </label>
            <label>
              Edit Header:
              <input type="text" onChange={this.handleHeader} placeholder="upload a picture!"/>
            </label>
            <label>
              Edit Footer:
              <input type="text" onChange={this.handleFooter} placeholder="write some text!"/>
            </label>
            <label>
              Change Font Color:
              <input id="color" type="color" onChange={this.handleColor}/>
            </label>
            <label>
              Select a Font:
                <select onChange={this.handleFontChange}>
                  <option value="">Select font</option>
                  {this.fonts.map((font, index) => (
                    <option value={font} key={index}>{font}</option>
                  ))}
                </select>
            </label>
            <label>
              Select a Font-Size:
                <select onChange={this.handleSizeChange}>
                  <option value="">Select size</option>
                  {this.sizes.map((size, index) => (
                    <option value={size} key={index}>{size}</option>
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
              fontFamily: `${font}`,
              color: `${color}`,
              fontSize: `${size}`
              }} 
              id="header"
              >{header}</figcaption>
            <figcaption 
              style={{
              fontFamily: `${font}`,
              color: `${color}`,
              fontSize: `${size}`
              }} 
              id="footer"
              >{footer}</figcaption>
          </figure>
        </div>
        <button onClick={this.handleExport}>Save Meme</button>
        <footer id="footer">
        <ul>
          <li>
              <a href="https://github.com/Theartbug" target="_blank" rel="noopener noreferrer">
                  <span className="fa fa-github fa-3x"></span>
                  <span className="clip">Github</span>
              </a>
          </li>
          <li>
              <a href="https://www.linkedin.com/in/graceprovost/" target="_blank" rel="noopener noreferrer">
                  <span className="fa fa-linkedin fa-3x"></span>
                  <span className="clip">LinkedIn</span>
              </a>
          </li>
          <li>
              <a href="mailto:grace.g.provost@gmail.com">
                  <span className="fa fa-envelope-square fa-3x"></span>
                  <span className="clip">Email</span>
              </a>
          </li>
        </ul>
        <small>&copy; 2018 Grace Provost | Student Work</small>
      </footer>
      </main>
    );
  }
}