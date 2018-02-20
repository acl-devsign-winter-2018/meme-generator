import React, { Component } from 'react';
import './style.css';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component{

    constructor(){
        super();

        this.state = {
            memeText: "",
        }

        this.handleMemeText = this.handleMemeText.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleURL = this.handleURL.bind(this)
        this.handleExport = this.handleExport.bind(this)
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
        dom2image.toBlob(this.section).then(blob => {
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

                        <label>Upload Image URL or Image:</label>
                        <input name="url" onChange={this.handleURL}/>
                        <input type="file" onChange={this.handleUpload}/>
                    </div>
                    <div>
                        <button onClick={this.handleExport}>Save</button>
                    </div>
                    <div>
                        Text Color:
                        <select onChange={this.handleColor}>
                            <option>Black</option>
                            <option>White</option>
                            <option>Green</option>
                            <option>Red</option>
                            <option>Purple</option>
                        </select>
                        Font Size:
                        <select onChange={this.handleSize}>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>60</option>
                            <option>80</option>
                        </select>  
                    </div>
                </div>

                <div
                className="meme"
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