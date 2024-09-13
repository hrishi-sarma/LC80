import { Canvas } from "@react-three/fiber";

import React from 'react'


const skillanim = () => {
  return (
    <Canvas>
        <directionalLight position={[0,0,2]} />
        <mesh>
            <boxGeometry />
            <meshStandardMaterial color={"red"} />
        </mesh>
    </Canvas>
    
  )
}

export default skillanim