import React, { Component } from 'react';

class Addproject1 extends React.Component {

    /*   static defaultProps = {
            categories: [" Web Design ", " Android Development ", " IOS development " ]
        } */

    render() {
      /* let categoryOptions = this.props.categories.map(category => {
            return  <option key={category} value={category}>{category}</option>
        }); */

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

export default AddProject;

/*

let categoryOptions = this.props.categories.map(category => {
               return  (<option key={category} value="category">{category}</option>);
            });



<form onSubmit={this.handleSubmit}>
       <div>
           <label>Title</label><br />
           <input type="text" ref="title" />
       </div>
       <div>
          <label>Category</label><br />
          <select ref="category">
              {categoryOptions}
         </select>
      </div>
   </form> */


