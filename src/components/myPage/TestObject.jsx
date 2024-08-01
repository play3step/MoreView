import { Canvas } from '@react-three/fiber';

import {
  Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
} from '@react-three/drei';
import { useControls } from 'leva';
import { useEffect } from 'react';

function Model() {
  const model = useGLTF('./models/model.glb');
  const animations = useAnimations(model.animations, model.scene);

  const { actionName } = useControls({
    actionName: {
      value: animations.names[1],
      options: animations.names,
    },
  });

  useEffect(() => {
    const action = animations.actions[actionName];
    action.reset().fadeIn(0.5).play();
    return () => {
      action.fadeOut(0.5);
    };
  }, [actionName]);
  return (
    <>
      <Environment preset="sunset" />
      <primitive scale={4} object={model.scene} position={[0, -3.5, 0]} />
    </>
  );
}

function TestObject() {
  return (
    <Canvas
      style={{
        width: '27.08vw',
        height: '37.037vh',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.25)',
      }}
      camera={{ position: [4, 4, 10], fov: 50 }}
    >
      <Model />
      <OrbitControls />
    </Canvas>
  );
}
export default TestObject;
