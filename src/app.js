import React, { Component } from 'react';
import './style.css';

export default class App extends Component{

    constructor(){
        super();

        this.state = {
            memeText: "hello"
        }

        this.handleMemeText = this.handleMemeText.bind(this);
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

    render(){
        const { memeText } = this.state;
        return(
            <div>
                <input type="text" onChange={this.handleMemeText}/>
                
                <label>
                    Text Color:
                    <select onChange={this.handleColor}>
                        <option>Black</option>
                        <option>White</option>
                    <   option>Green</option>
                    </select>
                </label>
                <div>{memeText}</div>
            </div>
        )
   }
}