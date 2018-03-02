import React from "react";

import InputBox from "../components/InputBox";

export default class TodoList extends React.Component {

    render() {


        return(
            <InputBox value={this.props.value} onChange={this.props.onChange}/>
        )

    }
     

}