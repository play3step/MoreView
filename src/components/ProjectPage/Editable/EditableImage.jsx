import React, { useRef, useEffect } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

function EditableImage({
  imageUrl,
  x,
  y,
  width,
  height,
  isSelected,
  onSelect,
  onTransformEnd,
  imgItem,
}) {
  const imageRef = useRef(null);
  const transformerRef = useRef(null);
  const [image] = useImage(imageUrl, 'Anonymous');

  useEffect(() => {
    if (isSelected) {
      transformerRef.current.nodes([imageRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Image
        image={image}
        x={x}
        y={y}
        width={width}
        height={height}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        ref={imageRef}
        onDragEnd={(e) => {
          onTransformEnd({
            ...imgItem,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          const node = imageRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          onTransformEnd({
            ...imgItem,
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY,
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={transformerRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => newBox}
        />
      )}
    </>
  );
}

export default EditableImage;
