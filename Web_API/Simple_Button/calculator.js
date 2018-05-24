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

        const buttonOperators = ["+", "-", "/", "x", "C", "="].map((operator) => {
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


/*
"use strict"

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import React from 'react'
import { Component } from 'react'
import ReactDOM from 'react-dom'
import SafeEval from 'safe-eval'
import './calculatorStyle.css'


// Functional Component
const DisplayWindow = (props) => (<input className="display" type='text' value={props.expression} disabled='true' />);


class Button extends React.Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onKeyPressed(this.props.text);
    }

    render() {
        return <button className="DStyle" onClick={this.onClick}>{this.props.text}</button>;
    }
}

class App extends React.Component {
    constructor () {
        super();

        this.state = {
            expression: '0'
        }

        this.onKeyPressed = this.onKeyPressed.bind(this);
        this.onEvaluatePressed = this.onEvaluatePressed.bind(this);
        this.onDeletePressed = this.onDeletePressed.bind(this);
    }

    onKeyPressed(text) {
        this.setState((prev) => ({expression: prev.expression + text}));
    }

    onEvaluatePressed() {
        const result = SafeEval(this.state.expression);
        this.setState({expression: result.toString()});
    }

    onDeletePressed() {
        this.setState((prev) => ({
            expression: prev.expression.length <= 1 ? '0' : prev.expression.slice(0, -1)}));
    }

    render() {
        let numberKeys = [];
        for(let i =0; i < 10; i++) {
            numberKeys.push(<Button  text={i} onKeyPressed={this.onKeyPressed}/>);
        }

        return (
            <div className="AD">
                <div><DisplayWindow expression={this.state.expression}/></div>
                {numberKeys}
                <Button text="+" onKeyPressed={this.onKeyPressed}/>
                <Button text="-" onKeyPressed={this.onKeyPressed}/>
                <Button text="*" onKeyPressed={this.onKeyPressed}/>
                <Button text="/" onKeyPressed={this.onKeyPressed}/>
                <Button text="C" onKeyPressed={this.onDeletePressed}/>
                <button className="DStyle" onClick={this.onEvaluatePressed}>=</button>
            </div>
        )
    }
}


ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('main')
)
*/



/*
"use strict"

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import React from 'react'
import { Component } from 'react'
import ReactDOM from 'react-dom'
import './calculatorStyle.css'



function reducer(state ={ }, action){
    return state
}

const DisplayScreen = (props) => (
    <input className="calculatorDisplay" type='text' value={props.expression} disabled='true' />);


class MyButton extends React.Component {

    constructor() {
        super()
        const displayValue = 0;
    }



    clicked(digit) {
        console.log(digit);
    }


    render() {
        const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const operationSymbol = ["+", "-", "/", "*", ".", "C", "="];

        return <div>

                <div className="calculatorDisplay"></div>

            <div>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(number[0])} }>{number[0]}</button>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(number[1])} }>{number[1]}</button>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(number[2])}}>{number[2]}</button>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(operationSymbol[2])} }>{operationSymbol[2]}</button>
            </div>

            <div>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(number[3])} }>{number[3]}</button>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(number[4])} }>{number[4]}</button>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(number[5])} }>{number[5]}</button>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(operationSymbol[3])} }>{operationSymbol[3]}</button>
            </div>

            <div>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(number[6])} }>{number[6]}</button>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(number[7])} }>{number[7]}</button>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(number[8])} }>{number[8]}</button>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(operationSymbol[2])} }>{operationSymbol[1]}</button>
            </div>

            <div>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(number[9])} }>{number[9]}</button>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(operationSymbol[4])} }>{operationSymbol[4]}</button>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(operationSymbol[6])} }>{operationSymbol[6]}</button>
                <button className="buttonStyle" onClick={ (e) => {this.clicked(operationSymbol[0])} }>{operationSymbol[0]}</button>
            </div>

            <div>
                <button className="buttonStyleC" onClick={ (e) => {this.clicked(operationSymbol[5])} }>{operationSymbol[5]}</button>
            </div>
        </div>
    }
}


const store = createStore(
    reducer, composeWithDevTools(applyMiddleware())
)


ReactDOM.render(
    <Provider store={store}>
        <div>
            <DisplayScreen />
            <MyButton />
        </div>
    </Provider>,
    document.getElementById('main')
)


// disabled='true'
//<MyButton />
// <DisplayScreen expression={this.state.expression} />
*/


