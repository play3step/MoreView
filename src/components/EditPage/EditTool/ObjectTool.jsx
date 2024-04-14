import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import ControlBox from './atom/ControlBox';
import { objectSizeState } from '../../../store/toolState';

function ObjectTool() {
  const [sizeData, setSizeData] = useRecoilState(objectSizeState);

  const plusSizeHandle = () => {
    setSizeData((prevSizeData) => ({
      ...prevSizeData,
      size: prevSizeData.size + 0.01,
    }));
  };
  const minusSizeHandle = () => {
    setSizeData((prevSizeData) => ({
      ...prevSizeData,
      size: prevSizeData.size > 0 ? prevSizeData.size - 0.01 : 0,
    }));
  };
  const plusLightHandle = () => {
    setSizeData((prevSizeData) => ({
      ...prevSizeData,
      light: prevSizeData.light + 0.5,
    }));
  };
  const minusLightHandle = () => {
    setSizeData((prevSizeData) => ({
      ...prevSizeData,
      light: prevSizeData.light > 0 ? prevSizeData.light - 0.5 : 0,
    }));
  };
  return (
    <ObjectToolBox>
      <ToolText>Object Size</ToolText>
      <ControlBox
        sizeData={sizeData.size}
        plus={plusSizeHandle}
        minus={minusSizeHandle}
      />
      <ToolText>Light intensity</ToolText>
      <ControlBox
        sizeData={sizeData.light}
        plus={plusLightHandle}
        minus={minusLightHandle}
      />
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
