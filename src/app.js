import React from "react";
import ReactDOM from "react-dom";

import List from "./module2List";
import {articles} from "./fixtures";
/*
class App extends React.Component {
  render() {
    return <div>The App</div>;
  }
//  return <div>The App</div>;
}

function Hallo() {
  return <div>Hallo</div>
} 
*/
const Mount_Node = document.getElementById("app");
// ReactDOM.render(<Hallo />, document.getElementById("app"))
// ReactDOM.render(<App />, Mount_Node);
ReactDOM.render(<List blabla = {articles} />, Mount_Node);