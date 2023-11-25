import React, { useState } from 'react';
import './Buttons.css';

const Buttons = () => {
  const [lastClicked, setLastClicked] = useState(null);

  const handleClick = (buttonNumber) => {
    setLastClicked(`Button ${buttonNumber} was clicked`);
  };

  return (
    <div className='all'>
      <button className="button" onClick={() => handleClick(1)}>Button 1</button>
      <button className="button" onClick={() => handleClick(2)}>Button 2</button>
      <button className="button" onClick={() => handleClick(3)}>Button 3</button>
      <div className='text'>
        {lastClicked && <p>{lastClicked}</p>}
      </div>
    </div>
  );
};

export default Buttons;
