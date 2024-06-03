import { useRecoilState, useRecoilValue } from 'recoil';
import { object3dState, pageState } from '../../store/recoil';

const useObject = () => {
  const [objectValue, setObjectValue] = useRecoilState(object3dState);
  const pageData = useRecoilValue(pageState);
  const currentPageObject = objectValue[pageData] || [];

  const addObject = (
    objUrl,
    objMtl,
    objBin,
    gltfUrl,
    extensionUrl,
    urlsData,
    texturesUrl,
  ) => {
    const ObjectCountInCurrentPage = currentPageObject.length;

    const newObject = {
      id: `object${ObjectCountInCurrentPage + 1}`,
      obj: objUrl,
      mtl: objMtl,
      gltf: gltfUrl,
      bin: objBin,
      extension: extensionUrl,
      urls: urlsData,
      textures: texturesUrl,
      size: 0.25,
      x: 0,
      y: 0,
      z: -1,
    };
    const updatedImages = {
      ...objectValue,
      [pageData]: [...currentPageObject, newObject],
    };
    setObjectValue(updatedImages);
  };
  return { objectValue, addObject };
};

export default useObject;
