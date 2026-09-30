import React from 'react';

const Background3D = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -99, overflow: 'hidden', background: '#f5f0ff' }}>
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(230,225,255,1) 0%, rgba(200,210,255,0.8) 50%, rgba(255,255,255,0) 70%)', filter: 'blur(60px)', animation: 'float 20s infinite alternate' }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '70vw', height: '70vw', background: 'radial-gradient(circle, rgba(255,225,240,1) 0%, rgba(240,210,255,0.6) 50%, rgba(255,255,255,0) 70%)', filter: 'blur(80px)', animation: 'float 25s infinite alternate-reverse' }} />
      <div style={{ position: 'absolute', top: '20%', right: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(210,240,255,0.8) 0%, rgba(220,230,255,0) 70%)', filter: 'blur(50px)', animation: 'float 15s infinite alternate' }} />
      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(5%, 10%) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Background3D;
