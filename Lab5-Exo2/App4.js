import React from 'react';
import DisplayTab4 from './DisplayTab4';

const App = () => {
  const table1 = ["Ran", "Youss", "Raja"];
  const table2 = ["turtle", "bunny", "kitten", "puppy"];

  return (
    <div>
        
      <h4>exercice 2-4</h4>
      <DisplayTab4 table={table1} />
      <DisplayTab4 table={table2} />
    </div>
  );
};

export default App;
