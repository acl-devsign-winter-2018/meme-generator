import './App.css';
import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      currentTop: '',
      currentBottom: '',
      colorTop: '#ffffff',
      colorBottom: '#ffffff',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTIxNTIwMDA5MV5BMl5BanBnXkFtZTYwMjMwMTY3._V1_.jpg'
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleInputBottom = this.handleInputBottom.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleColorBottom = this.handleColorBottom.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleExport = this.handleExport.bind(this);
  }

  handleInput({ target }) {
    this.setState({
      currentTop: target.value
    });
  }

  handleInputBottom({ target }) {
    this.setState({
      currentBottom: target.value
    });
  }
  
  handleColor({ target }) {
    this.setState({
      colorTop: target.value
    });
  }

  handleColorBottom({ target }) {
    this.setState({
      colorBottom: target.value
    });
  }

  handleImage({ target }) {
    this.setState({
      image: target.value
    });
  }

  handleUpload({ target }) {
    const reader = new FileReader();

    reader.readAsDataURL(target.files[0]);

    reader.onload = () => {
      this.setState({ image: reader.result });
    };
  }

  handleExport() {
    dom2image.toBlob(this.section).then(blob => {
      fileSaver.saveAs(blob, 'awesome-meme.jpg');
    });
  }

  render() {
    const { currentTop, currentBottom, colorTop, colorBottom, image } = this.state;

    return (
      <div className="app">
      
        <header role="banner" id="header">
          <h1>Meme Generator</h1>
        </header>

        <section role="main" id="main">

          <p>
            <label>
              Top Text: &nbsp;
              <input
                type="text"
                onChange={this.handleInput}
                placeholder='type here'
                value={currentTop}
              />&nbsp;

              Color: &nbsp;
              <input
                type="color"
                onChange={this.handleColor}
                value={colorTop}
              />
            </label>
          </p>

          <p>
            <label>
              Bottom Text: &nbsp;
              <input
                type="text"
                onChange={this.handleInputBottom}
                placeholder='type here'
                value={currentBottom}
              />&nbsp;

              Color: &nbsp;
              <input
                type="color"
                onChange={this.handleColorBottom}
                value={colorBottom}
              />
            </label>
          </p>

          <p>
            Background Image: &nbsp;
            <input
              name="url" 
              defaultValue={image} 
              onChange={this.handleImage}
              placeholder='image url here'
            /> &nbsp;
            <input type="file" onChange={this.handleUpload}/>
          </p>

          <section 
            className="output" 
            ref={node => this.section = node}>

            <h3 className="textTop" style={{ color: `${colorTop}` }}>{currentTop ? currentTop : 'I Eat Burritos'}</h3>

            <h3 className="textBottom" style={{ color: `${colorBottom}` }}>{currentBottom ? currentBottom : 'All my life'}</h3>
            
            <div
              className="background"
              style={{ backgroundImage: `url(${image})` }}
            ></div>

          </section>
          
          <button className="export-button" onClick={this.handleExport}>Export</button>

        </section>

        <footer role="contentinfo" id="footer">
          <p>(c) Meme Generator | <a href="https://github.com/limongoo/meme-generator/tree/ivan" target="_blank" rel="author noopener noreferrer">Ivan Limongan</a></p>
        </footer>

      </div>
    );
  }
}