import React, { useEffect } from 'react';
import Input from '../components/Input';
import Item from '../components/Item';
import { useListContext } from '../context/ListContext';

// const initialList = [{ id: 1, item: 'bananas', complete: false }];

export default function List() {
  const { state } = useListContext();

  // useEffect(() => {

  // }, [state])

  return (
    <>
      <h3>Your List</h3>
      <Input />
      <ul>
        {state.map((item) => (
          <li key={item.id}>
            <Item {...{ item }} />
          </li>
        ))}
      </ul>
    </>
  );
}

// need to use useReducer; start by rendering from state first?
