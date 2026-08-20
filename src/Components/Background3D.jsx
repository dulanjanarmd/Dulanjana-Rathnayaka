import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// 1. The Sun (Pulsating Tech Star)
const GlowingSun = () => {
  const sunRef = useRef();
  const glowRef = useRef();
  
  useFrame((state, delta) => {
    sunRef.current.rotation.y += delta * 0.2;
    sunRef.current.rotation.x += delta * 0.1;
    
    // Pulse the outer glow
    const t = state.clock.getElapsedTime();
    const scale = 1.2 + Math.sin(t * 2) * 0.05;
    glowRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group>
      <mesh ref={sunRef}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.4} blending={THREE.AdditiveBlending} wireframe />
      </mesh>
      <pointLight intensity={5} distance={100} color="#00e5ff" />
    </group>
  );
};

// 2. Futuristic Planet
const Planet = ({ orbitRadius, orbitSpeed, size, color, wireframe = false, hasRing = false, tilt = 0 }) => {
  const groupRef = useRef();
  const planetRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    // Orbit around the sun
    groupRef.current.rotation.y += delta * orbitSpeed;
    // Planet's own rotation
    planetRef.current.rotation.y += delta * 1.5;
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* The actual planet */}
      <group position={[orbitRadius, 0, 0]} rotation={[0, 0, tilt]}>
        <mesh ref={planetRef}>
          <sphereGeometry args={[size, 32, 32]} />
          {wireframe ? (
            <meshBasicMaterial color={color} wireframe transparent opacity={0.8} blending={THREE.AdditiveBlending} />
          ) : (
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
          )}
        </mesh>
        
        {/* Holographic Ring */}
        {hasRing && (
          <mesh ref={ringRef} rotation={[Math.PI / 2.2, 0, 0]}>
            <torusGeometry args={[size * 1.8, 0.02, 16, 100]} />
            <meshBasicMaterial color={color} transparent opacity={0.9} blending={THREE.AdditiveBlending} />
          </mesh>
        )}
      </group>
      
      {/* Orbit Line */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[orbitRadius, 0.01, 16, 120]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.06} />
      </mesh>
    </group>
  );
};

// 3. Tech Asteroid Belt / Data Stream
const GalaxyDust = () => {
  const pointsRef = useRef();
  const count = 5000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 9 + Math.random() * 20; // Spread from r=9 to r=29
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 3; // Vertical spread
      
      pos[i * 3] = radius * Math.cos(theta);
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = radius * Math.sin(theta);
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    pointsRef.current.rotation.y -= delta * 0.03;
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
        size={0.03}
        color="#aa00ff"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
};

// 4. Cinematic Camera Controller
const CinematicCamera = () => {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Slowly orbit the camera around the solar system
    state.camera.position.x = Math.sin(t * 0.05) * 25;
    state.camera.position.z = Math.cos(t * 0.05) * 25;
    // Slowly bob up and down
    state.camera.position.y = 8 + Math.sin(t * 0.1) * 6;
    
    // Always look at the center (the sun)
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

const Background3D = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -99, pointerEvents: 'none', background: '#020202' }}>
      <Canvas camera={{ position: [0, 10, 30], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.15} />
        
        {/* Animated Camera */}
        <CinematicCamera />
        
        {/* Deep Space Stars */}
        <Stars radius={150} depth={50} count={8000} factor={6} saturation={1} fade speed={2} />
        
        {/* Center Star */}
        <GlowingSun />
        
        {/* Inner Data Planet */}
        <Planet orbitRadius={6} orbitSpeed={0.8} size={0.5} color="#00ffcc" wireframe />
        
        {/* Medium Standard Planet */}
        <Planet orbitRadius={10} orbitSpeed={0.4} size={1.2} color="#3377ff" />
        
        {/* Giant Holographic Ringed Planet */}
        <Planet orbitRadius={16} orbitSpeed={0.2} size={1.8} color="#ff00aa" wireframe hasRing tilt={0.4} />
        
        {/* Outer Gas Giant */}
        <Planet orbitRadius={24} orbitSpeed={0.1} size={2.2} color="#ffaa00" hasRing tilt={-0.2} />
        
        {/* Asteroid Belt */}
        <GalaxyDust />
      </Canvas>
    </div>
  );
};

export default Background3D;
