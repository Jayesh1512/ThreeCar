/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Ipatov Kirill (https://sketchfab.com/nesya100)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/alfa-romeo-stradale-1967-fbb6adc7a6e84c3db6969e1debcd364b
Title: Alfa Romeo Stradale 1967
*/

import React, { useRef } from "react";
import { useGLTF , Clone } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const model = useGLTF("/hamburger.glb");

  const car = useRef()

  useFrame(()=>{
    car.current.rotation.y += 0.001
  })
  return (
    <>
    <Clone ref = {car} object  = {model.scene} scale = {15} />
    <Clone object = {model.scene} scale = {15} position-x={-4}/>
    <Clone object = {model.scene} scale = {15} position-x={4}/>

    </>
  );
}

useGLTF.preload("/hamburger.glb");
