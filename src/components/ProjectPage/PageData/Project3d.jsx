import React, { useEffect, useRef } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Vector3 } from 'three';
import userObj from '../../../assets/3dObject/home3d.obj';

function Model() {
  const obj = useLoader(OBJLoader, userObj);
  const modelRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!modelRef.current) return;
      const speed = 0.5;

      const forward = new Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
      const right = new Vector3(1, 0, 0).applyQuaternion(camera.quaternion);

      switch (event.key) {
        case 'w':
          modelRef.current.position.add(forward.multiplyScalar(-speed));
          break;
        case 's':
          modelRef.current.position.add(forward.multiplyScalar(speed));
          break;
        case 'a':
          modelRef.current.position.add(right.multiplyScalar(speed));
          break;
        case 'd':
          modelRef.current.position.add(right.multiplyScalar(-speed));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      if (!modelRef.current) return;
      const speed = 0.5;
      if (event.key === 'Shift') {
        modelRef.current.position.add(new Vector3(0, -speed, 0));
      } else if (event.key === 'Control') {
        modelRef.current.position.add(new Vector3(0, speed, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [camera]);

  return (
    <mesh ref={modelRef}>
      <primitive object={obj} position={[0, 0, 0]} scale={0.5} />
    </mesh>
  );
}

function Project3d() {
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0, 0);
    }
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[10, 10, 15]} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
      <OrbitControls ref={controlsRef} />
      <Model />
    </>
  );
}

export default Project3d;
