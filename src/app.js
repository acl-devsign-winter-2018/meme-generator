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
    
    this.handleMemeText = this.handleMemeWords.bind(this);
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