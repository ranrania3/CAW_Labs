import React, { useState } from 'react';
import DisplayTab1 from './DisplayTab1';
import DisplayTab2 from './DisplayTab2';

const App = () => {
  const [table] = useState(["hello", "world", "from", "react"]);

  return (
    <div>
      <DisplayTab1 table={table} />
      <DisplayTab2 table={table} />
    </div>
  );
};

export default App;
