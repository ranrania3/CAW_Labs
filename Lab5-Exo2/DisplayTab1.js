import React from 'react';

const DisplayTab1 = ({ table }) => {
  return (
    <ul >
      {table.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
};

export default DisplayTab1;
