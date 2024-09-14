import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import './skillanim.css';
import Scene from './Scene.jsx';  // Import your Scene component

const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

const SkillAnim = () => {
  return (
    <Canvas className="canvas" camera={{ position: [0, 1, 5], fov: 60 }}>
      <Ground />
      

      
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      
      {/* Rotating cube */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"red"} />
      </mesh>

      {/* OrbitControls */}
      <OrbitControls />
    </Canvas>
  );
};

export default SkillAnim;
