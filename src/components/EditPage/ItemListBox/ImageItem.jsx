import styled from 'styled-components';
import { useState } from 'react';
import useImage from '../../../hooks/useImage';
import ImageList from './atom/ImageList';

const initialImgUrl = [
  { url: '/logoImg/logo1.png' },
  { url: '/logoImg/logo2.png' },
  { url: '/logoImg/logo3.png' },
  { url: '/logoImg/logo4.png' },
];

function ImageItem({ menuRef }) {
  const { addImage } = useImage();
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = { url: e.target.result };
        setUploadedImages((prevImages) => [...prevImages, newImage]);
        addImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ItemContainer ref={menuRef}>
      {initialImgUrl.concat(uploadedImages).map((data, index) => (
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
