import styled from 'styled-components';
import ItemTitle from './atom/ItemTitle';
import ShapeBox from './atom/ShapeBox';

function ElementItem({ onAddShape }) {
  return (
    <ElementItemBox>
      <Itemposition>
        <ItemTitle title="도형" />
        <ShapeBox onClick={() => onAddShape('Rectangle')} shape="Rectangle" />
        <ShapeBox onClick={() => onAddShape('Circle')} shape="Circle" />
      </Itemposition>
    </ElementItemBox>
  );
}

export default ElementItem;

const ElementItemBox = styled.div`
  width: 19.5138vw;
`;

const Itemposition = styled.div`
  margin-top: 1.878vh;
`;
