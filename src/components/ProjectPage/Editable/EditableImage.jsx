import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

function EditableImage({ id, imageUrl, x, y, width, height, onDragEnd }) {
  const [image] = useImage(imageUrl, 'Anonymous');

  const handleDragEnd = (e) => {
    onDragEnd(id, { x: e.target.x(), y: e.target.y() });
  };

  return (
    <Image
      image={image}
      x={x}
      y={y}
      width={width}
      height={height}
      draggable
      onDragEnd={handleDragEnd}
    />
  );
}

export default EditableImage;
