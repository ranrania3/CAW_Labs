import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClickMeButton from './ClickMeButton';
import ToggleButton from './ToggleButton';
import Buttons from './Buttons';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClickMeButton />
    <ToggleButton />
    <Buttons />
    <Counter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
