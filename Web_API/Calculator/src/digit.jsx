import React from 'react';


export class Digit extends React.Component {
        consturctor(){
        }
    clicked(text) {console.log(text);}
    render() {
        const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        return <div className="DigDiv">
            <div>
                <button className="DStyle" onClick={(e) => {
                    this.clicked(number[0])
                }}>{number[0]}</button>
                <button className="DStyle" onClick={(e) => {
                    this.clicked(number[1])
                }}>{number[1]}</button>
                <button className="DStyle" onClick={(e) => {
                    this.clicked(number[2])
                }}>{number[2]}</button>
            </div>

            <div>
                <button className="DStyle" onClick={(e) => {
                    this.clicked(number[3])
                }}>{number[3]}</button>
                <button className="DStyle" onClick={(e) => {
                    this.clicked(number[4])
                }}>{number[4]}</button>
                <button className="DStyle" onClick={(e) => {
                    this.clicked(number[5])
                }}>{number[5]}</button>
            </div>

            <div>
                <button className="DStyle" onClick={(e) => {
                    this.clicked(number[6])
                }}>{number[6]}</button>
                <button className="DStyle" onClick={(e) => {
                    this.clicked(number[7])
                }}>{number[7]}</button>
                <button className="DStyle" onClick={(e) => {
                    this.clicked(number[8])
                }}>{number[8]}</button>
            </div>

            <div>
                <button className="DStyle" onClick={(e) => {
                    this.clicked(number[9])
                }}>{number[9]}</button>
            </div>

        </div>
    }
}
