import React, { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import userObj from '../../../assets/3dObject/home3d.obj';

function Model() {
  const obj = useLoader(OBJLoader, userObj);

  return (
    <mesh>
      <primitive object={obj} position={[0, 0, 0]} scale={0.5} />
    </mesh>
  );
}

function Project3d() {
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0, 0);
    }
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[10, 10, 15]} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
      <OrbitControls ref={controlsRef} />
      <Model />
    </>
  );
}

export default Project3d;
