import React, { useState } from 'react';
import Item from './Item';

const List = props => {
  return (
    <ul className="list">
      {props.list.map(list => (
        <Item
          key={list.id}
          id={list.id}
          clicked={list.clicked}
          onDelete={props.onDelete}>
          {list.value}
        </Item>
      ))}
    </ul>
  );
};

export default List;
