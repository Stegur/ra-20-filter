import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ProjectList extends Component {
    static propTypes = {}

    render() {
        return (
            <div className="container">
                {this.props.projects.map((project, index) => <img src={project.img} key={index} className="card" alt={project.category} />)}
            </div>
        )
    }
}

export default ProjectList