import React, { useState } from 'react';

export default function Input() {
  const [addItem, setAddItem] = useState('');
  return (
    <>
      <input
        value={addItem}
        onChange={(e) => setAddItem(e.target.value)}
      ></input>
      <button>Add to List</button>
    </>
  );
}
