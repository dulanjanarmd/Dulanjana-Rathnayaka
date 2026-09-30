import React from 'react';

const Background3D = () => {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: -99, 
        pointerEvents: 'none', 
        background: 'linear-gradient(135deg, #2b2b2b 0%, #1a1a1a 50%, #0d0d0d 100%)' 
      }} 
    />
  );
};

export default Background3D;
