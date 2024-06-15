import React, { useEffect, useRef, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Color, Box3, Vector3 } from 'three';
import { useRecoilState } from 'recoil';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { LodingState } from '../../../../store/modalState';

function PreviewObj({ objecturl, x, y, z }) {
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

    const loadModel = () => {
      const objLoader = new OBJLoader();
      const onLoad = (obj) => {
        // 모델의 경계 계산
        const box = new Box3().setFromObject(obj);
        const size = new Vector3();
        box.getSize(size);
        const maxDimension = Math.max(size.x, size.y, size.z);

        const scale = 5 / maxDimension;

        obj.scale.set(scale, scale, scale);

        setObject(obj);
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

  useEffect(() => {
    if (object) {
      setLoadingValue(false);
    }
  }, [object, setLoadingValue]);

  return (
    <mesh ref={modelRef} visible={!loadingValue}>
      {object ? <primitive object={object} position={[x, y, z]} /> : null}
    </mesh>
  );
}

export default PreviewObj;
