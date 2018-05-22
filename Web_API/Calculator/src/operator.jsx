import React from 'react'

export default class Operator extends React.Component {
    clicked(text) {console.log(text);};

    render(){
        const operationSymbol = [" + ", " - ", " / ", " * ", " . ", " C ", " = "];
        return <div className="OpDiv">
            <button className="OStyle" onClick={(e) => {
                this.clicked(operationSymbol[2])
            }}>{operationSymbol[2]}</button>
            <button className="OStyle" onClick={(e) => {
                this.clicked(operationSymbol[3])
            }}>{operationSymbol[3]}</button>
            <button className="OStyle" onClick={(e) => {
                this.clicked(operationSymbol[2])
            }}>{operationSymbol[1]}</button>
            <button className="OStyle" onClick={(e) => {
                this.clicked(operationSymbol[0])
            }}>{operationSymbol[0]}</button>
            <div>
                <button className="OStyle" onClick={(e) => {
                    this.clicked(operationSymbol[4])
                }}>{operationSymbol[4]}</button>
                <button className="OStyle" onClick={(e) => {
                    this.clicked(operationSymbol[6])
                }}>{operationSymbol[6]}</button>
                <button className="OStyleC" onClick={(e) => {
                    this.clicked(operationSymbol[5])
                }}>{operationSymbol[5]}</button>
            </div>
        </div>
    }
}