import React from "react";

// import Button from "../components/Button";
import InputBox from "../components/InputBox";
// import List from "./List";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          items: []
        };
      }

    onChange = (event) => {
        this.setState({term: event.target.value});
      //  console.log('gbbdf')
      }
    
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    render() {
        return(
            <div>
            
            <button onClick={this.onSubmit}>Это кнопка</button>
            <InputBox value={this.state.term} onChange={this.onChange}/>
        {// <input value={this.state.term} onChange={this.onChange} />
         // onChange={() => this.onChange}
         // <List items={this.state.items} />
        }   
             
         
            </div>
        );
    }   
}