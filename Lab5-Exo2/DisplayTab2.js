import React from 'react';

const DisplayTab2 = ({ table }) => {
  return (
    <ul>
      {table.map((element, index) => (
        <li key={index}>Element {index + 1} is: {element}</li>
      ))}
    </ul>
  );
};

export default DisplayTab2;
