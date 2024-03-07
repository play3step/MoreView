import React, { useState } from 'react';
import { Line } from 'react-konva';

function EditableLine({ points, stroke }) {
  const [isDragging, setDragging] = useState(false);

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  return (
    <Line
      points={points}
      stroke={stroke}
      strokeWidth={8}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      listening={!isDragging}
    />
  );
}

export default EditableLine;
