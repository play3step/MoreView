import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Color, Box3, Vector3 } from 'three';
import { useRecoilState } from 'recoil';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { LodingState } from '../../../../store/modalState';
import useKeyDown from '../../../../hooks/EditPage/Handlers/useKeyDown';

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
  const gltfUrl = typeof objecturl === 'string' ? objecturl : objecturl.gltf;
  const controlsRef = useRef();
  const startPosition = useRef(new Vector3());
  const deltaPosition = useRef(new Vector3());
  const scaleFactor = 0.05; // 이동 축소 비율

  const handlePositionChange = (id, axis, value) => {
    setObjectValue((prev) => ({
      ...prev,
      [pageRendering]: prev[pageRendering].map((obj) =>
        obj.id === id ? { ...obj, [axis]: value } : obj,
      ),
    }));
  };

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

  useEffect(() => {
    if (modelRef.current) {
      controlsRef.current = new DragControls(
        [modelRef.current],
        camera,
        gl.domElement,
      );

      controlsRef.current.addEventListener('dragstart', (event) => {
        event.object.material.emissive.set(0xaaaaaa);
        setIsDragging(true);
        startPosition.current.copy(event.object.position);
      });

      controlsRef.current.addEventListener('drag', (event) => {
        const { object } = event;
        object.position.y = 0; // y축 고정

        deltaPosition.current.set(
          (object.position.x - startPosition.current.x) * scaleFactor,
          0,
          (object.position.z - startPosition.current.z) * scaleFactor,
        );

        object.position.x = startPosition.current.x + deltaPosition.current.x;
        object.position.z = startPosition.current.z + deltaPosition.current.z;

        // 여기에서 실시간으로 위치를 저장
        handlePositionChange(objecturl.id, 'x', Math.round(object.position.x));
        handlePositionChange(objecturl.id, 'z', Math.round(object.position.z));
      });

      controlsRef.current.addEventListener('dragend', (event) => {
        const { object } = event;

        event.object.material.emissive.set(0x000000);
        setIsDragging(false);
        // 드래그가 끝난 후 최종 위치를 저장
        handlePositionChange(objecturl.id, 'x', Math.round(object.position.x));
        handlePositionChange(objecturl.id, 'z', Math.round(object.position.z));
      });

      return () => {
        controlsRef.current.dispose();
      };
    }
    return undefined;
  }, [camera, gl]);

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
