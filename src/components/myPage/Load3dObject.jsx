import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function Model() {
  const modelRef = useRef();
  const materials = useLoader(
    MTLLoader,
    `${process.env.PUBLIC_URL}/3dObject/Camera/10124_SLR_Camera_SG_V1_Iteration2.mtl`,
  );
  const object = useLoader(
    OBJLoader,
    `${process.env.PUBLIC_URL}/3dObject/Camera/Camera.obj`,
    (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    },
  );

  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={modelRef}>
      <primitive object={object} position={[0, 0, -1]} scale={0.03} />
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
