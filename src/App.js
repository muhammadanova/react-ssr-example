import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={increment} className="button-custom">Increment</button>
      <button onClick={decrement} className="button-custom">Decrement</button>
    </div>
  );
}

export default App;
