import React, { useState } from 'react';
import { Text } from 'react-konva';
import { useSetRecoilState } from 'recoil';

import { toolState } from '../../../store/toolState';

function EditableText({ id, initialText, onTextChange, onDragEnd, x, y }) {
  const [text, setText] = useState(initialText.text);
  const [editing, setEditing] = useState(false); // 개별 컴포넌트에 대한 로컬 상태

  const setTool = useSetRecoilState(toolState);

  const handleDragEnd = (e) => {
    const newX = e.target.x();
    const newY = e.target.y();
    onDragEnd(id, { x: newX, y: newY });
  };

  const handleDoubleClick = (e) => {
    const stage = e.target.getStage();
    if (!stage) return;
    setEditing(true);
    setTool({
      state: true,
    });
    const textPosition = e.target.getAbsolutePosition();
    const stageBox = stage.container().getBoundingClientRect();
    const scale = stage.scaleX();

    const areaPosition = {
      x: (stageBox.left + window.scrollX + textPosition.x) * scale,
      y: (stageBox.top + window.scrollY + textPosition.y) * scale,
    };
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.value = text;
    textarea.style.position = 'absolute';
    textarea.style.top = `${areaPosition.y}px`;
    textarea.style.left = `${areaPosition.x}px`;
    textarea.style.fontSize = `${initialText.size}px`;
    textarea.style.border = 'none';
    textarea.style.color = initialText.color;
    textarea.style.padding = '0';
    textarea.style.margin = '0';
    textarea.style.overflow = 'hidden';
    textarea.style.resize = 'none';
    textarea.style.whiteSpace = 'pre-wrap';
    textarea.style.background = 'none';

    textarea.focus();

    const span = document.createElement('span');
    span.style.fontSize = `${initialText.size}px`;
    span.style.whiteSpace = 'pre-wrap';
    span.style.visibility = 'hidden';

    document.body.appendChild(span);

    const adjustSize = () => {
      span.textContent = textarea.value;
      textarea.style.width = `${span.offsetWidth + 10}px`;
      textarea.style.height = `${span.offsetHeight + 10}px`;
    };

    adjustSize(); // 초기 크기 조절
    textarea.addEventListener('input', adjustSize); // 입력 시 크기 조절

    const removeTextarea = () => {
      if (textarea.parentNode) {
        textarea.parentNode.removeChild(textarea);
      }
      if (span.parentNode) {
        span.parentNode.removeChild(span);
      }
      onTextChange(textarea.value);
      setEditing(false);
      setTool({
        state: false,
      });
    };

    textarea.addEventListener('blur', () => {
      setText(textarea.value);
      removeTextarea();
    });
  };

  return (
    !editing && (
      <Text
        text={text}
        x={x}
        y={y}
        fontSize={initialText.size}
        fill={initialText.color}
        draggable
        onDblClick={handleDoubleClick}
        onDragEnd={handleDragEnd}
      />
    )
  );
}

export default EditableText;
