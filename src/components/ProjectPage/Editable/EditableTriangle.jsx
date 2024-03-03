import React, { useRef, useEffect } from 'react';
import { Line, Transformer } from 'react-konva';

function EditableTriangle({ shapeProps, isSelected, onSelect, onChange }) {
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
      <Line
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        points={shapeProps.points}
        closed
        fill={shapeProps.fill}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            points: e.target.points(),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          enabledAnchors={[
            'middle-left',
            'middle-right',
            'top-center',
            'bottom-center',
          ]}
          anchorSize={8}
          rotateEnabled={false}
          boundBoxFunc={(oldBox, newBox) => newBox}
        />
      )}
    </>
  );
}

export default EditableTriangle;
