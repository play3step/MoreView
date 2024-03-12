import React, { useState } from 'react';
import styled from 'styled-components';
import ItemTitle from './ItemTitle';
import ShapeBox from './ShapeBox';
import ImageBox from './ImageBox';

const initialImgUrl = [
  { url: '/testImage/img1.jpeg' },
  { url: '/testImage/img2.jpeg' },
  { url: '/testImage/img3.png' },
  { url: '/testImage/img4.jpeg' },
  { url: '/testImage/img5.jpeg' },
  { url: '/testImage/img6.jpeg' },
];

function ElementItem({ onAddShape, onAddImg }) {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = { url: e.target.result };
        setUploadedImages((prevImages) => [...prevImages, newImage]);
        onAddImg(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ElementItemBox>
      <Itemposition>
        <ItemTitle title="도형" />
        <ShapeBackground>
          <ShapeBox onClick={() => onAddShape('Rectangle')} shape="Rectangle" />
          <ShapeBox onClick={() => onAddShape('Circle')} shape="Circle" />
          <ShapeBox onClick={() => onAddShape('Line')} shape="Line" />
        </ShapeBackground>
      </Itemposition>
      <Itemposition>
        <ItemTitle title="이미지" />
        <ImgBackground>
          {initialImgUrl.concat(uploadedImages).map((data, index) => (
            <ImageBox
              key={index}
              onClick={() => onAddImg(data.url)}
              imgUrl={data.url}
            />
          ))}
          <input type="file" onChange={handleFileChange} accept="image/*" />
        </ImgBackground>
      </Itemposition>
    </ElementItemBox>
  );
}

export default ElementItem;

const ElementItemBox = styled.div`
  width: 19.5138vw;
`;

const Itemposition = styled.div`
  margin-top: 1.878vh;
`;

const ShapeBackground = styled.div`
  margin-top: 0.6vw;
  height: 8.88888888888889vh;
  background-color: #e9e9e9;
  border-radius: 15px;
  display: flex;
  padding: 1vw;
  gap: 0.5vw;
`;

const ImgBackground = styled.div`
  margin-top: 0.6vw;
  background-color: #e9e9e9;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  padding: 0.5vw 0.5vw 0.5vw 1.4vw;
  gap: 0.6vw;
`;
