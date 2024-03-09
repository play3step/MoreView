import styled from 'styled-components';
import { ReactComponent as Rectangle } from '../../../../assets/shapes/rectangle.svg';
import { ReactComponent as Circle } from '../../../../assets/shapes/circle.svg';
import { ReactComponent as Line } from '../../../../assets/shapes/line.svg';

function ShapeBox({ onClick, shape }) {
  return (
    <ShapeButton onClick={onClick}>
      {shape === 'Rectangle' && (
        <Rectangle
          alt="Rectangle"
          width="3.125vw"
          height="5.555555555555555vh"
        />
      )}
      {shape === 'Circle' && (
        <Circle alt="Circle" width="3.125vw" height="5.555555555555555vh" />
      )}
      {shape === 'Line' && (
        <Line alt="Line" width="3.125vw" height="5.555555555555555vh" />
      )}
    </ShapeButton>
  );
}

export default ShapeBox;

const ShapeButton = styled.button`
  background-color: transparent;
  border: none;
`;
