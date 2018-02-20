import React, { Component } from 'react';
import './app.css';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      background: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg'
    }

    this.handleBackground = this.handleBackground.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleBackground({ target }){
    this.setState({
      background: target.value
    });
  }

  handleUpload({ target }) {
    const reader = new FileReader();

    reader.readAsDataURL(target.files[0]);

    reader.onload = () => {
      this.setState({ background: reader.result });
    };
  }

  render() {
    const { background } = this.state;

    return (
      <div>
        <h1>Meme Generator</h1>

        <p>
          <label>
            Background:
            <input name="url" onChange={this.handleBackground}/>
            <input type="file" onChange={this.handleUpload}/>  
          </label>
        </p>

        <section style={{

          backgroundImage: background ? `url(${background}` : null
        }}>
        </section>
      </div>

    );
  }
}

