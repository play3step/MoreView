// import styled from 'styled-components';

import { Canvas } from '@react-three/fiber';
import PreviewObj from '../../EditPage/PreviewSlide/atom/PreviewObj';

function MeshyItem({ data }) {
  console.log(data.model_urls);
  return (
    <Canvas
      style={{
        width: '6.25vw',
        height: '6.25vw',
        borderRadius: '4px',
      }}
    >
      <PreviewObj objecturl={data.model_urls} x="0" y="-2" z="-3" />
    </Canvas>
  );
}

export default MeshyItem;
