import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <div>The App</div>;
  }
}

const Mount_Node = document.getElementById("app");

ReactDOM.render(
  <App />,
  Mount_Node
);