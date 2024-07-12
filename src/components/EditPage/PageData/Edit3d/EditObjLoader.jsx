import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Color, Box3, Vector3 } from 'three';
import { useRecoilState } from 'recoil';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { LodingState } from '../../../../store/modalState';
import useKeyDown from '../../../../hooks/EditPage/Handlers/useKeyDown';
import useObjectDrag from '../../../../hooks/EditPage/useObjectDrag';

function EditObjLoader({
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
  const { camera, gl } = useThree();
  const [loadingValue, setLoadingValue] = useRecoilState(LodingState);
  const [object, setObject] = useState(null);
  const [initialScale, setInitialScale] = useState([1, 1, 1]);

  const { scene } = useThree();
  const movement = useRef({ forward: 0, right: 0, up: 0 });

  useEffect(() => {
    scene.background = new Color('#FFFFFF');
  }, [scene]);

  useEffect(() => {
    if (!objecturl?.obj) {
      setLoadingValue(false);
      setObject(null);
      return;
    }

    setLoadingValue(true);

    const materialUrl = objecturl?.mtl || null;
    const loadUrl = objecturl?.obj || null;

    const loadModel = () => {
      const objLoader = new OBJLoader();
      const onLoad = (obj) => {
        const box = new Box3().setFromObject(obj);
        const dimensions = new Vector3();
        box.getSize(dimensions);
        const maxDimension = Math.max(dimensions.x, dimensions.y, dimensions.z);

        const scale = 5 / maxDimension;
        obj.scale.set(scale, scale, scale);

        setObject(obj);
        setInitialScale([scale, scale, scale]);
        setLoadingValue(false);
      };

      if (materialUrl) {
        const mtlLoader = new MTLLoader();
        mtlLoader.load(materialUrl, (materials) => {
          materials.preload();
          objLoader.setMaterials(materials);
          objLoader.load(loadUrl, onLoad);
        });
      } else {
        objLoader.load(loadUrl, onLoad);
      }
    };

    loadModel();
  }, [objecturl, setLoadingValue]);

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
      {object ? (
        <primitive
          object={object}
          position={[x, y, z]}
          scale={initialScale.map(
            (s, i) => s * (Array.isArray(size) ? size[i] : size),
          )}
        />
      ) : null}
    </mesh>
  );
}

export default EditObjLoader;
