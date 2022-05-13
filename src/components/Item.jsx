import React from 'react';
import { useListContext } from '../context/ListContext';

export default function Item({ item }) {
  const { handleDeleteItem } = useListContext();

  // const deleteBtn = () => {
  //   handleDeleteItem()
  // }

  return (
    <div>
      <h3>{item.item}</h3>
      <button>edit</button>
      <button onClick={() => handleDeleteItem(item.id)}>
        delete {item.id}
      </button>
    </div>
  );
}
