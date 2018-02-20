import React, { Component } from 'react';
import './app.css';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      toptext: 'This is the headline text',
      bottomtext: 'This is the subhead text'
    }

    this.changeToptext = this.changeToptext.bind(this);
    this.changeBottomtext = this.changeBottomtext.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  changeToptext({ target }){
    this.setState({
      toptext: target.value
    });
  }

  changeBottomtext({ target }){
    this.setState({
      bottomtext: target.value
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
    const { background, toptext, bottomtext } = this.state;

    return (
      <div>
        <header>
          <h1>Meme Generator</h1>
        </header>

        <fieldset>
          <label>
            Background Image:
            <input type="file" onChange={this.handleUpload}/>  
          </label>

          <label>
            Headline Text:
            <input type="text" onChange={this.changeToptext}/>
          </label>

          <label>
            Subhead Text:
            <input type="text" onChange={this.changeBottomtext}/>
          </label>

        </fieldset>

        <section style={{

          backgroundImage: background ? `url(${background}` : null
        }}>
          <p id="toptext">{toptext}</p>
          <p id="bottomtext">{bottomtext}</p>
        </section>

        <footer>copyright</footer>

      </div>

    );
  }
}

