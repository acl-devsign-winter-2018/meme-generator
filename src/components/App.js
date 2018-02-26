import React, { Component } from 'react';
import fileSaver from 'file-saver';
import dom2image from 'dom-to-image';
import './App.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      phrase: 'Feel better?',
      image: 'url(http://img.izismile.com/img/img5/20121212/640/awe_inspiring_photos_2012_640_01.jpg)',
      color: 'white',
      size: '20', 
    };

    this.handlePhraseChange = this.handlePhraseChange.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

  }

  handlePhraseChange({ target }) {
    this.setState({ phrase: target.value });
  }

  handleImage({ target }) {
    this.setState({ image: target.value });
  }

  handleUpload({ target }) {
    const reader = new FileReader;

    reader.readAsDataURL(target.files[0]);
    reader.onload = () => {
      this.setState({ image: reader.result });
    };
  }

  handleColor({ target }) {
    this.setState({ color: target.value });
  }

  handleSize({ target }) {
    this.setState({ size: target.value });
  }

  handleSave(){
    dom2image.toBlob(this.section).then(blob => {
      fileSaver.saveAs(blob, 'myMeme.png');
    });
  }
    
  render() {
    const { phrase, image, size, color } = this.state;

    return (
      
      <div className="meme-gen">

        <header>Meme Generator</header>
        
        <p>Add image address:</p>
        <div><input placeholder="Paste Image URL" onChange={this.handleImage}/></div>
        
        <p>... or choose a file:</p>
        <div className="uploader"><input type="file" onChange={this.handleUpload}/></div>

        <p>What do you want to say?</p>
        <div><input placeholder="Enter your phrase" onChange={this.handlePhraseChange}/></div>
        
        <p>Change text size and color: </p>
        <div><input className="color" placeholder="Text Color" onChange={this.handleColor}/></div>
        <div><input className="text-size" placeholder="Text Size" onChange={this.handleSize}/></div>

        <div className="container">
          <section className="meme"
            ref={node => this.section = node}
            style={{ 
              backgroundImage: image ? `url(${image})` : null,
              color: color,
              fontSize: `${size}px`,
            }}>
            {phrase}
          </section>
        </div>
        
        <section className="save"><button onClick={this.handleSave}>Save Your Meme</button></section>

      </div>
    );

  }
}
