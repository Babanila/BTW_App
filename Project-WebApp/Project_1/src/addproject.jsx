import React, { Component } from 'react';

export default class Addproject extends React.Component {

    render() {
        return (
            <div>
                <h3> My App</h3>
                <form>
                    <div>
                        <label>Title</label><br />
                        <input type="text" ref="title" /><br /><br />
                    </div>
                    <div>
                        <label>Category</label><br />
                        <select ref="category">

                        </select>
                    </div>
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                </form>

             </div>);
    }
}


/*

      static defaultProps = {
            categories: [" Web Design ", " Android Development ", " IOS development " ]
        }

let categoryOptions = this.props.categories.map(category => {
               return  (<option key={category} value="category">{category}</option>);
            });


*/


