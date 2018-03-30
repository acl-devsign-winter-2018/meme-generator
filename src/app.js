import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      memeTords: "What do you meme?",
      color: "blue",
      size: "3rem",
    }
    
    this.handleMemeText = this.handleMemeText.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }


  handleSizeChange({target}) {
    this.setState({
      size: target.value || '3rem'
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


  handleMemeText({target}) {
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
    const { memeText, color, size } = this.state;

    return (
    
      <div>

        <header>Meme Generator</header>
        
        <p>Choose a file:</p>
        <div><input type="file" onChange={this.handleUpload}/></div>

        <p>What do you meme?</p>
        <div><input placeholder="Enter your meme" onChange={this.handleMemeText}/></div>
        
        <p>Change text size and color: </p>
        <div><input placeholder="Text Color" onChange={this.handleColor}/></div>
        <div><input placeholder="Text Size" onChange={this.handleSizeChange}/></div>

        <div>
          <section className="meme"
            ref={node => this.section = node}
            style={{ 
              color: color,
              fontSize: `${size}px`,
            }}>
            {memeText}
          </section>
        </div>
        
        <section className="save"><button onClick={this.handleSave}>Save Your Meme</button></section>

      </div>
    );

  }
}