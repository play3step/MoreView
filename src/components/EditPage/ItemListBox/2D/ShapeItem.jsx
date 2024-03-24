import styled from 'styled-components';
import SvgLargeIcon from '../../atom/SvgLargeIcon';
import useShapes from '../../../../hooks/AddItem/useShapes';

function ShapeItem({ menuRef }) {
  const { addShape } = useShapes();

  const handleAddShape = (shapeType) => () => {
    addShape(shapeType);
  };

  return (
    <ItemContainer ref={menuRef}>
      <SvgLargeIcon type="Rectangle" onClick={handleAddShape('Rectangle')} />
      <SvgLargeIcon type="Circle" onClick={handleAddShape('Circle')} />
      <SvgLargeIcon type="Line" onClick={handleAddShape('Line')} />
    </ItemContainer>
  );
}

export default ShapeItem;

const ItemContainer = styled.div`
  width: 21.458333333333332vw;
  height: 12.592592592592592vh;
  padding: 1.4583333333333333vw;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.2395833333333335vw;
  background-color: #ffffff;
`;
