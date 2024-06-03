import React, { useState, useEffect } from 'react';
import { Text } from 'react-konva';
import { useRecoilState } from 'recoil';
import { editState } from '../../../store/recoil';
import { textPropertiesState } from '../../../store/toolState';

function EditableText({ id, initialText, onTextChange, onDragEnd, x, y }) {
  const [text, setText] = useState(initialText.text);
  const [editing, setEditing] = useRecoilState(editState);
  const [textProps] = useRecoilState(textPropertiesState);

  useEffect(() => {
    let textarea;
    if (editing) {
      textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'absolute';
      textarea.style.top = `${y}px`;
      textarea.style.left = `${x}px`;
      textarea.style.fontSize = `${textProps.fontSize}px`;
      textarea.style.color = textProps.color;
      textarea.style.border = 'none';
      textarea.style.outline = 'none';
      textarea.style.background = 'none';
      textarea.style.resize = 'none';
      textarea.style.overflow = 'hidden';

      document.body.appendChild(textarea);
      textarea.focus();

      const handleInput = (e) => {
        setText(e.target.value);
      };

      textarea.addEventListener('input', handleInput);

      const handleBlur = () => {
        setEditing(false);
        onTextChange(text);
        if (textarea && document.body.contains(textarea)) {
          document.body.removeChild(textarea);
        }
      };

      return () => {
        textarea.removeEventListener('input', handleInput);
        textarea.removeEventListener('blur', handleBlur);
        if (document.body.contains(textarea)) {
          document.body.removeChild(textarea);
        }
      };
    }
    return () => {};
  }, [editing, text, textProps, onTextChange, setEditing, x, y]);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleDragEnd = (e) => {
    const newX = e.target.x();
    const newY = e.target.y();
    onDragEnd(id, { x: newX, y: newY });
  };

  return (
    !editing && (
      <Text
        text={text}
        x={x}
        y={y}
        fontSize={Number(textProps.fontSize)}
        fill={textProps.color}
        draggable
        onDblClick={handleDoubleClick}
        onDragEnd={handleDragEnd}
      />
    )
  );
}

export default EditableText;
