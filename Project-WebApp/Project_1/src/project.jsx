import React, {Component} from 'react';
import ProjectItem from './projectItem';

export default class Projects extends React.Component {
    render() {

            let pItems;
            if(this.props.projects){
                pItems = this.props.projects.map(project => {
                    return (<ProjectItem key={project.name} project={project} />);
                });
            }

            return (
                <div className="Projects">
                    {pItems}
                </div>);
        }
    }

