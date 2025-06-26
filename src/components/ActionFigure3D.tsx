
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ActionFigureModel = ({ isAnimated = false }: { isAnimated?: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [error, setError] = useState(false);

  useFrame((state) => {
    if (groupRef.current && isAnimated && !error) {
      try {
        groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
      } catch (err) {
        console.error('Animation error:', err);
        setError(true);
      }
    }
  });

  if (error) {
    return null;
  }

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} scale={[0.8, 0.8, 0.8]}>
      {/* Base platform */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.18, 0.4]} />
        <meshStandardMaterial color="#F5F5DC" />
      </mesh>

      {/* Saree */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.25, 0.3, 0.6]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      
      {/* Saree border */}
      <mesh position={[0, -0.55, 0]}>
        <cylinderGeometry args={[0.26, 0.31, 0.05]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.35, 0]}>
        <sphereGeometry args={[0.12]} />
        <meshStandardMaterial color="#DEB887" />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 0.4, -0.05]} scale={[1, 1.2, 0.8]}>
        <sphereGeometry args={[0.13]} />
        <meshStandardMaterial color="#2F1B14" />
      </mesh>

      {/* Glasses */}
      <mesh position={[0, 0.38, 0.1]}>
        <boxGeometry args={[0.15, 0.05, 0.02]} />
        <meshStandardMaterial color="#333333" transparent opacity={0.3} />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.22, 0.05, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.03, 0.03, 0.25]} />
        <meshStandardMaterial color="#DEB887" />
      </mesh>
      <mesh position={[0.22, 0, 0]} rotation={[0, 0, 0.5]}>
        <cylinderGeometry args={[0.03, 0.03, 0.25]} />
        <meshStandardMaterial color="#DEB887" />
      </mesh>

      {/* Laptop */}
      <mesh position={[0.35, 0.1, 0.1]} rotation={[0, -0.3, 0]}>
        <boxGeometry args={[0.12, 0.08, 0.01]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </group>
  );
};

const ActionFigure3D = ({ 
  size = 60, 
  isAnimated = false, 
  className = "" 
}: { 
  size?: number; 
  isAnimated?: boolean; 
  className?: string; 
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset error state when component remounts
    setHasError(false);
  }, []);

  if (hasError) {
    // Fallback to a simple colored circle if 3D fails
    return (
      <div 
        className={`${className} rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center`}
        style={{ width: size, height: size }}
      >
        <span className="text-white text-xs font-bold">U</span>
      </div>
    );
  }

  return (
    <div className={`${className}`} style={{ width: size, height: size }}>
      <Canvas 
        camera={{ position: [0, 0, 2], fov: 50 }}
        onCreated={({ gl }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }}
        onError={() => setHasError(true)}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 1]} intensity={0.8} />
        <pointLight position={[-1, 1, 1]} intensity={0.3} color="#FFD700" />
        <ActionFigureModel isAnimated={isAnimated} />
      </Canvas>
    </div>
  );
};

export default ActionFigure3D;
