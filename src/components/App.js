import React from 'react'
import '../styles/App.css';
import { useRef, useState, useEffect } from 'react';
function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  /**
   * @task : add a counter which counts the number of renders of this component. 
   */
 
  return (
    <div className='App'>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: Show the render count here {count.current}</h1>
    </div>
  );
}


export default App;
