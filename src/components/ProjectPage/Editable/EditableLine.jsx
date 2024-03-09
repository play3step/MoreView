import React, { useState } from 'react';
import { Line, Circle } from 'react-konva';

function EditableLine({ points, stroke, onLineUpdate }) {
  const [isDragging, setDragging] = useState(false);

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  // 원(앵커 포인트)의 드래그 이벤트 핸들러
  const handleAnchorDragMove = (index, e) => {
    const newPoints = [...points];
    newPoints[index * 2] = e.target.x();
    newPoints[index * 2 + 1] = e.target.y();

    onLineUpdate(newPoints);
  };

  return (
    <>
      <Line
        points={points}
        stroke={stroke}
        strokeWidth={8}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        listening={!isDragging}
      />
      {points.map(
        (point, index) =>
          index % 2 === 0 && (
            <Circle
              key={index}
              x={points[index]}
              y={points[index + 1]}
              radius={10}
              fill="red"
              draggable
              onDragMove={(e) => handleAnchorDragMove(index / 2, e)}
            />
          ),
      )}
    </>
  );
}

export default EditableLine;
