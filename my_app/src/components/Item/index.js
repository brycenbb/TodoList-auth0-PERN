import React from 'react';

function Item(props) {
  return (
    <li>
      {props.text}{' '}
      <button
        type="button"
        onClick={() => {
          props.delete(props.id);
        }}
      >
        {' '}
        Delete
      </button>
    </li>
  );
}

export default Item;
