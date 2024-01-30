import styled from 'styled-components';
import Rectangle from '../../../../../assets/shapes/rectangle.png';
import Circle from '../../../../../assets/shapes/circle.png';
import Triangle from '../../../../../assets/shapes/triangle.png';

function ShapeBox({ onClick, shape }) {
  return (
    <ShapeButton onClick={onClick}>
      {shape === 'Rectangle' && <ShapeImg src={Rectangle} alt="Rectangle" />}
      {shape === 'Circle' && <ShapeImg src={Circle} alt="Circle" />}
      {shape === 'Triangle' && <ShapeImg src={Triangle} alt="Triangle" />}
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
