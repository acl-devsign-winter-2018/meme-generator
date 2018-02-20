import React, { Component } from 'react';

export default class App extends Component{

    constructor(){
        super();

        this.state = {
            test: "hello"
        }
    }

    render(){
        const { test } = this.state;
        return(
            <div>{test}</div>
        )
   }
}