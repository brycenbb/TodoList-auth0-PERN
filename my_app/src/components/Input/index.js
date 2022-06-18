import React, { useState } from 'react';

function Input(props) {
  const [userInput, updateUserInput] = useState('');
  function handleChange(e) {
    console.log('changing');
    updateUserInput(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
        type="button"
        onClick={() => {
          props.addItem(userInput);
        }}
      >
        Add to List
      </button>
    </div>
  );
}

export default Input;
