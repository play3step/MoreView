// import styled from 'styled-components';

import { Canvas } from '@react-three/fiber';
import PreviewObj from '../../EditPage/PreviewSlide/atom/PreviewObj';
import useObject from '../../../hooks/AddItem/useObject';

function MeshyItem({ data }) {
  const { addObject } = useObject();

  const handlePreviewClick = (object) => {
    addObject(
      object.obj,
      object.mtl,
      object.bin,
      object.urls.gltf,
      object.type,
      object.urls,
    );
  };
  console.log(data.model_urls);
  return (
    <Canvas
      style={{
        width: '6.25vw',
        height: '6.25vw',
        borderRadius: '4px',
      }}
      onClick={() => handlePreviewClick(data.model_urls)}
    >
      <hemisphereLight
        skyColor={0xffffbb}
        groundColor={0x080820}
        intensity={0.35}
      />
      <directionalLight position={[0, 0, 5]} intensity={5} />
      <directionalLight position={[5, 5, 5]} intensity={5} />
      <directionalLight position={[-5, -5, -5]} intensity={5} />
      <PreviewObj objecturl={data.model_urls} x="0" y="-2" z="-3" />
    </Canvas>
  );
}

export default MeshyItem;
