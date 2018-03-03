import React from 'react';
import Item from "./Item";

const List = props => (
  <ul>
    {
    //  props.items.map((item, index) => <li key={index}>{item}</li>)
      props.items.map((item, index) => <Item index={index} item={item} />)
    }
  </ul>
);

export default List;