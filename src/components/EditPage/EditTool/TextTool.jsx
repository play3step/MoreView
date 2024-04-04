import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { textPropertiesState } from '../../../store/toolState';
import { editState } from '../../../store/recoil';

function TextTool() {
  const [textProps, setTextProps] = useRecoilState(textPropertiesState);
  const setEditing = useSetRecoilState(editState);

  const handleFontSizeChange = (e) => {
    setTextProps((prevProps) => ({ ...prevProps, fontSize: e.target.value }));
  };

  const handleColorChange = (e) => {
    setTextProps((prevProps) => ({ ...prevProps, color: e.target.value }));
  };

  const handleApply = () => {
    setEditing(false);
  };
  return (
    <ToolContainer>
      <p>Text</p>
      <input
        type="number"
        value={textProps.fontSize}
        onChange={handleFontSizeChange}
      />
      <input
        type="color"
        value={textProps.color}
        onChange={handleColorChange}
      />
      <button onClick={handleApply} type="button">
        Apply
      </button>
    </ToolContainer>
  );
}

export default TextTool;

const ToolContainer = styled.div`
  width: 3.854166666666667vw;
  height: 31.48148148148148vh;
  background-color: #fbfbfd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3vw;
`;
