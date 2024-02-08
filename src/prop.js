import React from 'react';

// ChildComponent receives and displays the 'message' prop
function ChildComponent({message}){   //(prop)
  return (
    <div>
      <h1>Child Component</h1>
      <p>Message from Parent: {message}</p>
    </div>
  );
};



export default ChildComponent;
