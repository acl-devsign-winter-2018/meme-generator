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
      background: 'https://cdn.pixabay.com/photo/2017/01/30/23/51/chair-2022380_960_720.jpg'
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
            <input type="url" onChange={this.HandleUrl} placeholder="Ex:https://something.jpg"/>
          </label>
        </div>

        <label>
              Select a Font:
          <select onChange={this.handleFontChange}>
            <option value="">Select font</option>
            {this.fonts.map((font, index) => (
              <option value={font} key={index}>{font}</option>
            ))}
          </select>
        </label>

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
