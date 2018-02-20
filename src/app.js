import React, { Component } from 'react';
import './style.css';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';
import faker from 'faker';

export default class App extends Component{

    constructor(){
        super();

        this.state = {
            memeText: "Welcome",
            color: "#000000",
            size: "20"
        }

        this.handleMemeText = this.handleMemeText.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleURL = this.handleURL.bind(this)
        this.handleExport = this.handleExport.bind(this)
        this.handleFake = this.handleFake.bind(this)
    }

    handleMemeText({ target }){
        this.setState({
            memeText: target.value
        })
    }

    handleFake({ target }){
        debugger;
        const noun = faker.hacker.noun();
        const verb = faker.hacker.verb();
        const adj = faker.hacker.adjective();
        const noun2 = faker.hacker.noun();
        this.setState({
            memeText: `${noun} ${verb} ${adj} ${noun2}`
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

    handleURL( {target }){
        this.setState({
            background: target.value
        })
    }

    handleUpload( { target }){
        const reader = new FileReader();

        reader.readAsDataURL(target.files[0]);

        reader.onload = () => {
            this.setState({ background: reader.result })
        }
    }

    handleExport(){
        dom2image.toBlob(this.div).then(blob => {
            fileSaver.saveAs(blob, 'meme.png');
        })
    }
    

    render(){
        const { memeText, color, size, background } = this.state;
        return(
            <section>
                <h1>Meme Generator</h1>
                <div className="options">
                    <div>
                        <label>Your text: </label>
                        <input type="text" onChange={this.handleMemeText}/>
                    </div>
                    <div>
                        <button onClick={this.handleFake}>Fake Text</button>
                    </div>

                    <div>
                        <label>Upload Image URL or Image:</label>
                        <input name="url" onChange={this.handleURL}/>
                        <input type="file" onChange={this.handleUpload}/>
                    </div>

                    <div>
                        Text Color:
                        <input type="color" value={color} onChange={this.handleColor}/>
                    
                        Font Size:
                        <input className="fontSize" type="text" onChange={this.handleSize}/>  
                    </div>

                    <div>
                        <button onClick={this.handleExport}>Save Meme</button>
                    </div>
                </div>

                <div
                className="meme"
                ref={node => this.div = node}
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