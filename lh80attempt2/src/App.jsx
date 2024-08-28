import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Canvas>
          <Experience />
          
        </Canvas>
        </div>
    </>
  )
}

export default App
