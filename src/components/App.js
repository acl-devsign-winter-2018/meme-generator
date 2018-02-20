import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    constructor () {
        super();

        this.state = {
            content: "default text here",
            background: "https://en.wikipedia.org/wiki/Pomeranian_(dog)#/media/File:Pomeranian_600.jpg"
        };

        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload({ target }) {
        const reader = new FileReader();

        reader.readAsDataURL(target.files[0]);

        reader.onload = () => {
            this.setState({ background: reader.result})
        }

    }

    render() {
        const { content, background } = this.state;

        return (
            <div className="App">
                <header>
                    <h1 className="App-title"> Title goes here</h1>
                </header>
            

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
                This is a section folks
                </section>
            </div>
        );
    }
}