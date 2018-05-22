"use strict"
import React from 'react'
import { Component } from 'react'
import ReactDOM from 'react-dom'
import Display from './display'
import Operator from './operator'
import {Digit} from './digit'
import './calculatorStyle.css'

export default class App extends React.Component {
    render() {
        return <div className="ADiv">
            <h1>Welcome</h1>
            <Display/>
            <Digit/>
            <Operator/>

        </div>
    }
}
