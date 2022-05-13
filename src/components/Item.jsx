import React, { useEffect, useState } from 'react';
import { useListContext } from '../context/ListContext';

export default function Item({ item }) {
  const { handleEditItem, handleDeleteItem, handleComplete } = useListContext();
  const [modText, setModText] = useState('');
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState('');

  // const deleteBtn = () => {
  //   handleDeleteItem()
  // }

  // edit button onClick =>
  // Return an html element
  // h3 needs to turn into input preloaded with the existing text
  // local state for editing text
  // edit button needs to turn to "save"
  // onClick for save needs to pass the id and new text to handleEditItem function
  let content;

  const saveBtn = () => {
    handleEditItem({ id: item.id, item: modText });
    setEditing(false);
  };
  const editBtn = () => {
    setModText(item.item);

    setEditing(true);
  };
  // const checkOff = () => {
  //   XXXXXXXXXX;
  // };
  const handleToggle = () => {
    handleComplete({ id: item.id, complete: !item.complete });
  };
  useEffect(() => {
    if (item.complete) {
      setStatus('line-through');
    } else {
      setStatus('none');
    }
  }, [item.complete]);

  if (editing) {
    content = (
      <>
        <input
          value={modText}
          onChange={(e) => setModText(e.target.value)}
        ></input>
        <button onClick={saveBtn}>Save Changes</button>
      </>
    );
  } else {
    content = (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {item.complete ? (
          <input
            aria-label={`${item.item} checked`}
            type={'checkbox'}
            onClick={handleToggle}
            checked
          ></input>
        ) : (
          <input
            aria-label={`${item.item} not-checked`}
            type={'checkbox'}
            onClick={handleToggle}
          ></input>
        )}
        <h3 style={{ textDecoration: `${status}`, marginLeft: '15px' }}>
          {item.item}
        </h3>
        <button
          aria-label={`button to edit ${item.item}`}
          style={{ marginLeft: '15px' }}
          onClick={editBtn}
        >
          edit
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      {content}
      <button
        aria-label={`button to delete ${item.item}`}
        style={{ marginLeft: '15px', marginTop: '17px', height: '25px' }}
        onClick={() => handleDeleteItem(item.id)}
      >
        delete
      </button>
    </div>
  );
}
