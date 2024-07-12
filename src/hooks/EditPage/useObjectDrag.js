import { useRef, useEffect } from 'react';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { Vector3 } from 'three';

const useObjectDrag = ({
  modelRef,
  camera,
  domElement,
  setIsDragging,
  setObjectValue,
  pageRendering,
  objectId,
  scaleFactor = 0.05,
}) => {
  const controlsRef = useRef();
  const startPosition = useRef(new Vector3());
  const deltaPosition = useRef(new Vector3());

  const handlePositionChange = (id, axis, value) => {
    setObjectValue((prev) => ({
      ...prev,
      [pageRendering]: prev[pageRendering].map((obj) =>
        obj.id === id ? { ...obj, [axis]: value } : obj,
      ),
    }));
  };

  useEffect(() => {
    if (modelRef.current) {
      controlsRef.current = new DragControls(
        [modelRef.current],
        camera,
        domElement,
      );

      controlsRef.current.addEventListener('dragstart', (event) => {
        if (event.object.material && event.object.material.emissive) {
          event.object.material.emissive.set(0xaaaaaa);
        }
        if (typeof setIsDragging === 'function') {
          setIsDragging(true);
        }
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
        handlePositionChange(objectId, 'x', Math.round(object.position.x));
        handlePositionChange(objectId, 'z', Math.round(object.position.z));
      });

      controlsRef.current.addEventListener('dragend', (event) => {
        const { object } = event;

        if (object.material && object.material.emissive) {
          object.material.emissive.set(0x000000);
        }
        if (typeof setIsDragging === 'function') {
          setIsDragging(false);
        }
        // 드래그가 끝난 후 최종 위치를 저장
        handlePositionChange(objectId, 'x', Math.round(object.position.x));
        handlePositionChange(objectId, 'z', Math.round(object.position.z));
      });

      return () => {
        controlsRef.current.dispose();
      };
    }
    // 명시적으로 undefined 반환
    return undefined;
  }, [camera, domElement, modelRef]);

  return controlsRef;
};

export default useObjectDrag;
