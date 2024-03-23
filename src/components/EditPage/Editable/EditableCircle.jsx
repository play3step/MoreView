import React, { useRef, useEffect } from 'react';
import { Ellipse, Transformer } from 'react-konva';

function EditableEllipse({ shapeProps, isSelected, onSelect, onChange }) {
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
      <Ellipse
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
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            radiusX: Math.max(5, node.radiusX() * scaleX),
            radiusY: Math.max(5, node.radiusY() * scaleY),
          });

          node.scaleX(1);
          node.scaleY(1);

          shapeRef.current.getLayer().batchDraw();
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
          onTransform={(e) => {
            const node = shapeRef.current;
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();

            if (scaleX < 0.5 || scaleY < 0.5) {
              e.target.scaleX(0.5);
              e.target.scaleY(0.5);
            }
          }}
          boundBoxFunc={(oldBox, newBox) => newBox}
        />
      )}
    </>
  );
}

export default EditableEllipse;
