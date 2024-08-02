import React, { useState } from 'react';

const ConditionalRendering = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const resetState = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && <p>Here is some hidden text!</p>}
      <button onClick={resetState}>Reset</button>
    </div>
  );
};

export default ConditionalRendering;
