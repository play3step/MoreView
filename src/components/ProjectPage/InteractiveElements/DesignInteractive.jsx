import styled from 'styled-components';
import ItemTitle from './ItemContainer/ItemTitle';

function DesignInteractive() {
  return (
    <DesignInteractiveContainer>
      <DesignItemContainer>
        <ItemTitle title="디자인" />
      </DesignItemContainer>
    </DesignInteractiveContainer>
  );
}

export default DesignInteractive;

const DesignInteractiveContainer = styled.div`
  width: 25.7638vw;
  height: 93.652vh;
  background-color: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
`;

const DesignItemContainer = styled.div`
  width: 22.083vw;
  height: 81.542vh;
  background-color: white;
  padding: 1.56vh 1.25vw 3.3vh 1.25vw;
`;
