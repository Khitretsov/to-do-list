import React from "react";


export default function Button(props) {
    return(
        <button onClick={props.onClick}>Это кнопка</button> 
    );
}

/*
export default function Button(props) {
  const onClick = props.onClick;
  const children = props.children;
  return <button onClick={onClick}>{children}</button>;
}
*/