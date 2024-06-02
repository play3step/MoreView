import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import useImage from '../../../../hooks/AddItem/useImage';
import ImageList from './atom/ImageList';
import { imageState } from '../../../../store/initialState';

function ImageItem({ menuRef }) {
  const { addImage } = useImage();
  const [images, setImages] = useRecoilState(imageState);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = { url: e.target.result };
        setImages((prevImages) => [...prevImages, newImage]);
        addImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ItemContainer ref={menuRef}>
      {images.map((data, index) => (
        <ImageList
          key={index}
          onClick={() => addImage(data.url)}
          imgUrl={data.url}
        />
      ))}
      <input type="file" onChange={handleFileChange} accept="image/*" />
    </ItemContainer>
  );
}

export default ImageItem;

const ItemContainer = styled.div`
  width: 21.458333333333332vw;
  padding: 1.1458333333333333vw;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-content: center;
  align-items: center;
  gap: 2.5vw;
  z-index: 999;
  background-color: #ffffff;
`;
