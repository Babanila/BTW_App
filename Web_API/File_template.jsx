"use strict"

import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
    render() {

        return (
        <div className="ADiv">
            My App
        </div>);
    }
}


export default App;


/*
"use strict"

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import React from 'react'
import ReactDOM from 'react-dom'
import {Display} from './display'
import {Operator} from './operator'
import {Digit} from './digit'
import './app'


const initialState = 0;
function reducer(state ={ initialState }, action){
    return state
}


const store = createStore(
    reducer, composeWithDevTools(applyMiddleware())
)


ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,
    document.getElementById('main')
)

 */