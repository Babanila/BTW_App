"use strict"

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import React from 'react'
import ReactDOM from 'react-dom'
import {Display} from './display'
import {Operator} from './operator'
import {Digit} from './digit'
import './calculatorStyle.css'


const initialState = 0;
function reducer(state ={ initialState }, action){
    return state
}

class App extends React.Component {
    render() {
        return <div className="ADiv">
            <Display/>
            <Digit/>
            <Operator/>
        </div>
    }
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


