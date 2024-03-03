import { useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import userObj from '../../../assets/3dObject/Male.obj';

function Model() {
  const obj = useLoader(OBJLoader, userObj);

  return (
    <mesh>
      <primitive object={obj} position={[0, -5, 0]} scale={0.5} />
    </mesh>
  );
}

function Project3d() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[10, 10, 15]} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
      <OrbitControls />
      <Model />
    </>
  );
}

export default Project3d;
