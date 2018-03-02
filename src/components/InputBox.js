import React from "react";

export default function InputBox(props) {
    const onChange = props.onChange;
    const value = props.value;
    return(
        <input value={value} onChange={e => onChange(e.target.value)} />
    );
}