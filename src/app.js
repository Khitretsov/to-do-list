import React from "react";
import ReactDOM from "react-dom";
import Header from "./containers/Header"

/*
class App extends React.Component {
  render() {
    return <div>The App</div>;
  }
}
*/

const Mount_Node = document.getElementById("app");

ReactDOM.render(
  <Header />,
  Mount_Node
);