import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
import { Avatar } from '../Avatar';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
        <group
          rotation={[-0.01, 0.75, -0.1]}>
          <primitive
            object={computer.scene}
            scale={0.75}
            position={[0, -3.25, -1.5]}
            
          />
          <Avatar/>
        </group>
      
      

    </mesh>
  )  
}
const ComputersCanvas = () =>
{
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers />

      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas;