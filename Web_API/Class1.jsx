import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import {Provider, connect} from 'react-redux'

import './style.css'

const initialState = {
        clickCount1: 0,
        clickCount2: 0,
        a: 'initial a',
        b: 'initial b'
}

const COUNT1_CLICKED = 'COUNT1_CLICKED'
const COUNT2_CLICKED = 'COUNT2_CLICKED'

/*
const sampleAction = {
    type: 'DO_SOME_ACTION',
    payload: {
            newA: 'bla bla'
    }
}
*/

function reducer(state = initialState, {type, payload}) {
        switch(type){
            case COUNT1_CLICKED1 : {
                return {...state, clickCount1: state.clickCount1 + 1}
            }

            case COUNT1_CLICKED2 : {
                return {...state, clickCount2: state.clickCount2 + 1}
            }


            case 'CHANGE_A' : {
                    const {newA} = payload
                return {...state, a: newA}
            }

            case 'CHANGE_B' : {
                const {newB} = payload
                return {...state, b: newB}
            }

            default:
                return state
        }
}

const store = createStore(reducer, devToolsEnhancer())


//store.dispatch(sampleAction)

@f
@g
@connect()
class AApp extends React.Component{
        constructor(){
            super()
            this.clicked1 = () => this.props.dispatch({type: COUNT1_CLICKED})
            this.clicked2 = () => this.props.dispatch({type: COUNT2_CLICKED})
        }

    render(){
            return <div className= "appController">app
                <button onClick={this.clicked1}> click me</button>
                <button onClick={this.clicked2}> click me</button>
            </div>
        }
}


ReactDOM.render(
    <Provider store={store}
        <div className="pageContainer">
            <App/>
        </div>
    </Provider>,
    document.getElementById('main'))