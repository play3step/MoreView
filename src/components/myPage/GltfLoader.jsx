import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
function Model() {
  const modelRef = useRef();

  const gltf = useLoader(
    GLTFLoader,
    `${process.env.PUBLIC_URL}/3dObject/shiba/scene.gltf`,
  );
  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });

  const changeHandler = (e) => {
    e.object.material.color.setHex(`0x${getRandomColor()}`);
  };
  return (
    <mesh ref={modelRef} onClick={changeHandler}>
      <primitive object={gltf.scene} scale={1} />;
    </mesh>
  );
}

function GltfLoader() {
  return (
    <Canvas
      style={{
        width: '68.75vw',
        height: '51.85185185185185vh',
        backgroundColor: '#FFFFFF',
        marginLeft: '6.25vw',
        marginTop: '3.2407407407407405vh',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }}
      camera={{ position: [0, 0, 4], fov: 50 }}
    >
      <Model />
      <OrbitControls />
    </Canvas>
  );
}
export default GltfLoader;
