import styled from 'styled-components';

import { ReactComponent as Page2d } from '../../../../assets/icon/2d.svg';
import { ReactComponent as Page3d } from '../../../../assets/icon/3d.svg';

function AddSlide({ onClick }) {
  return (
    <AddSlideBox>
      <Button onClick={() => onClick('2d')}>
        <Page2d width="4.375vw" height="7.777777777777778vh" />
      </Button>
      <Button onClick={() => onClick('3d')}>
        <Page3d width="4.375vw" height="7.777777777777778vh" />
      </Button>
    </AddSlideBox>
  );
}

export default AddSlide;

const AddSlideBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 18.958vw;
  height: 17.51vh;
  border: 2.5px dashed;
  border-radius: 25px;
  background-color: #d9d9d9;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 16%;
    bottom: 16%;
    width: 1.5px;
    background-color: #000;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;
