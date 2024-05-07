import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Color, Vector3 } from 'three';
import { useRecoilState } from 'recoil';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { LodingState } from '../../../../store/modalState';
import useKeyDown from '../../../../hooks/EditPage/Handlers/useKeyDown';

function EditObjLoader({ objecturl, size }) {
  const modelRef = useRef();
  const { camera } = useThree();
  const [loadingValue, setLoadingValue] = useRecoilState(LodingState);
  const [object, setObject] = useState(null);

  const { scene } = useThree();
  const movement = useRef({ forward: 0, right: 0, up: 0 });

  useEffect(() => {
    scene.background = new Color('#FFFFFF');
  }, [scene]);

  useEffect(() => {
    setLoadingValue(true);

    const materialUrl =
      objecturl?.mtl ||
      `${process.env.PUBLIC_URL}/3dObject/Camera/10124_SLR_Camera_SG_V1_Iteration2.mtl`;
    const loadUrl =
      objecturl?.obj || `${process.env.PUBLIC_URL}/3dObject/Camera/Camera.obj`;

    const mtlLoader = new MTLLoader();
    mtlLoader.load(materialUrl, (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(loadUrl, (obj) => {
        setObject(obj);
        setLoadingValue(false);
      });
    });
  }, [objecturl, setLoadingValue]);

  useEffect(() => {
    if (object) {
      setLoadingValue(false);
    }
  }, [object, setLoadingValue]);

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
      {object && (
        <primitive object={object} position={[0, 0, -1]} scale={size} />
      )}
    </mesh>
  );
}

export default EditObjLoader;
