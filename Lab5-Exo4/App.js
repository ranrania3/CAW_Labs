import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [divs, setDivs] = useState([]);
  const [divStyle, setDivStyle] = useState({
    height: '',
    width: '',
    backgroundColor: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDivStyle({
      ...divStyle,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (divStyle.height && divStyle.width && divStyle.backgroundColor) {
      const newDiv = { ...divStyle };
      setDivs([...divs, newDiv]);
      setDivStyle({
        height: '',
        width: '',
        backgroundColor: '',
      });
    } else {
      console.error('Please fill in all fields.');
    }
  };

  return (
    <div className="app-container">
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="form-label">
          Height:
          <input
            type="text"
            name="height"
            value={divStyle.height}
            onChange={handleInputChange}
          />
        </label><br />
        <label>
          Width:
          <input
            type="text"
            name="width"
            value={divStyle.width}
            onChange={handleInputChange}
          />
        </label><br />
        <label>
          Background-Color:
          <input
            type="text"
            name="backgroundColor"
            value={divStyle.backgroundColor}
            onChange={handleInputChange}
          />
        </label><br />
        <button type="submit" className="submit-button">
  Add Div
</button>
      </form>
      <div>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              height: div.height,
              width: div.width,
              backgroundColor: div.backgroundColor,
              margin: '10px',
              border: '1px solid #000',
            }}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
