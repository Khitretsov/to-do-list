import React, { Component } from 'react';
import CreateStr from "./createStr";

class App extends Component {
    constructor() {
        super();
        this.state = {
          //  count: 0
            str: [],
            current: ''           
        }
        this.incr = this.incr.bind(this)
       // this.onInput = this.onInput.bind(this)
        this.onClick = this.onClick.bind(this)
    //    this.remove = this.remove.bind(this)
    }

    incr() {
        this.setState({ count: this.state.count + 1 });
    }

    onInput = e => {
        this.setState({ current: e.target.value })
    }

    onClick() {
        let copy = this.state.str.slice();
        copy.push(this.state.current); 

        this.setState({ str: copy, current: ""});
    }



    render() {
        let list = this.state.str.map(function(e, i) {
            return (
                <CreateStr str={e} ind={i}/>
            )
        })
        return (
            <div>
                <input placeholder="Писать сюда" value={this.state.current} onChange={this.onInput}/>
                <button onClick={this.onClick}>Нажимать cюда</button>
                <br />
                {this.state.str.length === 0 ? "Пусто" : <ul>{list}</ul>}
            </div>
        )
    /*    return (
            <div>
                <button onClick={this.incr} >Add</button>
                {this.state.count}
            </div>
        ) */
    }
}

export default App;