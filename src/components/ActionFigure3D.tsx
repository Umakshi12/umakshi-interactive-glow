
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

const ActionFigureModel = ({ isAnimated = false }: { isAnimated?: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const laptopRef = useRef<THREE.Group>(null);
  const sareeRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && isAnimated) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    }
    if (laptopRef.current && isAnimated) {
      laptopRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
    if (sareeRef.current && isAnimated) {
      sareeRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} scale={[0.8, 0.8, 0.8]}>
      {/* Base platform */}
      <Cylinder args={[0.8, 0.8, 0.1]} position={[0, -0.8, 0]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Cylinder>
      
      {/* Name plate */}
      <Box args={[1.2, 0.08, 0.15]} position={[0, -0.7, 0.4]}>
        <meshStandardMaterial color="#8B7355" />
      </Box>

      {/* Body */}
      <Cylinder args={[0.15, 0.18, 0.4]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#F5F5DC" />
      </Cylinder>

      {/* Saree - main drape */}
      <group ref={sareeRef}>
        <Cylinder args={[0.25, 0.3, 0.6]} position={[0, -0.3, 0]}>
          <meshStandardMaterial color="#FFFFFF" />
        </Cylinder>
        
        {/* Saree border - golden stripes */}
        <Cylinder args={[0.26, 0.31, 0.05]} position={[0, -0.55, 0]}>
          <meshStandardMaterial color="#FFD700" />
        </Cylinder>
        
        {/* Pallu (over shoulder drape) */}
        <Box args={[0.15, 0.4, 0.02]} position={[0.2, 0.1, 0]} rotation={[0, 0, -0.3]}>
          <meshStandardMaterial color="#008B8B" />
        </Box>
      </group>

      {/* Head */}
      <Sphere args={[0.12]} position={[0, 0.35, 0]}>
        <meshStandardMaterial color="#DEB887" />
      </Sphere>

      {/* Hair */}
      <Sphere args={[0.13]} position={[0, 0.4, -0.05]} scale={[1, 1.2, 0.8]}>
        <meshStandardMaterial color="#2F1B14" />
      </Sphere>

      {/* Glasses */}
      <Box args={[0.15, 0.05, 0.02]} position={[0, 0.38, 0.1]}>
        <meshStandardMaterial color="#333333" transparent opacity={0.3} />
      </Box>

      {/* Arms */}
      <Cylinder args={[0.03, 0.03, 0.25]} position={[-0.22, 0.05, 0]} rotation={[0, 0, -0.3]}>
        <meshStandardMaterial color="#DEB887" />
      </Cylinder>
      <Cylinder args={[0.03, 0.03, 0.25]} position={[0.22, 0, 0]} rotation={[0, 0, 0.5]}>
        <meshStandardMaterial color="#DEB887" />
      </Cylinder>

      {/* Laptop in hand */}
      <group ref={laptopRef} position={[0.35, 0.1, 0.1]} rotation={[0, -0.3, 0]}>
        <Box args={[0.12, 0.08, 0.01]}>
          <meshStandardMaterial color="#2a2a2a" />
        </Box>
        <Box args={[0.12, 0.08, 0.01]} position={[0, 0.05, 0.02]} rotation={[-0.3, 0, 0]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
      </group>

      {/* AI/ML Brain symbol */}
      <group position={[-0.5, 0.2, 0]}>
        <Box args={[0.15, 0.3, 0.15]} position={[0, -0.15, 0]}>
          <meshStandardMaterial color="#2a2a2a" />
        </Box>
        <Sphere args={[0.06]} position={[0, 0.05, 0.08]} scale={[1, 0.8, 1]}>
          <meshStandardMaterial color="#87CEEB" />
        </Sphere>
      </group>

      {/* Books stack */}
      <group position={[0.4, -0.4, 0.3]}>
        <Box args={[0.08, 0.02, 0.12]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#8B0000" />
        </Box>
        <Box args={[0.08, 0.02, 0.12]} position={[0, 0.02, 0]}>
          <meshStandardMaterial color="#008B8B" />
        </Box>
        <Box args={[0.08, 0.02, 0.12]} position={[0, 0.04, 0]}>
          <meshStandardMaterial color="#DAA520" />
        </Box>
      </group>

      {/* Fitness dumbbell */}
      <group position={[0.4, -0.4, -0.3]}>
        <Cylinder args={[0.02, 0.02, 0.12]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#2a2a2a" />
        </Cylinder>
        <Sphere args={[0.03]} position={[-0.06, 0, 0]}>
          <meshStandardMaterial color="#2a2a2a" />
        </Sphere>
        <Sphere args={[0.03]} position={[0.06, 0, 0]}>
          <meshStandardMaterial color="#2a2a2a" />
        </Sphere>
      </group>
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
  return (
    <div className={`${className}`} style={{ width: size, height: size }}>
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 1]} intensity={0.8} />
        <pointLight position={[-1, 1, 1]} intensity={0.3} color="#FFD700" />
        <ActionFigureModel isAnimated={isAnimated} />
      </Canvas>
    </div>
  );
};

export default ActionFigure3D;
