import React from 'react';
import Button from "../components/Button";

export default class Item extends React.Component {
    constructor(props) {
        super(props);
      } 

    onClikc = e => {
        console.log(this.props.item)
    }

    render() {
        return (
            <div>
            <li key={this.props.index}>{this.props.item}</li> 
   {//         
   }        <Button onClick={this.props.onClick} />
            </div>
        );
    };
}