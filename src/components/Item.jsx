import React from 'react';

export default function Item({ item }) {
  return (
    <div>
      <h3>{item.item}</h3>
      <button>edit</button>
      <button>delete</button>
    </div>
  );
}
