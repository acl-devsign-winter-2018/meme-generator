import React, { Component } from 'react';

export default class App extends Component{

    constructor(){
        super();

        this.state = {
            test: "is this working?"
        }
    }

    render(){
        const { test } = this.state;
        return(
            <div>{test}</div>
        )
   }
}