import { useRecoilState, useRecoilValue } from 'recoil';
import { pageState, imageList } from '../../store/recoil';
import { postFile } from '../../apis/Project/ProjectController';

const useImage = (socket, code) => {
  const [imgValue, setImgValue] = useRecoilState(imageList);
  const pageData = useRecoilValue(pageState);
  const currentPageImages = imgValue[pageData] || [];
  const randomX = 600 + (Math.random() * 60 - 30);
  const randomY = 300 + (Math.random() * 60 - 30);
  const imageCountInCurrentPage = currentPageImages.length;

  const addImage = (imgUrl) => {
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
  const sendImage = async (file) => {
    try {
      const fileUrl = await postFile(file);
      const imageData = {
        saveType: 'saveImage',
        editType: '0',
        deleteType: '0',
        roomId: code,
        image: {
          imageId: pageData,
          pageId: pageData,
          projecId: pageData,
          id: `image${imageCountInCurrentPage + 1}`,
          imageUri: fileUrl,
          x: randomX,
          y: randomY,
          width: 300,
          height: 300,
        },
      };
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(imageData));
      } else {
        console.error('WebSocket is not open');
      }
    } catch (error) {
      console.error('Image upload failed', error);
    }
  };

  return { imgValue, addImage, sendImage };
};

export default useImage;
