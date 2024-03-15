import React, { useEffect, useRef } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Vector3 } from 'three';

function Model() {
  const obj = useLoader(
    OBJLoader,
    `${process.env.PUBLIC_URL}/3dObject/home3d.obj`,
  );
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
  const { camera } = useThree();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { movementX, movementY } = event;
      const rotationSpeed = 0.005;

      camera.rotation.y -= movementX * rotationSpeed;
      camera.rotation.x -= movementY * rotationSpeed;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [camera]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[10, 10, 15]} />
      <hemisphereLight
        skyColor={0xffffbb}
        groundColor={0x080820}
        intensity={1}
      />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
      <Model />
    </>
  );
}

export default Project3d;
