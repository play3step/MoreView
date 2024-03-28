import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
// import EditGltfLoader from './Edit3d/EditGltfLoader';
import EditObjLoader from './Edit3d/EditObjLoader';
import EditGltfLoader from './Edit3d/EditGltfLoader';

function Edit3d({ objecturl }) {
  const { camera } = useThree();

  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isMouseDown) return;
      const { movementX } = event;
      const rotationSpeed = 0.005;
      camera.rotation.y -= movementX * rotationSpeed;
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [camera, isMouseDown]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 0, 20]} />
      <hemisphereLight
        skyColor={0xffffbb}
        groundColor={0x080820}
        intensity={1}
      />
      <directionalLight position={[0, 0, 5]} intensity={5} />
      <directionalLight position={[5, 5, 5]} intensity={5} />
      <directionalLight position={[-5, -5, -5]} intensity={10} />
      {/* <EditGltfLoader objecturl={objecturl} /> */}
      {/* <EditObjLoader objecturl={objecturl} /> */}
      {objecturl?.extension === 'obj' || objecturl?.extension === undefined ? (
        <EditObjLoader objecturl={objecturl} />
      ) : null}
      {objecturl?.extension === 'gltf' ? (
        <EditGltfLoader objecturl={objecturl} />
      ) : null}
    </>
  );
}

export default Edit3d;
