import { PerspectiveCamera } from '@react-three/drei';
import PreviewObj from './PreviewObj';
import PreviewGltf from './PreviewGltf';

function Preview3d({ objecturl }) {
  const objectList = Object.values(objecturl || {});
  console.log(objecturl);
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
      <directionalLight position={[-5, -5, -5]} intensity={5} />

      {objectList?.map((url, index) =>
        url?.extension === 'obj' || url?.extension === undefined ? (
          <PreviewObj
            key={index}
            objecturl={url}
            size={url.size}
            x={url.x}
            y={url.y}
            z={url.z}
          />
        ) : url?.extension === 'gltf' ? (
          <PreviewGltf
            key={index}
            objecturl={url}
            size={url.size}
            x={url.x}
            y={url.y}
            z={url.z}
          />
        ) : null,
      )}
    </>
  );
}

export default Preview3d;
