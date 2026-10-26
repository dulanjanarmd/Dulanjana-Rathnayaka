import React from 'react';

const Background3D = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -99, overflow: 'hidden', background: 'linear-gradient(135deg, #020914 0%, #061224 100%)' }} />
  );
};

export default Background3D;
