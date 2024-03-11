import styled from 'styled-components';

import { ReactComponent as Page2d } from '../../../../assets/icon/2d.svg';
import { ReactComponent as Page3d } from '../../../../assets/icon/3d.svg';

function AddSlide({ onClick }) {
  return (
    <AddSlideBox onClick={onClick}>
      <Page2d width="3.3333333333333335vw" height="5.9259259259259265vh" />
      <Page3d width="3.3333333333333335vw" height="5.9259259259259265vh" />
    </AddSlideBox>
  );
}

export default AddSlide;

const AddSlideBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.958vw;
  height: 16.11vh;
  border: 1px dashed;
  border-radius: 25px;
  background-color: #d9d9d9;
  flex-shrink: 0;
`;
