// EditableCircle.js 파일

import React, { useRef, useEffect } from 'react';
import { Circle, Transformer } from 'react-konva';

function EditableCircle({ shapeProps, isSelected, onSelect, onChange }) {
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Circle
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          const node = shapeRef.current;
          const radius = Math.max(5, node.radius());

          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            radius,
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          anchorSize={8}
          enabledAnchors={[
            'middle-left',
            'middle-right',
            'top-center',
            'bottom-center',
          ]}
          rotateEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.radius < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
}

export default EditableCircle;
