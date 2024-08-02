import React, { useState } from 'react';

const DynamicStyling = () => {
  const [boxStyles, setBoxStyles] = useState(Array(4).fill({ backgroundColor: 'lightblue', width: '100px', height: '100px', margin: '10px', cursor: 'pointer' }));

  const handleClick = (index) => {
    const newBoxStyles = [...boxStyles];
    newBoxStyles[index] = { ...newBoxStyles[index], backgroundColor: 'lightgreen' };
    setBoxStyles(newBoxStyles);
  };

  const handleDoubleClick = (index) => {
    const newBoxStyles = [...boxStyles];
    newBoxStyles[index] = { ...newBoxStyles[index], width: '150px', height: '150px' };
    setBoxStyles(newBoxStyles);
  };

  const handleContextMenu = (event, index) => {
    event.preventDefault();
    const newBoxStyles = [...boxStyles];
    newBoxStyles[index] = { ...newBoxStyles[index], backgroundColor: 'lightblue', width: '100px', height: '100px' };
    setBoxStyles(newBoxStyles);
  };

  return (
    <div>
      {boxStyles.map((style, index) => (
        <div
          key={index}
          style={style}
          onClick={() => handleClick(index)}
          onDoubleClick={() => handleDoubleClick(index)}
          onContextMenu={(event) => handleContextMenu(event, index)}
        >
          Box {index + 1}
        </div>
      ))}
    </div>
  );
};

export default DynamicStyling;
