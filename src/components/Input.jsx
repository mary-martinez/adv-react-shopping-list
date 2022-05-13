import React, { useReducer, useState } from 'react';
import { useListContext } from '../context/ListContext';

export default function Input() {
  const [addItem, setAddItem] = useState('');
  const { handleAddItem } = useListContext();
  // const [ state, dispatch ] = useReducer(reducer, initialState);
  const addItemBtn = () => {
    handleAddItem(addItem);
    setAddItem('');
  };
  return (
    <>
      <input
        value={addItem}
        onChange={(e) => setAddItem(e.target.value)}
      ></input>
      <button onClick={addItemBtn}>Add to List</button>
    </>
  );
}
