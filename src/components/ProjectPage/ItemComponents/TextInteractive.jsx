import styled from 'styled-components';
import ItemTitle from './atom/ItemTitle';

import CloseBtn from '../../button/CloseBtn';

function TextInteractive({ onClose }) {
  return (
    <TextInteractiveContainer>
      <TextItemContainer>
        <ItemTitle title="텍스트 스타일" />

        <ItemTitle title="글꼴" />
      </TextItemContainer>
      <ClosePostion>
        <CloseBtn onClose={onClose} />
      </ClosePostion>
    </TextInteractiveContainer>
  );
}

export default TextInteractive;

const TextInteractiveContainer = styled.div`
  width: 25.7638vw;
  height: 93.652vh;
  background-color: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
`;

const TextItemContainer = styled.div`
  width: 22.083vw;
  height: 81.542vh;
  background-color: white;
  padding: 1.56vh 1.25vw 3.3vh 1.25vw;
`;

const ClosePostion = styled.div`
  position: absolute;
  right: -0.1vw;
`;
