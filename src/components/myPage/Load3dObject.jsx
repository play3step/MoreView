import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function Model() {
  const modelRef = useRef();
  const obj = useLoader(
    OBJLoader,
    `${process.env.PUBLIC_URL}/3dObject/Camera.obj`,
  );
  useFrame(() => {
    modelRef.current.rotation.y += 0; // 프레임마다 오브젝트의 y축 회전값 업데이트
  });

  return (
    <mesh ref={modelRef}>
      <primitive object={obj} position={[0, 0, 0]} scale={0.03} />
    </mesh>
  );
}

function Load3dObject() {
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
      <OrbitControls />
    </Canvas>
  );
}

export default Load3dObject;
