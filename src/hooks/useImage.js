import { useRecoilState, useRecoilValue } from 'recoil';
import { pageState, imageList } from '../store/recoil';

const useImage = () => {
  const [imgValue, setImgValue] = useRecoilState(imageList);
  const pageData = useRecoilValue(pageState);
  const currentPageImages = imgValue[pageData] || [];

  const addImage = (imgUrl) => {
    const randomX = 600 + (Math.random() * 60 - 30);
    const randomY = 300 + (Math.random() * 60 - 30);
    const imageCountInCurrentPage = currentPageImages.length;

    const newImage = {
      x: randomX,
      y: randomY,
      url: imgUrl,
      width: 300,
      height: 300,
      id: `image${imageCountInCurrentPage + 1}`,
    };

    const updatedImages = {
      ...imgValue,
      [pageData]: [...currentPageImages, newImage],
    };
    setImgValue(updatedImages);
  };

  return { imgValue, addImage };
};

export default useImage;
