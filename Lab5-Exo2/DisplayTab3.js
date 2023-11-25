import React from 'react';

const DisplayTab3 = ({ table, onElementClick }) => {
  const handleElementClick = (index) => {
    onElementClick(index);
  };

  return (
    <div>
      <h4>Click any element to remove it</h4>
      <ul style={{ cursor: 'pointer' }}>
        {table.map((element, index) => (
          <li key={index} onClick={() => handleElementClick(index)}>
            Element {index + 1} is: {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTab3;
