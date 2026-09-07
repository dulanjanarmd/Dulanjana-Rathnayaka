import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Background3D = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -99, pointerEvents: 'none', background: '#050505' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
};

export default Background3D;
