import React, { Component } from 'react';


class CreateStr extends Component {
    constructor() {
        super();

    }

    render () {
        let  i = this.props.ind
        return (
            <ul>{this.props.str} <button onClick={this.remove(i)}>Убрать от сюда</button></ul>
        )
    }

    // i = this.props.ind
    remove(i) {
        let copy = this.props.str
        // .slice();
      //  copy.splice(i, 1)
      //  this.setState({ str: copy })
      console.log(copy.splice(i, 1))
      console.log('-------', typeof(this.props.ind))
    }
}

export default CreateStr;