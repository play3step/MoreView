import React, { useRef, useEffect } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Color } from 'three';
import { useRecoilState } from 'recoil';
import { LodingState } from '../../../../store/modalState';

function PreviewGltf({ objecturl, size, x, y, z }) {
  const modelRef = useRef();
  const { scene } = useThree();
  const [loadingValue, setLoadingValue] = useRecoilState(LodingState);
  const gltfUrl = typeof objecturl === 'string' ? objecturl : objecturl.gltf;
  const gltf = useLoader(GLTFLoader, gltfUrl);

  useEffect(() => {
    scene.background = new Color('#FFFFFF');
    setLoadingValue(true);
    if (gltf) {
      setLoadingValue(false);
    }
  }, [gltf, scene, setLoadingValue]);

  return (
    <mesh ref={modelRef} visible={!loadingValue}>
      <primitive object={gltf.scene} position={[x, y, z]} scale={size} />
    </mesh>
  );
}

export default PreviewGltf;
