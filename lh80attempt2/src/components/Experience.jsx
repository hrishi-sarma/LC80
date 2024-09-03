import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Mesh } from '@react-three/drei';

export const Experience = () => {
  return (
    <Canvas>
      <OrbitControls />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </Canvas>   
  );
};
