import React from 'react';
import Item from '../Item/index.js';

function List(props) {
  return (
    <ul>
      {props.itemArray.map((item, index) => {
        return (
          <Item text={item} delete={props.deleteFunction} id={index}></Item>
        );
      })}
    </ul>
  );
}

export default List;
