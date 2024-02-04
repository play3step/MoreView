import React, { useState } from 'react';
import { Text } from 'react-konva';

function EditableText({ initialText, onTextChange }) {
  const [text, setText] = useState(initialText);

  const handleDoubleClick = (e) => {
    const textPosition = e.target.getAbsolutePosition();
    const stageBox = e.target.getStage().container().getBoundingClientRect();

    const areaPosition = {
      x: stageBox.left + textPosition.x,
      y: stageBox.top + textPosition.y,
    };

    // textarea 생성
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);

    // textarea 초기 설정
    textarea.value = text;
    textarea.style.position = 'absolute';
    textarea.style.top = `${areaPosition.y}px`;
    textarea.style.left = `${areaPosition.x}px`;
    textarea.style.width = '100px'; // 적절한 크기 설정
    textarea.style.height = '20px'; // 적절한 크기 설정
    textarea.style.fontSize = '20px'; // Konva Text와 일치하게 설정
    textarea.focus();
    const removeTextarea = () => {
      textarea.parentNode.removeChild(textarea);
      onTextChange(textarea.value);
    };

    textarea.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        setText(textarea.value);
        removeTextarea();
      } else if (event.key === 'Escape') {
        removeTextarea();
      }
    });

    textarea.addEventListener('blur', () => {
      setText(textarea.value);
      removeTextarea();
    });
  };

  return (
    <Text
      text={text}
      x={50}
      y={80}
      fontSize={20}
      draggable
      onDblClick={handleDoubleClick}
    />
  );
}

export default EditableText;
