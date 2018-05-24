import React, {Component} from 'react';


export default class ProjectItem extends React.Component {
    render() {

        return (
              <div>
               <li>
                   {this.props.project.name} - {this.props.project.title} - {this.props.project.categories}
               </li>
              </div>
        );
    }
}



