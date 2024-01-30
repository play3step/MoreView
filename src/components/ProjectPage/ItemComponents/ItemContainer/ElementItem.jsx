import styled from 'styled-components';
import ItemTitle from './atom/ItemTitle';
import ShapeBox from './atom/ShapeBox';

function ElementItem({ onClick }) {
  return (
    <ElementItemBox>
      <Itemposition>
        <ItemTitle title="도형" />
        <ShapeBox onClick={onClick} />
      </Itemposition>
      <Itemposition>
        <ItemTitle title="표" />
      </Itemposition>
      <Itemposition>
        <ItemTitle title="사진" />
      </Itemposition>
      <Itemposition>
        <ItemTitle title="스티커" />
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
