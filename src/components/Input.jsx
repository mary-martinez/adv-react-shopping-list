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
        aria-label="add item"
        value={addItem}
        onChange={(e) => setAddItem(e.target.value)}
      ></input>
      <button aria-label="submit new item" onClick={addItemBtn}>
        Add to List
      </button>
    </>
  );
}
