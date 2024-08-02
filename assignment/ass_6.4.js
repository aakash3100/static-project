import React, { useState } from 'react';

const ListAndEventHandling = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" value={newItem} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ListAndEventHandling;
