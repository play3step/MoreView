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
    const getRandomCoordinate = () => Math.floor(Math.random() * 6);

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
      x: getRandomCoordinate(),
      y: getRandomCoordinate(),
      z: getRandomCoordinate(),
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
