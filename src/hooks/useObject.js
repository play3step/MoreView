import { useRecoilState, useRecoilValue } from 'recoil';
import { object3dState, pageState } from '../store/recoil';

const useObject = () => {
  const [objectValue, setObjectValue] = useRecoilState(object3dState);
  const pageData = useRecoilValue(pageState);
  const currentPageObject = objectValue[pageData] || [];

  const addObject = (objectUrl) => {
    const ObjectCountInCurrentPage = currentPageObject.length;

    const newObject = {
      url: objectUrl,
      id: `object${ObjectCountInCurrentPage + 1}`,
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
