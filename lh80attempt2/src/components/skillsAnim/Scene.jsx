import React from 'react';
import { useGLTF } from '@react-three/drei';

const Scene = () => {
  // Ensure the path is correct relative to the public directory
  const { nodes, materials } = useGLTF('/scene.gltf'); 
  
  return (
    <group dispose={null}>
      {/* Replace nodes and materials as per your model's structure */}
      <mesh geometry={nodes.Object_1.geometry}  />
      <mesh geometry={nodes.Object_2.geometry}  />
      {/* You can add more mesh components if your GLTF file contains more objects */}
    </group>
  );
};

useGLTF.preload('/scene.gltf');  // Preload the model to optimize loading time

export default Scene;
