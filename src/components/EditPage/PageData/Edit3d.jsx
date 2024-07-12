import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useRecoilValue } from 'recoil';
import { Euler } from 'three';
import EditObjLoader from './Edit3d/EditObjLoader';
import EditGltfLoader from './Edit3d/EditGltfLoader';
import { objectSizeState } from '../../../store/toolState';

function Edit3d({ objecturl, setObjectValue, pageRendering }) {
  const { camera } = useThree();
  const dataSize = useRecoilValue(objectSizeState);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const sensitivity = 0.002;
    const euler = new Euler(0, 0, 0, 'YXZ');

    const handleMouseMove = (event) => {
      if (!isMouseDown || isDragging) return;

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
  }, [camera, isMouseDown, isDragging]);
  const objectList = Object.values(objecturl || {});

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <hemisphereLight
        skyColor={0xffffbb}
        groundColor={0x080820}
        intensity={1}
      />
      <directionalLight position={[0, 0, 5]} intensity={dataSize.light} />
      <directionalLight position={[5, 5, 5]} intensity={dataSize.light} />
      <directionalLight position={[-5, -5, -5]} intensity={dataSize.light} />

      {objectList?.map((url, index) =>
        url?.extension === 'obj' || url?.extension === undefined ? (
          <EditObjLoader
            key={index}
            objecturl={url}
            size={url.size}
            x={url.x}
            y={url.y}
            z={url.z}
          />
        ) : url?.extension === 'gltf' ? (
          <EditGltfLoader
            key={index}
            objecturl={url}
            size={url.size}
            x={url.x}
            y={url.y}
            z={url.z}
            setIsDragging={setIsDragging}
            setObjectValue={setObjectValue}
            pageRendering={pageRendering}
          />
        ) : null,
      )}
    </>
  );
}

export default Edit3d;
