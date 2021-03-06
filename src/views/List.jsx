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
    <div style={{ textAlign: 'center' }}>
      <h1
        style={{
          marginTop: '50px',
          textDecoration: 'underline',
        }}
      >
        Your List
      </h1>
      <Input />
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          listStyle: 'none',
          alignItems: 'center',
          paddingLeft: '0px',
        }}
      >
        {state.map((item) => (
          <li key={item.id}>
            <Item {...{ item }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// need to use useReducer; start by rendering from state first?
