import styled from 'styled-components';
import CloseBtn from '../../../button/CloseBtn';
import Mini3dBox from '../atom/Mini3dBox';

function ObjectSearch({ onClose }) {
  return (
    <ObjectInteractiveContainer>
      <ObjectItemContainer>
        <Mini3dBox />
      </ObjectItemContainer>
      <ClosePostion>
        <CloseBtn onClose={onClose} />
      </ClosePostion>
    </ObjectInteractiveContainer>
  );
}

export default ObjectSearch;

const ObjectInteractiveContainer = styled.div`
  width: 25.7638vw;
  height: 93.652vh;
  background-color: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
`;
const ObjectItemContainer = styled.div`
  width: 22.083vw;
  height: 81.542vh;
  background-color: white;
  padding: 1.56vh 1.25vw 3.3vh 1.25vw;
`;

const ClosePostion = styled.div`
  position: absolute;
  right: -0.1vw;
`;
