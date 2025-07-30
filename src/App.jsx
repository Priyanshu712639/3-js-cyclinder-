import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import * as Three from "three"
import Scene from './Scene'
import { Bloom, ToneMapping } from '@react-three/postprocessing'
import { EffectComposer } from '@react-three/postprocessing'

const App = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 30 }} >
        <OrbitControls enenableZoom={false} />
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            intensity={2.0} luminanceThreshold={0} luminanceSmoothing={0}
            mipmapBlur
          />

        </EffectComposer>
      </Canvas>
      <div className='w-full bg-black  py-32'>
        <h1 className='capitalize bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent absolute top-[10%] left-[50%] -translate-x-[50%] z-2 text-4xl font-mono leading-none tracking-tighter font-semibold'>Welcome to my portfolio</h1>
        <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent absolute top-[50%] left-[2%] -translate-y-[50%] z-2 text-[13vw] font-mono leading-none tracking-tighter font-semibold'>This</h1>
        <h1 className=' absolute top-[50%] right-[2%] -translate-y-[52%] z-2 text-[10vw] font-mono leading-none tracking-tighter font-semibold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent'>Effect</h1>
        <h1 className='capitalize absolute bottom-4 left-[50%] -translate-x-[50%] z-2 text-xl font-mono leading-none tracking-tighter font-semibold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent'>Is made by Priyanshu Tanwar</h1>

      </div>
    </>
  )
}

export default App
