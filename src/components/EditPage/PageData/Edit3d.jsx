import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useRecoilValue } from 'recoil';
import { Euler } from 'three';
import EditObjLoader from './Edit3d/EditObjLoader';
import EditGltfLoader from './Edit3d/EditGltfLoader';
import { objectSizeState } from '../../../store/toolState';

function Edit3d({ objecturl }) {
  const { camera } = useThree();
  const dataSize = useRecoilValue(objectSizeState);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const sensitivity = 0.002;
    const euler = new Euler(0, 0, 0, 'YXZ');

    const handleMouseMove = (event) => {
      if (!isMouseDown) return;

      const { movementX, movementY } = event;

      euler.setFromQuaternion(camera.quaternion);

      euler.y -= movementX * sensitivity;
      euler.x -= movementY * sensitivity;

      euler.x = Math.max(Math.PI / -2, Math.min(Math.PI / 2, euler.x));

      camera.quaternion.setFromEuler(euler);
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
      <directionalLight position={[0, 0, 5]} intensity={dataSize.light} />
      <directionalLight position={[5, 5, 5]} intensity={dataSize.light} />
      <directionalLight position={[-5, -5, -5]} intensity={dataSize.light} />
      {objecturl?.extension === 'obj' || objecturl?.extension === undefined ? (
        <EditObjLoader objecturl={objecturl} size={dataSize.size} />
      ) : null}
      {objecturl?.extension === 'gltf' ? (
        <EditGltfLoader objecturl={objecturl} size={dataSize.size} />
      ) : null}
    </>
  );
}

export default Edit3d;
