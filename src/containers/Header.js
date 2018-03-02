import React from "react";

import InputBox from "../components/InputBox";
import Button from "../components/Button";

export default class TodoList extends React.Component {

    render() {


        return(
            <div>
            <InputBox value={this.props.value} onChange={this.props.onChange}/>
            <Button onClick={this.props.onClick}>Это кнопка</Button>
            </div>
        )

    }
     

}