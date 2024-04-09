import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Color, Vector3 } from 'three';
import { useRecoilState } from 'recoil';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { LodingState } from '../../../../store/recoil';

function EditObjLoader({ objecturl }) {
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
      {object && (
        <primitive object={object} position={[0, 0, -1]} scale={0.25} />
      )}
    </mesh>
  );
}

export default EditObjLoader;
