import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Color, Vector3 } from 'three';
import { useRecoilState } from 'recoil';
import { LodingState } from '../../../../store/recoil';

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
    modelRef.current.rotation.y += 0.01;
    const speed = 0.1;
    const direction = new Vector3(
      movement.current.right,
      movement.current.up,
      movement.current.forward,
    ).applyQuaternion(camera.quaternion);
    modelRef.current.position.addScaledVector(direction, speed);
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'w':
          movement.current.forward = 1;
          break;
        case 's':
          movement.current.forward = -1;
          break;
        case 'a':
          movement.current.right = 1;
          break;
        case 'd':
          movement.current.right = -1;
          break;
        case 'Shift':
          movement.current.up = -1;
          break;
        case 'Control':
          movement.current.up = 1;
          break;
        case 'r':
          if (modelRef.current) {
            modelRef.current.position.set(0, 0, -1);
          }
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.key) {
        case 'w':
        case 's':
          movement.current.forward = 0;
          break;
        case 'a':
        case 'd':
          movement.current.right = 0;
          break;
        case 'Shift':
        case 'Control':
          movement.current.up = 0;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <mesh ref={modelRef} visible={!loadingValue}>
      <primitive object={gltf.scene} scale={size} />
    </mesh>
  );
}

export default EditGltfLoader;
