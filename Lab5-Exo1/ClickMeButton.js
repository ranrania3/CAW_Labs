import React, { useState } from 'react';
import './ClickMeButton.css';
const ClickMeButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className='all'>
      <button className="button" onClick={handleClick}>ClickMe</button>
      <div className= 'text'>
      {clicked && <p>Clicked</p>}</div>
    </div>
  );
};

export default ClickMeButton;
