import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    constructor () {
        super();

        this.state = {
            text: "default text here",
            color: "#000000",
            size: "26"
        };

        this.handleUpload = this.handleUpload.bind(this);
        this.handleText = this.handleText.bind(this);

    }

    handleUpload({ target }) {
        const reader = new FileReader();

        reader.readAsDataURL(target.files[0]);

        reader.onload = () => {
            this.setState({ background: reader.result})
        }

    }

    handleText({ target }){
        this.setState({
            text: target.value
        })
    }

    render() {
        const { background, content, text } = this.state;

        return (
            <div className="App">
                <header>
                    <h1 className="App-title"> Generate A Meme</h1>
                </header>
                <div>
                    <label>Your text: </label>
                            <input type="text" onChange={this.handleMemeText}/>
                    </div>

                <p>
                    <label>
                        Background: 
                        <input type="file" onChange={this.handleUpload}/>
                    </label>
                </p>

                <section 
                    ref={node => this.section = node}
                    style={{
                        backgroundImage: background ? `url(${background})` : null
                    }}
                
                >
               
                </section>
            </div>
        );
    }
}