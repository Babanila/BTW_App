"use strict"

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import React from 'react'
import SafeEval from 'safe-eval'
import { Component } from 'react'
import ReactDOM from 'react-dom'
import './calculatorStyle.css'


// Functional Component
const DisplayScreen = (props) => (<input className="display" type='text' value={props.expression} disabled='true' />);


class Button extends React.Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onButtonPressed(this.props.text);
    }

    render() {
        return (<button className="DStyle" onClick={this.onClick}>{this.props.text}</button>
        )
    }
}


class App extends React.Component {
    constructor () {
        super();

        this.state = {
            expression: ''
        }

        this.onButtonPressed = this.onButtonPressed.bind(this);
        //this.onEvaluatePressed = this.onEvaluatePressed.bind(this);
        //this.onDeletePressed = this.onDeletePressed.bind(this);
    }


    onButtonPressed(text) {
        if (text === "=") {
            const result = SafeEval(this.state.expression);
            this.setState({expression: result.toString()});
        }

        else if (text == "C") {
            this.setState((prev) => ({
                expression: prev.expression.length <= 1 ? ' ' : prev.expression.slice(0, -1)}));
        }
        else
            this.setState((prev) => ({expression: prev.expression + text}));
        console.log(text);
    }





    render() {
        const buttonNumbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."].map((number) => {
            return (
                <Button text={number} key={number} onButtonPressed={this.onButtonPressed}/>)});

        const buttonOperators = ["+", "-", "/", "*", "C", "="].map((operator) => {
            return (
                <Button text={operator} key={operator} onButtonPressed={this.onButtonPressed}/>)});

        return (
            <div className="AD">
                <div><DisplayScreen expression={this.state.expression}/></div>
                 {buttonNumbers}
                {buttonOperators}

            </div>
        );
    }
}

// {numberKeys}

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('main')

)
