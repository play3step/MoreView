import React, { useRef, useEffect } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

function EditableImage({
  id,
  imageUrl,
  x,
  y,
  width,
  height,
  isSelected,
  onSelect,
  onTransformEnd,
}) {
  const imageRef = useRef(null);
  const transformerRef = useRef(null);
  const [image] = useImage(imageUrl, 'Anonymous');

  useEffect(() => {
    if (isSelected) {
      // 이미지가 선택되면 Transformer를 현재 이미지에 맞춥니다.
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
          onTransformEnd(id, {
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          const node = e.target;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          onTransformEnd(id, {
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
          boundBoxFunc={(oldBox, newBox) => newBox}
        />
      )}
    </>
  );
}

export default EditableImage;
