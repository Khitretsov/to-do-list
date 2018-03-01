import React, { Component } from 'react';


class CreateStr extends Component {
    constructor() {
        super();

    }

    render () {
        let  i = this.props.ind
        return (
            <ul> {this.props.str} <button onClick={this.props.delete}>Убрать от сюда</button></ul>
        )

     //  <button onClick={this.remove(i)}>
     // 
    }
}

export default CreateStr;