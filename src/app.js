import React, { Component } from 'react';
import './style.css';

export default class App extends Component{

    constructor(){
        super();

        this.state = {
            memeText: "hello",
        }

        this.handleMemeText = this.handleMemeText.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleMemeText({ target }){
        this.setState({
            memeText: target.value
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

    handleUpload( { target }){
        const reader = new FileReader();

        reader.readAsDataURL(target.files[0]);

        reader.onload = () => {
            this.setState({ background: reader.result })
        }
    }
    

    render(){
        const { memeText, color, size, background } = this.state;
        return(
            <section>
                <h1>Meme Generator</h1>

                <label>Your text: </label>
                <input type="text" onChange={this.handleMemeText}/>

                <label>Upload Background:</label>
                <input type="file" onChange={this.handleUpload}/>
                <label>
                    Text Color:
                    <select onChange={this.handleColor}>
                        <option>Black</option>
                        <option>White</option>
                    <   option>Green</option>
                    </select>
                    Font Size:
                    <select onChange={this.handleSize}>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                    </select>
                </label>


                <div
                ref={node => this.section = node}
                style={{
                    color: color,
                    fontSize: `${size}px`,
                    backgroundImage: `url(${background})`
                    }}
                >
                    {memeText}
                </div>
            </section>
        )
   }
}