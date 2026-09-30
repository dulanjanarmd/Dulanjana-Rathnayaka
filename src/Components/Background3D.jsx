import React from 'react';

const Background3D = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -99, overflow: 'hidden', background: 'linear-gradient(135deg, #020914 0%, #061224 100%)' }}>
      
      {/* Huge curved sweeping wave on the left */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '-30%',
        width: '80vw',
        height: '140vh',
        borderRadius: '50%',
        boxShadow: '100px 0px 150px -50px rgba(197, 17, 98, 0.4), inset -50px 0 100px rgba(247, 151, 30, 0.4)',
        borderRight: '40px solid #f7971e',
        borderBottom: '40px solid #c51162',
        opacity: 0.25
      }} />

      {/* Sweeping wave on the bottom right */}
      <div style={{
        position: 'absolute',
        bottom: '-40%',
        right: '-10%',
        width: '80vw',
        height: '80vh',
        borderRadius: '50%',
        boxShadow: '-100px -50px 150px -50px rgba(197, 17, 98, 0.4), inset 50px 50px 100px rgba(255, 215, 0, 0.3)',
        borderLeft: '40px solid #c51162',
        borderTop: '40px solid #ffd700',
        opacity: 0.25
      }} />

    </div>
  );
};

export default Background3D;
