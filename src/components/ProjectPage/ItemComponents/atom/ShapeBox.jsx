import styled from 'styled-components';
import { ReactComponent as Rectangle } from '../../../../assets/shapes/rectangle.svg';
import { ReactComponent as Circle } from '../../../../assets/shapes/circle.svg';
import { ReactComponent as Triangle } from '../../../../assets/shapes/triangle.svg';

function ShapeBox({ onClick, shape }) {
  return (
    <ShapeButton onClick={onClick}>
      {shape === 'Rectangle' && <Rectangle alt="Rectangle" />}
      {shape === 'Circle' && <Circle alt="Circle" />}
      {shape === 'Triangle' && <Triangle alt="Triangle" />}
    </ShapeButton>
  );
}

export default ShapeBox;

const ShapeButton = styled.button`
  background-color: transparent;
  border: none;
`;
