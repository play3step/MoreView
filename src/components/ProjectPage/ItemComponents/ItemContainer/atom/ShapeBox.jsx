import styled from 'styled-components';
import Rectangle from '../../../../../assets/shapes/rectangle.png';

function ShapeBox({ onClick }) {
  return (
    <ShapeButton onClick={onClick}>
      <ShapeImg src={Rectangle} alt="Rectangle" />
    </ShapeButton>
  );
}

export default ShapeBox;

const ShapeButton = styled.button`
  background-color: transparent;
  border: none;
`;

const ShapeImg = styled.img`
  width: 2vw;
  height: 2.2vh;
`;
