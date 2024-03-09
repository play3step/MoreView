import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

function EditableImage({ imageUrl, x, y }) {
  const [image] = useImage(imageUrl, 'Anonymous'); // 이미지 CORS 이슈를 방지하기 위해 crossOrigin을 'Anonymous'로 설정

  const handleDragEnd = (e) => {
    console.log(`New position - x: ${e.target.x()}, y: ${e.target.y()}`);
  };

  return (
    <Image image={image} x={x} y={y} draggable onDragEnd={handleDragEnd} />
  );
}

export default EditableImage;
