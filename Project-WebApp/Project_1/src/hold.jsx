"use strict"

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import {Provider, connect} from 'react-redux'
import Projects from './project'


class App extends Component {
    constructor(){
        super();
        this.state = {
            projects: [
                 {
                     name: 'Baba',
                     categories: 'Web developer'
                 },
                 {
                     name: 'Akin',
                     categories: 'Android developer'
                 },
                 {
                     name: 'Ola',
                     categories: 'IOS developer'
                 }
             ]
        }
    }

    render() {

        return (
            <div className="App">
                My App
                <Projects projects={this.state.projects} />
            </div>);
    }
}


ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('main'));
