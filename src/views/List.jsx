import React from 'react';
import Item from '../components/Item';
import { useListContext } from '../context/ListContext';

// const initialList = [{ id: 1, item: 'bananas', complete: false }];

export default function List() {
  const { initialList } = useListContext();
  return (
    <>
      <h3>Your List</h3>
      <ul>
        {initialList.map((item) => (
          <li key={item.id}>
            <Item {...{ item }} />
          </li>
        ))}
      </ul>
    </>
  );
}

// need to use useReducer; start by rendering from state first?
