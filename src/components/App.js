import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSave from 'file-saver';
import './App.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      header: 'Add a picture',
      footer: 'give us something funny',
      font: 'Arial',
      background: 'data:image/jpeg;base64,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'
    };

    this.fonts = ['Arial', 'Helvetica', 'Times', 'Tahoma', 'Garamond', 'Courier', 'Impact'];

    this.handleFontChange = this.handleFontChange.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleURL = this.handleURL.bind(this);
    this.handleHeader = this.handleHeader.bind(this);
    this.handleFooter = this.handleFooter.bind(this);
    this.handleBackground = this.handleBackground.bind(this);
  }


  handleFontChange({ target }) {
    this.setState({
      font: target.value || 'Arial'
    });
  }

  handleURL({ target }) {
    this.setState({ 
      background: target.value 
    });
    target.value = '';
  }

  handleExport() {
    dom2image.toBlob(this.figure).then(blob => {
      fileSave.saveAs(blob, 'generated-meme.jpg');
    });
  }

  handleUpload({ target }) {
    const reader = new FileReader();

    reader.readAsDataURL(target.files[0]);

    reader.onLoad = () => {
      this.setState({ image: reader.result });
    };
  }


  handleHeader({ target }) {
    this.setState({
      header: target.value
    });
  }

  handleFooter({ target }) {
    this.setState({
      footer: target.value
    });
  }

  handleBackground({ target }) {
    this.setState({
      background: target.value
    });
  }




  render() {
    const { header, footer, font, background } = this.state;

    return (
      <main id="main">
        
        <header id="header">
          <h1>Generate Random Meme</h1>
        </header>
        <div id="content">

          <label>
            Image 
            <input name="url" onChange={this.handleBackground}/>
          </label>
          <label>
            Upload an Image
            <input type="file" onChange={this.handleUpload}/>
          </label>
        </div>
        
        <div id="image-holder">
          <label>
            Url link:
            <input type="url" onChange={this.handleUrl} placeholder="Ex:https://something.jpg" />
          </label>
        </div>

        <label>
          Edit Header:
          <input type="text" onChange={this.handleHeader} placeholder="upload a link" />
        </label>
        <label>
          Edit Footer:
          <input type="text" onChange={this.handleFooter} placeholder="write some text!" />
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
        <figure
          ref={node => this.figure = node}>
          <img src={background}/>
          <figcaption 
            style={{
              fontFamily: `${font}`,
            }} 
            id="header"
          >{header}</figcaption>
          <figcaption 
            style={{
              fontFamily: `${font}`,
              
            }} 
            id="footer"
          >{footer}</figcaption>
        </figure>

        <div>
          <button id="export" onClick={this.handleExport}>Save Meme</button>
        </div>

        <footer id="footer">
          <small>&copy; 2018 Jenny Elton ACL </small>
        </footer>

      </main>
      
    );

  }
}
