import React, { useEffect,useState } from 'react';
import './App.css';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const itemList = [
    { name: 'Apple', price: '$10' },
    { name: 'Banana', price: '$20' },
    { name: 'Coconut', price: '$15' },
  ];

  return (
    <div className="App">
      <div className="item-list">
        <h2>Item List</h2>
        <ul>
          {itemList.map((item, index) => (
            <li key={index} onClick={() => setSelectedItem(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="item-details">
        <h2>Item Details</h2>
        {selectedItem ? (
          <>
            <p>Item Name: {selectedItem.name}</p>
            <p>Item Price: {selectedItem.price}</p>
          </>
        ) : (
          <p>Select an item to view details.</p>
        )}
      </div>
    </div>
  );
}

export default App;
