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

    render(){
        const { memeText } = this.state;
        return(
            <div>
                <input type="text" onChange={this.handleMemeText}/>
                <div>{memeText}</div>
            </div>
        )
   }
}