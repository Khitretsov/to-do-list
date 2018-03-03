import React from 'react';
import Item from "./Item";

/*
const List = props => (
  <ul>
    {
    //  props.items.map((item, index) => <li key={index}>{item}</li>)
      props.items.map((item, index) => <Item index={index} item={item} />)
    }
  </ul>
);

export default List;
*/

export default class List extends React.Component {
  constructor(props) {
    super(props);
  } 

  delete = e => {
    this.props.items.splice(e, 1);
    this.setState({})
  }

  render() {
    return (
      <ul>
        {
      //  props.items.map((item, index) => <li key={index}>{item}</li>)
          this.props.items.map((item, index) => <Item index={index} item={item} onClick={() => this.delete(index)}/>)
        }
      </ul>
    );
  };
}