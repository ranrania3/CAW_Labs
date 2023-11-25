import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className='all'>
      <button className="button" onClick={handleIncrement}>Inc</button>
      <button className="button" onClick={handleDecrement}>Dec</button>
      <div className='text'>
        <h1>{counter}</h1>
      </div>
    </div>
  );
};

export default Counter;
