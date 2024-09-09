import styled from 'styled-components';
import SvgMiddleIcon from '../../atom/SvgMiddleIcon';

function AddSlide({ onClick }) {
  return (
    <AddSlideBox>
      <Button onClick={() => onClick('2D')}>
        <SvgMiddleIcon type="2D" />
      </Button>
      <Button onClick={() => onClick('3D')}>
        <SvgMiddleIcon type="3D" />
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
  width: 16.666666666666664vw;
  height: 9.074074074074074vh;
  background-color: #fbfbfd;
  border-top: 1px solid #747684;
  border-right: 1px solid #747684;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 16%;
    bottom: 16%;
    width: 1.5px;
    background-color: #747684;
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
