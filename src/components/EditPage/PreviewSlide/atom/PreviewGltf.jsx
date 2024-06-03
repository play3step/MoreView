import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Color, Vector3 } from 'three';
import { useRecoilState } from 'recoil';
import { LodingState } from '../../../../store/modalState';

function PreviewGltf({ objecturl, size, x, y, z }) {
  const modelRef = useRef();
  const { camera, scene } = useThree();
  const [loadingValue, setLoadingValue] = useRecoilState(LodingState);
  const movement = useRef({ forward: 0, right: 0, up: 0 });

  const gltfUrl = typeof objecturl === 'string' ? objecturl : objecturl.gltf;
  const gltf = useLoader(GLTFLoader, gltfUrl);

  useEffect(() => {
    scene.background = new Color('#FFFFFF');
    setLoadingValue(true);
    if (gltf) {
      setLoadingValue(false);
    }
  }, [gltf, scene, setLoadingValue]);
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
  return (
    <mesh ref={modelRef} visible={!loadingValue}>
      <primitive object={gltf.scene} position={[x, y, z]} scale={size} />
    </mesh>
  );
}

export default PreviewGltf;
