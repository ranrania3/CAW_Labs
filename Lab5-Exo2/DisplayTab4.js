import React from 'react';

const DisplayTab4 = ({ table }) => {
  return (
    <div>
      <ul>
        {table.map((element, index) => (
          <li key={index}>
            Element {index + 1} is: {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTab4;
