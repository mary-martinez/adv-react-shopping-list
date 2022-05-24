import React, { useEffect, useState } from 'react';
import { useListContext } from '../context/ListContext';

export default function Header() {
  const { state } = useListContext();
  const [remaining, setRemaining] = useState('');

  useEffect(() => {
    const numRemain = state.filter((each) => each.complete === false);
    if (numRemain.length === 1) {
      setRemaining('1 item');
    } else {
      setRemaining(`${numRemain.length} items`);
    }
    // console.log('numRemain', numRemain);
  }, [state]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '2px solid black',
        boxShadow: '2px 2px white',
        color: 'white',
        textShadow: '2px 2px hsla(0, 0, 0, 0.5)',
      }}
    >
      <h2 style={{ marginBottom: '5px' }}>Welcome to your shopping list!</h2>
      {state.length === 1 ? (
        <h3 style={{ marginTop: '5px', marginBottom: '30px' }}>
          You have {state.length} item total and {remaining} remaining.
        </h3>
      ) : (
        <h3 style={{ marginTop: '5px', marginBottom: '30px' }}>
          You have {state.length} items total and {remaining} remaining.
        </h3>
      )}
    </div>
  );
}

// needs to have count of items + button to clear the list
