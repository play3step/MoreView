import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import ControlBox from './atom/ControlBox';
import { objectSizeState } from '../../../store/toolState';

function ObjectTool() {
  const [sizeData, setSizeData] = useRecoilState(objectSizeState);

  const plusEventHandle = () => {
    setSizeData((prevSizeData) => ({
      ...prevSizeData,
      size: prevSizeData.size + 0.01,
    }));
  };
  const minusEventHandle = () => {
    setSizeData((prevSizeData) => ({
      ...prevSizeData,
      size: prevSizeData.size - 0.01,
    }));
  };
  return (
    <ObjectToolBox>
      <ToolText>Object Size</ToolText>
      <ControlBox
        sizeData={sizeData.size}
        plus={plusEventHandle}
        minus={minusEventHandle}
      />
      <ToolText>Light intensity</ToolText>
      <ControlBox sizeData={sizeData.size} />
    </ObjectToolBox>
  );
}

export default ObjectTool;

const ObjectToolBox = styled.div`
  width: 16.666666666666664vw;
  height: 19.25925925925926vh;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ToolText = styled.p`
  font-size: 0.82vw;
  margin-bottom: 1.6vh;
  margin-top: 0.6vw;
`;
