import { useRecoilState, useRecoilValue } from 'recoil';
import {
  imageList,
  object3dState,
  shapeList,
  textList,
} from '../../store/recoil';

const useItemValue = () => {
  const objectValue = useRecoilValue(object3dState);
  const [shapeValue, setShapeValue] = useRecoilState(shapeList);
  const [textValue, setTextValue] = useRecoilState(textList);
  const [imgValue, setImgValue] = useRecoilState(imageList);

  return {
    objectValue,
    shapeValue,
    setShapeValue,
    textValue,
    setTextValue,
    imgValue,
    setImgValue,
  };
};

export default useItemValue;
