import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./containers/TodoList";

/*
class App extends React.Component {
  render() {
    return <div>The App</div>;
  }
}
*/

const Mount_Node = document.getElementById("app");

ReactDOM.render(
  <TodoList />,
  Mount_Node
);