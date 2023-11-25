import React, { useState } from 'react';
import DisplayTab3 from './DisplayTab3';

const App = () => {
  const [table, setTable] = useState(["hello", "world", "from", "react"]);

  const handleElementClick = (index) => {
    setTable((prevTable) => prevTable.filter((element, i) => i !== index));
  };

  return (
    <div>
      <DisplayTab3 table={table} onElementClick={handleElementClick} />
    </div>
  );
};

export default App;
