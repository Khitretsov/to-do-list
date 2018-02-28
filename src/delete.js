import React, { Component } from 'react';


class Delete extends Component {
    constructor() {
        super();
    }

    render () {
        return (
            <ul>{this.props.str}<button onClick={this.props.remove}>Убрать от сюда</button></ul>
        )
    }
}

export default Delete;