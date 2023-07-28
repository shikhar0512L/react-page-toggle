import React, { useState } from 'react';

const ColorToggle = () => {
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(true);

  const handleToggleClick = () => {
    setIsBackgroundWhite((prevValue) => !prevValue);
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: isBackgroundWhite ? 'white' : 'indigo',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        cursor: 'pointer',
      }}
      onClick={handleToggleClick}
    >
      Click to Toggle Background Color
    </div>
  );
};

export default ColorToggle;
