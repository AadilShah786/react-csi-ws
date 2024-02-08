import React, { useState, useEffect } from 'react';

function IncrementEffect(prop){
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // This effect will run whenever the counter reaches a value of 5
    if (counter === 5) {
      alert('Counter reached 5!');
    }

    // The return function in useEffect can be used for cleanup
    return () => {
      console.log('Effect cleanup');
    };
  }, [counter]); // The effect will re-run whenever the counter value changes

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default IncrementEffect;
