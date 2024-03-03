import styled from 'styled-components';
import { ReactComponent as Rectangle } from '../../../../assets/shapes/rectangle.svg';
import { ReactComponent as Circle } from '../../../../assets/shapes/circle.svg';

function ShapeBox({ onClick, shape }) {
  return (
    <ShapeButton onClick={onClick}>
      {shape === 'Rectangle' && <Rectangle alt="Rectangle" />}
      {shape === 'Circle' && <Circle alt="Circle" />}
    </ShapeButton>
  );
}

export default ShapeBox;

const ShapeButton = styled.button`
  background-color: transparent;
  border: none;
`;
