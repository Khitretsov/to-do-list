import React, { Component } from 'react';
import CreateStr from "./createStr";

class App extends Component {
    constructor() {
        super();
        this.state = {
            str: [],
            current: ''           
        }
    }

    onInput = e => {
        this.setState({ current: e.target.value })
    }

    onClick = () => {
        let copy = this.state.str.slice();
        copy.push(this.state.current); 

        this.setState({ str: copy, current: ""});
    }

    deleteStr = i => {
        let copy = this.state.str.slice();
        copy.splice(i, 1);

        this.setState({ str: copy });
    }

    render() {
 /*    let list =  this.state.str.map((e, i) => {
            return (
                <li key = {i}> {e} <button>Это кнопка</button> </li>  // Почему-то не говорит про уникальный ключ
            )
        })*/
        let list = this.state.str.map((e, i) => {
            return (
                <CreateStr str={e} delete={() => this.deleteStr(1)}/>
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
    }
}

export default App;