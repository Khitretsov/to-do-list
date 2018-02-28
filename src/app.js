import React from "react";
import ReactDOM from "react-dom";
import App from "./module";

/*
class App extends React.Component {
  render() {
    return <div>The App</div>;
  }
}
*/

const Mount_Node = document.getElementById("app");

ReactDOM.render(
  <App />,
  Mount_Node
);