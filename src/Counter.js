import React, { useState } from 'react';
// import Datafetcher from './useeffect';

const Counter = () => {
  // useState returns an array with two elements: the current state value and a function that lets you update it.
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // The setCount function is used to update the state value.
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      {/* <Datafetcher num={count}/> */}
    </div>
  );
};

export default Counter;
