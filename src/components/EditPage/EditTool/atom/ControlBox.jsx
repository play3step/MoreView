import styled from 'styled-components';
import { ReactComponent as Plus } from '../../../../assets/toolIcon/plus.svg';
import { ReactComponent as Minus } from '../../../../assets/toolIcon/minus.svg';

function ControlBox() {
  return (
    <BoxSize>
      <Plus width="2.083333333333333vw" height="3.7037037037037033vh" />
      <ControlData>0.75</ControlData>
      <Minus width="2.083333333333333vw" height="3.7037037037037033vh" />
    </BoxSize>
  );
}

export default ControlBox;

const BoxSize = styled.div`
  width: 9.635416666666668vw;
  height: 3.7037037037037033vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4583333333333333vw;
`;

const ControlData = styled.p`
  font-size: 1.4vw;
`;
