import React, { useEffect, useState } from 'react';
import { useListContext } from '../context/ListContext';

export default function Header() {
  const { state } = useListContext();
  const [remaining, setRemaining] = useState([]);

  useEffect(() => {
    const numRemain = state.filter((each) => each.complete === false);
    setRemaining(numRemain);
    // console.log('numRemain', numRemain);
  }, [state]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '1px solid black',
      }}
    >
      <h2 style={{ marginBottom: '5px' }}>Welcome to your shopping list!</h2>
      <h3 style={{ marginTop: '5px', marginBottom: '30px' }}>
        You have {state.length} items total and {remaining.length} items
        remaining.
      </h3>
    </div>
  );
}

// needs to have count of items + button to clear the list
