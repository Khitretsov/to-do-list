import React from 'react';
import Button from "../components/Button";

export default class Item extends React.Component {
    constructor(props) {
        super(props);
      } 



    render() {
        return (
            <div>
            <li key={this.props.index}>{this.props.item}</li> 
   {//         
   }        <Button onClick={() => {alert('sdfvsd')}} />
            </div>
        );
    };
}