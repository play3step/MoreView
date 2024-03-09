import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

function EditableImage({ id, imageUrl, x, y, onDragEnd }) {
  const [image] = useImage(imageUrl, 'Anonymous');

  const handleDragEnd = (e) => {
    onDragEnd(id, { x: e.target.x(), y: e.target.y() });
  };

  return (
    <Image image={image} x={x} y={y} draggable onDragEnd={handleDragEnd} />
  );
}

export default EditableImage;
