import styled from 'styled-components';
import ItemTitle from './atom/ItemTitle';
import ItemList from './atom/ItemList';

function ElementItem() {
  return (
    <ElementItemBox>
      <Itemposition>
        <ItemTitle title="도형" />
        <ItemList />
      </Itemposition>
      <Itemposition>
        <ItemTitle title="표" />
        <ItemList />
      </Itemposition>
      <Itemposition>
        <ItemTitle title="사진" />
        <ItemList />
      </Itemposition>
      <Itemposition>
        <ItemTitle title="스티커" />
        <ItemList />
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
