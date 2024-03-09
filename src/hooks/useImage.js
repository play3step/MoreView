import { useRecoilState, useRecoilValue } from 'recoil';
import { pageState, imageList } from '../store/recoil';

const useImage = () => {
  const [imgValue, setImgValue] = useRecoilState(imageList);
  const pageData = useRecoilValue(pageState);
  const currentPageImages = imgValue[pageData] || [];

  const addImage = () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    const imageCountInCurrentPage = currentPageImages.length;

    const newImage = {
      x: randomX,
      y: randomY,
      url: 'https://placekitten.com/200/300',
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
