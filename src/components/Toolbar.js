import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Toolbar extends Component {
    static propTypes = {}

    onSelectFilter = (event) => {
        this.props.onSelectFilter(event.currentTarget.innerText)
    }

    render() {
        return (
            <ul className="list">
                {this.props.filters.map((filter, index) =>
                    <li className="list__item" key={index} onClick={this.onSelectFilter}>{filter}</li>)}
            </ul>
        )
    }
}

export default Toolbar