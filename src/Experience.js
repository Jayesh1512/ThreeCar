import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'

import Model from './Model'


export default function Experience()
{
    
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={0.04} />
        <ambientLight intensity={ 0.5 } />



        <mesh receiveShadow position-y={0} rotation-x={ - Math.PI * 0.5 } scale={ 20 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Suspense 
        fallback = {
            <mesh position-y={0.5} scale={[2,3,2]} >  
                <boxGeometry args={[1,1,1,2,2,2]} />
                <meshBasicMaterial wireframe color={"red"} />             
            </mesh>
                } 
        >
        <Model scale={15} castShadow/>
        </Suspense>
    </>
}