import React, { createContext, useContext } from 'react';

// Step 1: Create a context
const MyContext = createContext();

// Step 2: Create a component that provides the context values
const MyProvider = ({ children }) => {
  const sharedValue = 'This is a shared value';

  return (
    <MyContext.Provider value={sharedValue}>
      {children}
    </MyContext.Provider>
  );
};

// Step 3: Create a component that consumes the context values using useContext
const MyConsumerComponent = () => {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <p>Context Value: {contextValue}</p>
    </div>
  );
};

// Step 4: Use the provider to wrap the component tree
const Uceg = () => {
  return (
    <MyProvider>
      <MyConsumerComponent />
    </MyProvider>
  );
};

export default Uceg;
