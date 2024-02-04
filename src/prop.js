import React from 'react';

// ChildComponent receives and displays the 'message' prop
const ChildComponent = (props) => {
  return (
    <div>
      <p>Message from Parent: {props.message}</p>
    </div>
  );
};

// ParentComponent renders ChildComponent and passes a prop to it
const ParentComponent = () => {
  const messageFromParent = "Hello, child! I'm your parent.";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={messageFromParent} />
    </div>
  );
};

export default ParentComponent;
