import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Color, Box3, Vector3 } from 'three';
import { useRecoilState } from 'recoil';

import { LodingState } from '../../../../store/modalState';
import useKeyDown from '../../../../hooks/EditPage/Handlers/useKeyDown';
import useObjectDrag from '../../../../hooks/EditPage/useObjectDrag';

function EditGltfLoader({
  objecturl,
  size,
  x,
  y,
  z,
  setIsDragging,
  setObjectValue,
  pageRendering,
}) {
  const modelRef = useRef();
  const { camera, scene, gl } = useThree();
  const [loadingValue, setLoadingValue] = useRecoilState(LodingState);
  const [gltf, setGltf] = useState(null);
  const [initialScale, setInitialScale] = useState([1, 1, 1]);
  const movement = useRef({ forward: 0, right: 0, up: 0 });
  const gltfUrl =
    typeof objecturl === 'string' ? objecturl : objecturl.gltf || objecturl.glb;

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
        const box = new Box3().setFromObject(loadedGltf.scene);
        const dimensions = new Vector3();
        box.getSize(dimensions);
        const maxDimension = Math.max(dimensions.x, dimensions.y, dimensions.z);

        const scale = 5 / maxDimension;
        loadedGltf.scene.scale.set(scale, scale, scale);

        setGltf(loadedGltf);
        setInitialScale([scale, scale, scale]);
        loadedGltf.scene.position.set(x, y, z); // 초기 위치 설정

        setLoadingValue(false);
      },
      undefined,
      () => {
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

  useObjectDrag({
    modelRef,
    camera,
    domElement: gl.domElement,
    setIsDragging,
    setObjectValue,
    pageRendering,
    objectId: objecturl.id,
  });

  return (
    <mesh ref={modelRef} visible={!loadingValue}>
      {gltf ? (
        <primitive
          object={gltf.scene}
          position={[x, y, z]}
          scale={initialScale.map(
            (s, i) => s * (Array.isArray(size) ? size[i] : size),
          )}
        />
      ) : null}
    </mesh>
  );
}

export default EditGltfLoader;
