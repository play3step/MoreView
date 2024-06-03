import React, { useEffect, useRef, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Color } from 'three';
import { useRecoilState } from 'recoil';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { LodingState } from '../../../../store/modalState';

function PreviewObj({ objecturl, size, x, y, z }) {
  const modelRef = useRef();
  const [loadingValue, setLoadingValue] = useRecoilState(LodingState);
  const [object, setObject] = useState(null);

  const { scene } = useThree();

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

  return (
    <mesh ref={modelRef} visible={!loadingValue}>
      {object ? (
        <primitive object={object} position={[x, y, z]} scale={size} />
      ) : null}
    </mesh>
  );
}

export default PreviewObj;
