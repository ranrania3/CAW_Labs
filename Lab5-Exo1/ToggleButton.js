import React, { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div className='all'>
      <button className="button" onClick={handleClick}>
        ClickMe
      </button>
      {clickCount > 0 && (
        <div className={`text ${clickCount % 2 === 1 ? 'clicked' : 'notClicked'}`}>
          {clickCount % 2 === 1 ? 'Clicked' : 'Not Clicked'}
        </div>
      )}
    </div>
  );
};

export default ToggleButton;
