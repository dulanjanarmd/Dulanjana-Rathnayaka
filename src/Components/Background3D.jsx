import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleRing = () => {
  const pointsRef = useRef();

  const count = 2500;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 
      
      let x = (3 + Math.random() * 3) * Math.cos(theta) * Math.sin(phi);
      let y = (3 + Math.random() * 3) * Math.sin(theta) * Math.sin(phi);
      let z = (3 + Math.random() * 3) * Math.cos(phi);

      x *= 2.8;
      y *= 1.2;
      z *= 1.5;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#88ccff"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const AnimatedSphere = () => {
  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#0f0f0f"
          envMapIntensity={1}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.3}
          speed={2}
        />
      </Sphere>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -99, pointerEvents: 'none', background: '#050505' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={2.5} color="#0066ff" />
        
        <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1.5} />
        <ParticleRing />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default Background3D;
