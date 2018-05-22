"use strict"

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import React from 'react'
import { Component } from 'react'
import ReactDOM from 'react-dom'
import './calculatorStyle.css'


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operationSymbol = ["+", "-", "/", "*", ".", "C", "="];


function reducer(state ={ }, action){
    return state
}
class MyButton extends React.Component {


    constructor() {
        super()
    }

    clicked(text){console.log(text);}


    render() {
        return <div>

            <div>
                <button className="display"> </button>
            </div>

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
            <MyButton />
        </div>
    </Provider>,
    document.getElementById('main')
)


