import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { Color, Vector3 } from 'three';
// import { useRecoilState } from 'recoil';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { LodingState } from '../../../store/recoil';

// import EditObjLoader from './Edit3d/EditObjLoader';
import EditGltfLoader from './Edit3d/EditGltfLoader';

// function Model({ objecturl }) {
//   const modelRef = useRef();
//   const { camera } = useThree();
//   const [loadingValue, setLoadingValue] = useRecoilState(LodingState);
//   const { scene } = useThree();
//   const movement = useRef({ forward: 0, right: 0, up: 0 });
//   const [object, setObject] = useState(null);

//   useEffect(() => {
//     scene.background = new Color('#FFFFFF');
//   }, [scene]);
//   useEffect(() => {
//     setLoadingValue(true);
//     const loadUrl =
//       objecturl?.obj ||
//       objecturl?.gltf ||
//       `${process.env.PUBLIC_URL}/3dObject/shiba/scene.gltf`;
//     const materialUrl =
//       objecturl?.mtl ||
//       objecturl?.bin ||
//       `${process.env.PUBLIC_URL}/3dObject/Camera/10124_SLR_Camera_SG_V1_Iteration2.mtl`;
//     const extension = objecturl?.extension || 'gltf';
//     if (extension === 'obj') {
//       const mtlLoader = new MTLLoader();
//       mtlLoader.load(materialUrl, (materials) => {
//         materials.preload();
//         const objLoader = new OBJLoader();
//         objLoader.setMaterials(materials);
//         objLoader.load(loadUrl, (obj) => {
//           setObject(obj);
//           setLoadingValue(false);
//         });
//       });
//     }

//     if (extension === 'gltf') {
//       const gltfLoader = new GLTFLoader();
//       gltfLoader.load(loadUrl, (obj) => {
//         setObject(obj);
//         setLoadingValue(false);
//       });
//     }
//   }, [objecturl, setLoadingValue]);

//   useEffect(() => {
//     if (object) {
//       setLoadingValue(false);
//     }
//   }, [object, setLoadingValue]);

//   useFrame(() => {
//     if (!modelRef.current) return;
//     const speed = 0.1;
//     const direction = new Vector3(
//       movement.current.right,
//       movement.current.up,
//       movement.current.forward,
//     ).applyQuaternion(camera.quaternion);

//     modelRef.current.position.addScaledVector(direction, speed);
//   });

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       switch (event.key) {
//         case 'w':
//           movement.current.forward = 0.5;
//           break;
//         case 's':
//           movement.current.forward = -0.5;
//           break;
//         case 'a':
//           movement.current.right = 0.5;
//           break;
//         case 'd':
//           movement.current.right = -0.5;
//           break;
//         case 'Shift':
//           movement.current.up = -0.5;
//           break;
//         case 'Control':
//           movement.current.up = 0.5;
//           break;
//         default:
//           break;
//       }
//     };

//     const handleKeyUp = (event) => {
//       switch (event.key) {
//         case 'w':
//         case 's':
//           movement.current.forward = 0;
//           break;
//         case 'a':
//         case 'd':
//           movement.current.right = 0;
//           break;
//         case 'Shift':
//         case 'Control':
//           movement.current.up = 0;
//           break;
//         default:
//           break;
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('keyup', handleKeyUp);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <mesh ref={modelRef} visible={!loadingValue}>
//       {object && <primitive object={object} position={[0, 0, -1]} scale={1} />}
//     </mesh>
//   );
// }

function Edit3d({ objecturl }) {
  const { camera } = useThree();

  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isMouseDown) return;
      const { movementX } = event;
      const rotationSpeed = 0.005;
      camera.rotation.y -= movementX * rotationSpeed;
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [camera, isMouseDown]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 0, 20]} />
      <hemisphereLight
        skyColor={0xffffbb}
        groundColor={0x080820}
        intensity={1}
      />
      <directionalLight position={[0, 0, 5]} intensity={5} />
      <directionalLight position={[5, 5, 5]} intensity={5} />
      <directionalLight position={[-5, -5, -5]} intensity={10} />
      <EditGltfLoader objecturl={objecturl} />
      {/* <EditObjLoader objecturl={objecturl} /> */}
    </>
  );
}

export default Edit3d;
