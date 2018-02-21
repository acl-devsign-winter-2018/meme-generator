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
        this.handleColor = this.handleColor.bind(this);
        this.handleSize = this.handleSize.bind(this);
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

    handleColor( { target }){
        this.setState({
            color: target.value
        })
    }

    handleSize( { target }){
        this.setState({
            size: target.value
        })
    }

    render() {
        const { background, color, content, size, text } = this.state;

        return (
            <div className="App">
                <header>
                    <h1 className="App-title"> Generate A Meme</h1>
                </header>
                <div>
                    <label>Your text: </label>
                            <input type="text" onChange={this.handleText}/>
                    </div>

                <div>
                    <label>
                        Background: 
                        <input type="file" onChange={this.handleUpload}/>
                    </label>
                </div>

                <div>
                        Text Color:
                        <input type="color" value={color} onChange={this.handleColor}/>
                    
                        Font Size:
                        <input className="fontSize" type="text" onChange={this.handleSize}/>  
                </div>

                <div 
                    className ="meme"
                    ref={node => this.div = node}
                    style={{
                        backgroundImage: background ? `url(${background})` : null,
                        color: color,
                        fontSize: `${size}px`,
                    }}
                
                >
               {text}
                </div>

            </div>
        );
    }
}