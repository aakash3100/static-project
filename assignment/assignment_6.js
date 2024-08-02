import React from 'react';

const BasicEventHandling = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const handleInputChange = (event) => {
    console.log('Input value:', event.target.value);
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered div!');
  };

  const handleMouseLeave = () => {
    console.log('Mouse left div!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <br />
      <input type="text" onChange={handleInputChange} placeholder="Type something..." />
      <br />
      <div
        style={{ width: '200px', height: '200px', backgroundColor: 'lightblue' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me!
      </div>
    </div>
  );
};

export default BasicEventHandling;
