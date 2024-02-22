import React, { useState } from 'react';
import { Text } from 'react-konva';

function EditableText({ id, initialText, onTextChange, onDragEnd, x, y }) {
  const [text, setText] = useState(initialText);
  const handleDragEnd = (e) => {
    const newX = e.target.x();
    const newY = e.target.y();
    onDragEnd(id, { x: newX, y: newY });
  };
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
    textarea.value = text;
    textarea.style.position = 'absolute';
    textarea.style.top = `${areaPosition.y}px`;
    textarea.style.left = `${areaPosition.x}px`;
    textarea.style.fontSize = '20px';
    textarea.style.border = 'none';
    textarea.style.padding = '0';
    textarea.style.margin = '0';
    textarea.style.overflow = 'hidden';
    textarea.style.resize = 'none';
    textarea.style.whiteSpace = 'pre-wrap';
    textarea.focus();

    // 숨겨진 span 요소를 사용하여 텍스트 너비 측정
    const span = document.createElement('span');
    span.style.fontSize = '20px'; // textarea와 동일한 스타일 적용
    span.style.whiteSpace = 'pre-wrap';
    span.style.visibility = 'hidden'; // 화면에 보이지 않도록 설정
    document.body.appendChild(span);

    const adjustSize = () => {
      span.textContent = textarea.value; // span에 textarea 값 복사
      textarea.style.width = `${span.offsetWidth + 10}px`; // span 너비 + 여백
      textarea.style.height = `${span.offsetHeight + 10}px`; // span 높이 + 여백
    };

    adjustSize(); // 초기 크기 조절
    textarea.addEventListener('input', adjustSize); // 입력 시 크기 조절

    const removeTextarea = () => {
      if (textarea.parentNode) {
        textarea.parentNode.removeChild(textarea);
      }
      if (span.parentNode) {
        span.parentNode.removeChild(span); // span 요소 제거
      }
      onTextChange(textarea.value);
    };

    textarea.addEventListener('blur', () => {
      setText(textarea.value);
      removeTextarea();
    });
  };

  return (
    <Text
      text={text}
      x={x}
      y={y}
      fontSize={20}
      draggable
      onDblClick={handleDoubleClick}
      onDragEnd={handleDragEnd} // 드래그 종료 이벤트 핸들러 추가
    />
  );
}

export default EditableText;
