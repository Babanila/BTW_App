"use strict"

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import {Provider, connect} from 'react-redux'
import Projects from './project'
import AddProject from './addproject'


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount(){
        this.setState({
            projects:[
                {
                    name: 'Baba',
                    title: 'Business Website',
                    categories: 'Web Design'
                },
                {
                    name: 'Akin',
                    title: 'Social App',
                    categories: 'Android Development'
                },
                {
                    name: 'Ola',
                    title: 'Ecommerce Shopping Cart',
                    categories: 'IOS development'
                }
            ]
        });
    }

    render() {

        return (
            <div className="App">
                <AddProject /><br />
                <Projects projects={this.state.projects} />
            </div>);
    }
}


ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('main'));
