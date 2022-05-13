import React, { useState } from 'react';
import { useListContext } from '../context/ListContext';

export default function Item({ item }) {
  const { handleEditItem, handleDeleteItem } = useListContext();
  const [modText, setModText] = useState('');
  const [editing, setEditing] = useState(false);

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

  if (editing) {
    content = (
      // <h3>editing</h3>
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
      <>
        <h3>{item.item}</h3>
        <button onClick={editBtn}>edit</button>
        {/* <button onClick={setEditing(true)}>edit</button> */}
      </>
    );
  }

  return (
    <div>
      {content}
      <button onClick={() => handleDeleteItem(item.id)}>
        delete {item.id}
      </button>
    </div>
  );
}
