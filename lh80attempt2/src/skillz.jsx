import { Canvas } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, BakeShadows, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { suspend } from 'suspend-react'
import { Instances, Computers } from './Computers'
import './skillz.css';

const suzi = import('@pmndrs/assets/models/bunny.glb')

export default function App() {
  return (
    <Canvas className='canvas2' shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }} eventSource={document.getElementById('root')} eventPrefix="client">
      {/* Lights */}
      <color attach="background" args={['black']} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      
      {/* Main scene */}
      <group position={[-0, -1, 0]}>
        {/* Auto-instanced sketchfab model */}
        <Instances>
          <Computers scale={0.5} />
        </Instances>
        
        {/* Plane reflections + distance blur */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            resolution={2048}
            mixStrength={180}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
          />
        </mesh>
        
        {/* Bunny and a light give it more realism */}
        <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="orange" />
      </group>
      
      {/* Postprocessing */}
      <EffectComposer disableNormalPass>
        
      </EffectComposer>
      
      {/* Camera movements */}
      <OrbitControls enableDamping dampingFactor={0.1} enableZoom={false} />
      
      {/* Small helper that freezes the shadows for better performance */}
      <BakeShadows />
    </Canvas>
  )
}

function Bun(props) {
  const { nodes } = useGLTF(suspend(suzi).default)
  console.log(nodes)
  return (
    <mesh receiveShadow castShadow geometry={nodes.mesh.geometry} {...props}>
      <meshStandardMaterial color="#222" roughness={0.5} />
    </mesh>
  )
}
