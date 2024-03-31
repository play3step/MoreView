import styled from 'styled-components';

function TextTool() {
  return (
    <ToolContainer>
      <p>Text</p>
      <p>Size</p>
      <p>Color</p>
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
