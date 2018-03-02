import React from "react";

export default function InputBox(props) {
    return(
        <input value={props.value} onChange={props.onChange} /> 
    );
}