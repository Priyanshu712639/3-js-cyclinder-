import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as Three from "three"
import { useFrame } from '@react-three/fiber';

const Scene = () => {
    let text=useTexture("./img-1.png");
    let ref= useRef(null)
    useFrame((state,delta)=>{
        ref.current.rotation.y += delta;
    })
  return (
    <group rotation={[0,-1.3,-0.3]}>
    <mesh ref={ref} >
        <cylinderGeometry args={[1, 1, 1, 30, 60, true]} />
        <meshStandardMaterial map={text} transparent side={Three.DoubleSide} />
      </mesh>
      </group>
  )
}

export default Scene