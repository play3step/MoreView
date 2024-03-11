import React, { useState } from 'react';
import { Text } from 'react-konva';

function EditableText({ id, initialText, onTextChange, onDragEnd, x, y }) {
  const [text, setText] = useState(initialText);
  const [editing, setEditing] = useState(false);
  const handleDragEnd = (e) => {
    const newX = e.target.x();
    const newY = e.target.y();
    onDragEnd(id, { x: newX, y: newY });
  };

  const handleDoubleClick = (e) => {
    const stage = e.target.getStage();
    if (!stage) return;

    setEditing(true);
    const textPosition = e.target.getAbsolutePosition();
    const stageBox = stage.container().getBoundingClientRect();
    const areaPosition = {
      x: stageBox.left + textPosition.x,
      y: stageBox.top + textPosition.y,
    };
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.value = text;
    input.style.position = 'absolute';
    input.style.top = `${areaPosition.y}px`;
    input.style.left = `${areaPosition.x}px`;
    input.style.fontSize = '20px';
    input.style.border = 'none';
    input.style.padding = '0';
    input.style.margin = '0';
    input.style.overflow = 'hidden';
    input.style.background = 'none';
    input.focus();

    const removeInput = () => {
      if (input.parentNode) {
        input.parentNode.removeChild(input);
      }
      onTextChange(input.value);
      setEditing(false);
    };

    input.addEventListener('blur', () => {
      setText(input.value);
      removeInput();
    });
  };

  return editing ? null : (
    <Text
      text={text}
      x={x}
      y={y}
      fontSize={20}
      draggable
      onDblClick={handleDoubleClick}
      onDragEnd={handleDragEnd}
    />
  );
}

export default EditableText;
