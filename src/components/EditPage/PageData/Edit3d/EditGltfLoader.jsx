import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Color, Vector3 } from 'three';
import { useRecoilState } from 'recoil';
import { LodingState } from '../../../../store/modalState';
import useKeyDown from '../../../../hooks/EditPage/Handlers/useKeyDown';

function EditGltfLoader({ objecturl, size }) {
  const modelRef = useRef();
  const { camera, scene } = useThree();
  const [loadingValue, setLoadingValue] = useRecoilState(LodingState);
  const movement = useRef({ forward: 0, right: 0, up: 0 });
  const gltfUrl = typeof objecturl === 'string' ? objecturl : objecturl.gltf;
  const gltf = useLoader(GLTFLoader, gltfUrl);

  useEffect(() => {
    scene.background = new Color('#FFFFFF');
    setLoadingValue(true);
    // GLTF 모델이 로드됨을 감지하고 로딩 상태를 업데이트
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
  useKeyDown(movement, modelRef);
  return (
    <mesh ref={modelRef} visible={!loadingValue}>
      <primitive object={gltf.scene} position={[0, 0, -1]} scale={size} />
    </mesh>
  );
}

export default EditGltfLoader;
