import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Color, Vector3 } from 'three';
import { useRecoilState } from 'recoil';
import { LodingState } from '../../../../store/modalState';
import useKeyDown from '../../../../hooks/EditPage/Handlers/useKeyDown';

function EditGltfLoader({ objecturl, size, x, y, z }) {
  const modelRef = useRef();
  const { camera, scene } = useThree();
  const [loadingValue, setLoadingValue] = useRecoilState(LodingState);
  const [gltf, setGltf] = useState(null);
  const movement = useRef({ forward: 0, right: 0, up: 0 });
  const gltfUrl = typeof objecturl === 'string' ? objecturl : objecturl.gltf;

  useEffect(() => {
    scene.background = new Color('#FFFFFF');
    if (!gltfUrl) {
      setLoadingValue(false);
      setGltf(null);
      return;
    }

    setLoadingValue(true);
    const loader = new GLTFLoader();
    loader.load(
      gltfUrl,
      (loadedGltf) => {
        setGltf(loadedGltf);
        setLoadingValue(false);
      },
      undefined,
      (error) => {
        console.error('An error happened', error);
        setLoadingValue(false);
        setGltf(null);
      },
    );
  }, [gltfUrl, scene, setLoadingValue]);

  useFrame(() => {
    if (!modelRef.current) return;
    const speed = 0.1;
    const direction = new Vector3(
      movement.current.right,
      movement.current.up,
      movement.current.forward,
    ).applyQuaternion(camera.quaternion);
    modelRef.current.position.addScaledVector(direction, speed);
  });

  useKeyDown(movement, modelRef);

  return (
    <mesh ref={modelRef} visible={!loadingValue}>
      {gltf ? (
        <primitive object={gltf.scene} position={[x, y, z]} scale={size} />
      ) : null}
    </mesh>
  );
}

export default EditGltfLoader;
