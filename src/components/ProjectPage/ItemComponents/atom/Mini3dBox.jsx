import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function Model() {
  const obj = useLoader(
    OBJLoader,
    `${process.env.PUBLIC_URL}/3dObject/Male.obj`,
  );
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={modelRef}>
      <primitive object={obj} position={[0, -2, 0]} scale={0.2} />
    </mesh>
  );
}

function Mini3dBox({ onAddObject }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onAddObject(reader.result);
    };
  };
  return (
    <>
      <Canvas
        style={{
          width: '5.208333333333334vw',
          height: '9.25925925925926vh',
          backgroundColor: '#D9D9D9',
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <hemisphereLight
          skyColor={0xffffbb}
          groundColor={0x080820}
          intensity={1}
        />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} />
        <Model />
      </Canvas>
      <input type="file" onChange={handleFileChange} accept=".obj" />
    </>
  );
}

export default Mini3dBox;
